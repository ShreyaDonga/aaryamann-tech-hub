export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  image: string;
  tags: string[];
  content: ProjectContent;
}

export interface ProjectContent {
  introduction?: string;
  objective?: string;
  innovation?: string;
  methodology?: string;
  results?: string;
  materials?: string[];
  citations?: string[];
  abstract?: string;
  background?: string;
  subProjects?: SubProject[];
}

export interface SubProject {
  title: string;
  description: string;
}

export const skills = [
  "Python",
  "Arduino",
  "ESP32",
  "IoT Systems",
  "Robotics",
  "Machine Learning",
  "Sensors",
  "3D Design",
  "Unity VR",
  "HTML",
  "C Programming",
  "PCB Design",
  "Research",
  "Data Analysis",
];

export const projects: Project[] = [
  {
    id: "spider-robot",
    title: "Radio-Wave Operated Quadruped Spider Robot",
    shortTitle: "Spider Bot",
    category: "Robotics & Search Rescue",
    summary: "A spider-inspired quadruped robot designed for search and rescue operations during disasters. Features radio control, night-vision camera, and real-time video/audio transmission.",
    image: "spider-robot",
    tags: ["Robotics", "Arduino", "3D Printing", "Radio Control"],
    content: {
      abstract: "This report details the spider inspired quadruped robot for search and rescue operations during disasters. My inspiration to create this bot was that I saw on news that on 12 November 2023, a section of the Silkyara Bend–Barkot tunnel in Uttarakhand, caved in while under construction which resulted in 41 workers getting trapped. Moreover, as a child I saw a spider-bot on TV which really fascinated me, and hence I decided to combine these two interests and create this project. The main advantages of this robot are: it is small, can be easily maneuvered into even tight spaces, uses radio control which ensures long range and has a camera with night vision for seeing in the dark.",
      introduction: "Natural disasters such as earthquakes, floods, wildfires, lightning, tsunamis pose difficult challenges in search and rescue missions. Conventional rescue robots have limited mobility and flexibility when working in debris and cramped spaces. On the other hand smaller bots like a spider bot have much better maneuverability while moving in tight spaces. Spider robots have been developed at the University of Tartu along with the Italian institute of technology. The spider-like natural mobility of the prototype robot will be coupled with an intelligent control system and in-camera real-time feedback platform-this lightweight structure, accommodative for disaster areas with rugged terrain and is suitable for six independently moving legs. This robot development is aligned with the SDG 3 (Good Health and Well-being) and SDG 13 (Climate Action) as it will enhance emergency response capabilities and mitigate the risks of climate-induced natural disasters.",
      background: "There have been significant attempts by researchers in designing robots for emergency response, many of the most successful designs have been found to be inspired from biological organisms. Amongst them, spider-inspired robots have attracted much attention because of their capabilities in navigating challenging terrains. The multi-legged robot is established to be more stable and mobile when operating in an uneven or obstacle-strewn terrain than the wheeled or tracked robot. Some examples include spider-inspired robots that utilize some soft robotics principles to be flexible and agile in their movements. Scientists have designed machines in the form of how a spider moves, with hydraulically operated joints allowing for fluid movement in all legs. Such devices already showed remarkable success in many climbing, crawling, or navigating tight spaces situations. The four-legged spider robot has both the use of the Klann and Theo Jansen mechanisms for simulating natural walking motions. These mechanisms have been successfully applied in robots designed for mine rescue operations and similar hazardous environments.",
      materials: [
        "3D printed chassis - 3D model from Thingiverse",
        "Aluminum metal chassis - SunFounder PiCrawler kit",
        "Arduino Nano microcontroller",
        "Nano 328P Expansion Adapter Breakout Board",
        "12x 9g Plastic geared Servo motors (180° rotation)",
        "12x 9g Metal geared Servo motors (180° rotation)",
        "Servo Horn, screws, plastic supports",
        "Voltage Regulator circuit (5V and 3.3V)",
        "3A Switch Mode UBEC 5V 6V",
        "6 Channel Transmitter and Receiver (2.4 GHz)",
        "PTZ Wi-Fi Camera (720p, night vision, audio)",
        "2x 18650 lithium batteries",
        "On-Off rocker switch",
        "Wire organizer, foam tape, acrylic mount"
      ],
      methodology: "Step 1: Collected all electronic parts and 3D printed the chassis. Step 2: Used the Nano Expansion Board to connect all servos according to reference diagrams. Step 3: Calibrated each servo to initial positions (90°). Step 4: Assembled chassis with SG90 plastic gear servos on coxa joints. Step 5: Assembled 4 separate legs with 2 servos each for tibia and femur joints. Step 6: Attached legs to coxa joints via servo horns. Step 7: Coded walking gaits using Quadbot Inverse Kinematics for FORWARD, BACKWARD, LEFT, RIGHT movements. Step 8: Upgraded to SunFounder Aluminum Chassis with metal-geared servos for stability. Step 9-10: Fixed leg inversion issues by reconfiguring code. Step 11-12: Calibrated radio control system and integrated joystick values. Step 13-14: Mounted batteries, UBEC, RC receiver, and 720p Wi-Fi night-vision camera. Step 15-16: Organized wiring and uploaded final code for testing.",
      results: "The spider robot demonstrates functionality that is perfect for search and rescue missions in areas more inaccessible to humans. Its servo motor driven walking mechanism enables it many degrees of freedom and allows it to maneuver itself through tight gaps. The Wi-Fi camera provides live videos, which allows someone using the device to control it in real time, while its infrared night vision ensures visibility in low light scenarios allowing for operation regardless of time of day. The camera's built in audio recording capabilities helps the operator understand what is going around the robot, and perhaps catch signals of any distress calls. Additionally, by attaching different kinds of sensors to it (eg. PIR, Temperature, M4 gas sensors, etc) this robot could serve different purposes which makes it adaptable to many scenarios. Finally, radio control offers reliable navigation especially where Wi-Fi signals may be obstructed, maintaining smooth control over distances.",
      citations: [
        "https://researchinestonia.eu/2024/05/14/spider-inspired-robots/",
        "https://sdgs.un.org/goals/goal3",
        "https://www.un.org/en/academic-impact/robots-rescue-using-technology-mitigate-effects-natural-disasters"
      ]
    }
  },
  {
    id: "smart-compost",
    title: "Dual-Function Smart Compost System",
    shortTitle: "Smart Compost",
    category: "IoT & AI Innovation",
    summary: "An IoT-integrated smart compost bin that monitors quality and automates production using sensors, ESP32, and machine learning for real-time quality scoring.",
    image: "compost",
    tags: ["IoT", "ESP32", "Machine Learning", "Sensors"],
    content: {
      introduction: "The agricultural sector is still a major backbone of India's economy. However, farmers face increasing challenges because of diminished soil fertility and low organic carbon levels. High fertilizers cost lead to substantial debts. Overreliance on agrochemicals degrades the soil structure, reduces water capacity, and reduces long-term productivity. Composting, on other hand, is a sustainable and low-cost solution. It recycles organic into soil amendments that improve soil fertility, foster the development of beneficial soil microorganisms, and lessen chemical dependence. The long duration of the composting process, poor and variable product quality, and a lack of dependable evaluation methods are some of the reasons composting has not gained greater popularity in this country. For such obstacles, this work presents a dual-function smart compost system that can monitor compost quality and produce compost under controlled accelerated conditions. Then a manually operated IoT dashboard is created for Compost quality improvements suggestions. Such an advancement gives farmers the first chance to validate compost quality before application.",
      innovation: "This project showcases a smart compost system with the capability of active compost production and monitoring in real-time. Other composting systems are priced out of the range. Traditionally, composting methods involved time periods of 60-90 days and involved complete manual oversight without the ability to evaluate the compost. Whereas this system seamlessly integrates low-cost sensors, IoT connectivity, and machine learning to produce a user-friendly and compact device along with compost improvements dashboard aimed specifically at small-scale farmers and households. The IoT and AI integrated within single composting technology is not found in the market, so AI driven composting technology is simply innovative. Farmers and households are also able to evaluate the wholeness and quality of compost before applying it.",
      methodology: "Sensor validation and data collection formed the first part and the integration of device development and automation formed the second part of this project's design methodology. Five types of compost were prepared: vermicompost powder, liquid organic manure, premium spray, fermented soil material, and nano-silicon. To ensure uniform conditions for testing, each mixture of compost and soil was placed into identical containers. Each of the setups during the 15 days of continuous monitoring had NPK, temperature (DS18B20), moisture (DHT11), and ammonia (MQ137) sensors. ESP32 microcontrollers logged the data which were then calibrated to a ±10% tier that supports the sensor reliability against literature values which attested to the accuracy of the low budget sensor network. If compost moisture content dropped below 60%, a water pump was activated, a programmable PTC heater was used to maintain thermophilic conditions, and the exhaust fan was activated to periodically expel ammonia gas and ensure proper aeration. Sensor data were displayed on an LCD screen and sent to a cloud-based IoT dashboard for users to monitor compost quality in real time. To complete the dashboard, we built a machine learning model that evaluated the data and offered suggestions on how to improve composting, ultimately calculating a CQS (Compost Quality Score). An option was also included to change the dashboard language, making it easier to use for farmers.",
      results: "The project successfully developed and validated a dual-function smart composting system that integrates real-time monitoring with compost production in a controlled environment. Over a 15-day validation period data collected indicated that the system reliably maintained composting conditions: temperature followed the expected thermophilic phase pattern, moisture was held between 50–60%, and ammonia levels stabilized over time, reflecting a balanced decomposition process. The water pump ensured effective moisture retention, the PTC heater maintained desired temperature and the exhaust fan lowered ammonia buildup up to 20%, improving both odor control and nitrogen retention. The system achieved faster compost maturity within 45–55 days—roughly 20–25% quicker than conventional 60–90-day composting cycles. Economically, production costs per kilogram of compost were reduced by 40–50% through efficient resource utilization and recycling of household waste. A digital dashboard presented the Compost Quality Score (CQS), providing users with real-time insights into nutrient grade and maturity levels.",
      materials: [
        "NPK sensor",
        "Temperature sensor (DS18B20)",
        "Moisture sensor (DHT11)",
        "Ammonia sensor (MQ137)",
        "ESP32 microcontroller",
        "Automatic PTC heater",
        "Moisture pump",
        "Exhaust fan",
        "LCD display",
        "Cloud IoT dashboard",
        "ML model for CQS scoring"
      ],
      citations: [
        "https://www.abhijeetshirke.in/organic-waste-composting/",
        "https://thewire.in/government/how-natural-farming-can-revive-indias-farmland"
      ]
    }
  },
  {
    id: "cybersecurity-ai",
    title: "Cybersecurity & AI Research Initiatives",
    shortTitle: "Cyber & AI",
    category: "AI & Security Research",
    summary: "A collection of AI and cybersecurity projects including COVID detection using X-ray ML, Bitcoin prediction models, ethical hacking simulations, and CTF participation.",
    image: "cybersecurity",
    tags: ["AI", "Python", "Machine Learning", "Cybersecurity"],
    content: {
      introduction: "This collection represents my journey into the intersection of artificial intelligence and cybersecurity. Through hands-on projects and research, I've explored how AI can solve real-world problems while also understanding the fundamentals of protecting digital systems.",
      subProjects: [
        {
          title: "COVID-19 Detection using X-Ray ML",
          description: "Built an AI model to detect COVID-19 from chest X-ray images using convolutional neural networks and Python. The project involved data preprocessing, model training, and validation against medical datasets."
        },
        {
          title: "Bitcoin Price Prediction",
          description: "Developed a regression-based AI model in Python to predict Bitcoin price movements using historical data and market indicators."
        },
        {
          title: "Handwriting Recognition Engine",
          description: "Created a multi-language handwriting recognition system using deep learning techniques, capable of identifying characters across different scripts."
        },
        {
          title: "UNSDG Climate Action AI Demo",
          description: "Built a demonstration project for the Girls in India AI 2021 event focusing on UN Sustainable Development Goal 13: Climate Action."
        },
        {
          title: "Ethical Hacking & Web Security",
          description: "Explored ethical hacking basics, web security simulations, and network protection experiments. Participated in early Capture The Flag (CTF) competitions."
        },
        {
          title: "Gender Equality AI Project",
          description: "Developed an awareness project on International Women's Day focusing on gender equality using AI-driven insights."
        }
      ]
    }
  }
];

export const aboutData = {
  name: "Aaryamann Goenka",
  title: "Young Engineer | Robotics & AI Innovator | Research & IoT Developer",
  bio: "Young technologist specializing in robotics, IoT systems, AI prototypes, sensor networks, and disaster-response engineering. Passionate about building machines and systems that solve real-world problems.",
  technicalBackground: [
    "Arduino, ESP32, IoT automation",
    "3D designing, VR in Unity",
    "Python for AI & ML",
    "PCB design & electronics soldering",
    "Robotics inverse kinematics",
    "Web development basics"
  ],
  achievements: [
    "Built an AI-integrated smart compost system",
    "Designed a quadruped spider robot for rescue operations",
    "Founded AI Club at school",
    "Conducted materials science research for IRIS Fair",
    "Tech Secretary - led AV, coding, tech fest operations",
    "Silver Medal — Hong Kong International Science Olympiad",
    "Distinction — Pascal Contest (University of Waterloo)"
  ],
  education: {
    school: "Bombay International School, Mumbai, India",
    graduation: "Anticipated 2027",
    grades: "IGCSE Grade 9: English A*, Literature A*, Chemistry A*, Physics A*, Integrated Mathematics A*, Computer Science A*"
  },
  courses: [
    "AI with Python (Coding & More)",
    "Arduino & IoT (Maker's Asylum)",
    "PCB Design & Soldering",
    "Unity VR Development",
    "3D Designing"
  ],
  leadership: [
    "Head Boy, Bombay International School (2024-Present)",
    "Tech Secretary (2023-2024)",
    "Founder, AI Club",
    "Logistics Head, Engineering Club"
  ]
};

export const contactData = {
  email: "aaryamann.2771@bis.edu.in",
  phone: "+91 8291817701",
  location: "Mumbai, India",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};
