// Google Earth Engine Script to Export Urban Sprawl Data
// Run this in the Google Earth Engine Code Editor: https://code.earthengine.google.com/
// Then export the results and save as urban_sprawl_data.csv

// PARAMETERS
var year = 2021;  // Change to 2019 or 2021

var nlcdIds = {
  2019: 'USGS/NLCD_RELEASES/2019_REL/NLCD',
  2021: 'USGS/NLCD_RELEASES/2021_REL/NLCD'
};

var countyCollectionId = 'TIGER/2018/Counties';
var scale = 30;

// LOAD DATA
var nlcd = ee.ImageCollection(nlcdIds[year])
  .filter(ee.Filter.eq('system:index', String(year)))
  .first()
  .select('landcover');

var counties = ee.FeatureCollection(countyCollectionId)
  .map(function(f) {
    return f.simplify(100);
  });

// DEVELOPED MASK (21-24)
var developed = nlcd.remap(
  [21, 22, 23, 24],
  [1, 1, 1, 1],
  0
);

// AREA IMAGES
var pixelArea = ee.Image.pixelArea();
var developedArea = developed.multiply(pixelArea).rename('developed_area');
var totalArea = pixelArea.rename('total_area');
var composite = developedArea.addBands(totalArea);

// REDUCE BY COUNTY
var countyStats = composite.reduceRegions({
  collection: counties,
  reducer: ee.Reducer.sum().repeat(2),
  scale: scale,
  crs: nlcd.projection(),
  tileScale: 4
});

// COMPUTE FRACTIONS
var result = countyStats.map(function(f) {
  var dev = ee.Number(f.get('developed_area_sum'));
  var tot = ee.Number(f.get('total_area_sum'));
  var stateFP = ee.String(f.get('STATEFP')).padStart(2, '0');
  var countyFP = ee.String(f.get('COUNTYFP')).padStart(3, '0');
  var fips = stateFP.cat(countyFP);
  return f.set({
    STATEFP: stateFP,
    COUNTYFP: countyFP,
    fips: fips,
    year: year,
    developed_area_m2: dev,
    total_area_m2: tot,
    developed_fraction: dev.divide(tot)
  });
});

// Keep only desired properties
result = result.select(
  ['STATEFP', 'COUNTYFP', 'fips', 'year', 'NAME', 'developed_area_m2', 'total_area_m2', 'developed_fraction']
);

// EXPORT TO DRIVE
// Uncomment and run this to export the data
Export.table.toDrive({
  collection: result,
  description: 'urban_sprawl_' + year,
  folder: 'GEE_Exports',
  fileFormat: 'CSV',
  selectors: ['STATEFP', 'COUNTYFP', 'fips', 'year', 'NAME', 'developed_area_m2', 'total_area_m2', 'developed_fraction']
});

// Preview
Map.centerObject(counties, 4);
Map.addLayer(
  developed.updateMask(developed.eq(1)),
  {palette: ['red']},
  'Developed mask ' + year,
  false
);

print('Example county:', result.first());
print('Total counties:', result.size());
print('Export task created. Check Tasks tab to run the export.');



