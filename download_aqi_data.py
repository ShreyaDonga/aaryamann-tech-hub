#!/usr/bin/env python3
"""
Download and process AQI (Air Quality Index) data from EPA for years 2018-2023.
This script downloads daily AQI data by county and aggregates it by year.
"""

import pandas as pd
import zipfile
import io
import requests
import os
from pathlib import Path

def download_and_process_aqi(year):
    """Download AQI data for a specific year and return processed dataframe."""
    url = f"https://aqs.epa.gov/aqsweb/airdata/daily_aqi_by_county_{year}.zip"
    
    print(f"Downloading AQI data for {year}...")
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        # Extract ZIP file
        with zipfile.ZipFile(io.BytesIO(response.content)) as zip_file:
            # Find the CSV file in the ZIP
            csv_files = [f for f in zip_file.namelist() if f.endswith('.csv')]
            if not csv_files:
                print(f"No CSV file found in ZIP for {year}")
                return None
            
            # Read the CSV
            csv_content = zip_file.read(csv_files[0])
            df = pd.read_csv(io.BytesIO(csv_content))
            
            # Check what columns are available
            print(f"Columns in {year} data: {list(df.columns)}")
            
            # Handle different column name formats
            date_col = None
            state_col = None
            county_col = None
            aqi_col = None
            
            # Try to find the right column names
            for col in df.columns:
                col_lower = col.lower()
                if 'date' in col_lower:
                    date_col = col
                elif 'state' in col_lower and 'name' in col_lower:
                    state_col = col
                elif 'county' in col_lower and 'name' in col_lower:
                    county_col = col
                elif 'aqi' in col_lower:
                    aqi_col = col
            
            # If we found the columns, process the data
            if date_col and state_col and county_col and aqi_col:
                # Check if we have state and county codes for FIPS
                state_code_col = None
                county_code_col = None
                for col in df.columns:
                    col_lower = col.lower()
                    if 'state' in col_lower and 'code' in col_lower:
                        state_code_col = col
                    elif 'county' in col_lower and 'code' in col_lower:
                        county_code_col = col
                
                # First, ensure state_code and county_code are numeric
                if state_code_col:
                    df[state_code_col] = pd.to_numeric(df[state_code_col], errors='coerce')
                if county_code_col:
                    df[county_code_col] = pd.to_numeric(df[county_code_col], errors='coerce')
                
                # Group by date, state, and county, calculate mean AQI
                # Include codes in grouping to preserve them
                group_cols = [date_col, state_col, county_col]
                if state_code_col:
                    group_cols.append(state_code_col)
                if county_code_col:
                    group_cols.append(county_code_col)
                
                daily_by_county = (
                    df.groupby(group_cols, as_index=False)[aqi_col]
                      .mean()
                )
                
                # Rename columns for consistency
                new_cols = ['date', 'state_name', 'county_name', 'aqi']
                if state_code_col:
                    new_cols.append('state_code')
                if county_code_col:
                    new_cols.append('county_code')
                
                daily_by_county.columns = new_cols
                
                # Add year column
                daily_by_county['year'] = year
            else:
                print(f"Could not find required columns. Available: {list(df.columns)}")
                return None
            
            print(f"Processed {len(daily_by_county)} records for {year}")
            return daily_by_county
            
    except Exception as e:
        print(f"Error processing {year}: {e}")
        return None

def aggregate_by_year_and_county(df):
    """Aggregate daily AQI data to yearly averages by county."""
    # Group by columns available (don't include codes in grouping)
    group_cols = ["year", "state_name", "county_name"]
    
    # Also get max, min, and count
    agg_dict = {
        "aqi": ["mean", "max", "min", "count"]
    }
    
    # If we have codes, we need to handle them separately
    if 'state_code' in df.columns and 'county_code' in df.columns:
        # First aggregate AQI stats
        yearly_stats = (
            df.groupby(group_cols, as_index=False)["aqi"]
              .agg(agg_dict)
        )
        
        # Flatten column names
        new_cols = group_cols.copy()
        new_cols.extend(["avg_aqi", "max_aqi", "min_aqi", "days_count"])
        yearly_stats.columns = new_cols
        
        # Get state and county codes (take first value for each county)
        code_lookup = df[group_cols + ['state_code', 'county_code']].drop_duplicates(
            subset=group_cols
        )
        
        # Merge codes back
        yearly_stats = yearly_stats.merge(
            code_lookup[group_cols + ['state_code', 'county_code']],
            on=group_cols,
            how='left'
        )
        
        # Create FIPS code - ensure codes are integers
        yearly_stats['state_code'] = pd.to_numeric(yearly_stats['state_code'], errors='coerce').fillna(0).astype(int)
        yearly_stats['county_code'] = pd.to_numeric(yearly_stats['county_code'], errors='coerce').fillna(0).astype(int)
        
        yearly_stats['fips'] = (
            yearly_stats['state_code'].astype(str).str.zfill(2) + 
            yearly_stats['county_code'].astype(str).str.zfill(3)
        )
        
        # Remove rows with invalid FIPS (00000)
        yearly_stats = yearly_stats[yearly_stats['fips'] != '00000']
    else:
        # No codes available, just aggregate
        yearly_stats = (
            df.groupby(group_cols, as_index=False)["aqi"]
              .agg(agg_dict)
        )
        
        # Flatten column names
        new_cols = group_cols.copy()
        new_cols.extend(["avg_aqi", "max_aqi", "min_aqi", "days_count"])
        yearly_stats.columns = new_cols
    
    return yearly_stats

def match_county_fips(df):
    """Match county names to FIPS codes using state and county names."""
    # We'll need to match counties - this is a simplified approach
    # In practice, you might need a county name to FIPS mapping file
    # For now, we'll create a combined state+county identifier
    
    # Create a state-county identifier
    df['state_county'] = df['state_name'] + ', ' + df['county_name']
    
    return df

def main():
    """Main function to download and process all AQI data."""
    years = range(2018, 2024)  # 2018 to 2023
    
    all_data = []
    
    for year in years:
        df = download_and_process_aqi(year)
        if df is not None:
            all_data.append(df)
    
    if not all_data:
        print("No data downloaded. Exiting.")
        return
    
    # Combine all years
    combined_df = pd.concat(all_data, ignore_index=True)
    print(f"\nTotal records: {len(combined_df)}")
    
    # Aggregate by year and county
    yearly_stats = aggregate_by_year_and_county(combined_df)
    print(f"\nYearly statistics by county: {len(yearly_stats)} records")
    
    # Save to CSV
    output_file = "aqi_data_by_county.csv"
    yearly_stats.to_csv(output_file, index=False)
    print(f"\nData saved to {output_file}")
    
    # Also save a summary
    summary = yearly_stats.groupby('year').agg({
        'avg_aqi': 'mean',
        'max_aqi': 'max',
        'min_aqi': 'min',
        'days_count': 'sum'
    }).round(2)
    print("\nSummary by year:")
    print(summary)
    
    print(f"\n✅ AQI data processing complete!")
    print(f"File saved: {output_file}")
    print(f"\nNote: You may need to manually match county names to FIPS codes")
    print(f"for integration with the dashboard.")

if __name__ == "__main__":
    main()



