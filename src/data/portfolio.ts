export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  image: string;
  thumbnail?: string;
  tags: string[];
  content: ProjectContent;
}

export type MediaType = "image" | "video" | "pdf";

export interface MediaItem {
  type: MediaType;
  src: string;
  label?: string;
  description?: string;
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
  media?: MediaItem[];
  hardwareGroups?: HardwareGroup[];
  comparisons?: ComparisonStage[];
  contentFlow?: ContentFlowItem[];
}

export interface HardwareGroup {
  title: string;
  items: string[];
}

export interface ComparisonStage {
  title: string;
  note?: string;
  hardwareComponents: string[];
  functions: string[];
}

export interface ContentFlowItem {
  mediaIndex: number;
  title: string;
  subtitle?: string;
  text: string;
  bullets?: string[];
}

export interface SubProject {
  title: string;
  description: string;
}

export const skills = [
  "Python",
  "Arduino",
  "ESP32",
  "IoT automation (ESP32)",
  "ANSYS",
  "MATLAB",
  "GIS (Python)",
  "3D CAD",
  "ML pipelines",
  "Cloud dashboards",
  "Web dashboards",
  "PCB design",
  "Soldering",
];

export const projects: Project[] = [
  {
    id: "beetlebot",
    title: "Beetlebot: Quadruped Fire Rescue Robot",
    shortTitle: "BeetleBot",
    category: "Projects",
    summary:
     "Built a quadruped fire rescue robot with Arduino Nano, using 12 servos for navigation, assessment, and hazard response. Integrated a Wi-Fi camera with night vision and audio, alongside a 6-channel RC receiver for long-range control[cite: 4].",    image: "/projects/beetlebot/beetlebot_demo.mp4",
    tags: ["Fire rescue robotics", "Night vision", "Dual-mode control", "Field deployment"],
    content: {
      introduction:
        "BeetleBot is a quadruped search-and-rescue robot designed for confined-space fire response and hazard assessment in emergency scenarios.",
      abstract:
        "A specialized fire rescue quadruped equipped with Arduino Nano microcontroller and 12 servo motors for independent limb control and debris navigation. The system integrates a 6-channel RC receiver for direct operator control with extended range, a Wi-Fi enabled 720p IR camera for night vision surveillance, and bidirectional audio feed for real-time environmental monitoring in low-visibility rescue situations.",
      innovation:
        "The innovative dual-control architecture maintains operator communication through either RC failsafe or Wi-Fi telemetry, ensuring rescue link continuity even with signal loss. The 12-servo inverse kinematics gait system enables traversal across rubble, clutter, and confined spaces typical in fire-damaged structures. The integrated night vision and audio sensors allow operators to detect heat signatures and victim vocalizations without physical entry, reducing responder risk.",
      methodology:
        "The development process involved iterative refinement from Mark 1 to Mark 2 prototype following feedback from DRDO Delhi. Technical implementation included Arduino Nano programming for servo control sequences, integration of a 6-channel RC receiver module with ESP32 for telemetry bridge, calibration of 12-servo gait patterns for forward/backward/lateral/rotational movement, mounting and tuning of 720p IR Wi-Fi camera module, integration of audio feedback circuit, and extensive field validation in cluttered debris environments to verify maneuvering capability under realistic rescue conditions.",
      results:
        "BeetleBot successfully demonstrated operational capability through formal briefings at DRDO New Delhi and Naval Dockyard Mumbai, with the receiving officer from the Fleet Testing and Tuning Department providing formal appreciation for the innovation. The robot earned recognition as the Most Innovative Tech Project at BIS Tech Fair 2025 and was selected as a keynote presentation speaker at the Fire Safety Association of India Mumbai Conference, where it was demonstrated to over 200 fire safety professionals, engineers, and emergency responders.",
      hardwareGroups: [
        {
          title: "Core Stack",
          items: [
            "Arduino Nano + ESP32 control spine",
            "SunFounder PiCrawler chassis with metal servos",
            "RC Tx/Rx for long-range failsafe",
            "720p IR Wi-Fi camera with audio",
            "Dual 18650 pack + UBEC power",
          ],
        },
      ],
      contentFlow: [
{
  mediaIndex: 0,
  title: "Traversal Ready",
  subtitle: "Aluminum chassis + calibrated gait",
  text: "The 12-servo gait was carefully calibrated for forward and lateral pivots, allowing stable traversal across debris and uneven terrain. The wiring was internally routed to prevent snagging during movement, ensuring reliable field operation.",
},
        {
  mediaIndex: 2,
  title: "Field Demo Loop",
  subtitle: "Night vision + telemetry",
  text: "Live camera streaming and dual-mode RC + Wi-Fi control were validated in cluttered environments before the DRDO review. The system ensured continuous operator visibility and audio feedback even during signal fluctuations.",
},
      ],
      citations: [
        "https://researchinestonia.eu/2024/05/14/spider-inspired-robots/",
        "https://sdgs.un.org/goals/goal3",
      ],
      media: [
        {
          type: "image",
          src: "/projects/beetlebot/initial_prototype.jpeg",
          label: "Initial Prototype",
        },
        {
          type: "video",
          src: "/projects/beetlebot/beetlebot_demo.mp4",
          label: "Beetlebot Demo 1",
        },
        {
          type: "video",
          src: "/projects/beetlebot/beetlebot_demo2.mp4",
          label: "Beetlebot Demo 2",
        },
        {
          type: "pdf",
          src: "/docs/Beetlebot_Research_Paper.pdf",
          label: "Beetlebot Research Paper",
        },
        {
          type: "image",
          src: "/projects/beetlebot/beetlebot1.jpeg",
          label: "BeetleBot",
        },
        {
          type: "image",
          src: "/projects/beetlebot/img2.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/img3.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/img4.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/img5.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/img6.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/beetlebot_at_fsai-02.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/beetlebot_at_fsai-03.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/beetlebot_at_fsai-04.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/beetlebot_at_fsai-05.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/beetlebot_at_fsai-06.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/beetlebot_at_fsai-07.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/beetlebot_at_fsai-10.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/beetlebot_at_fsai-11.jpeg",
        },
        {
          type: "image",
          src: "/projects/beetlebot/beetlebot_at_fsai-12.jpeg",
        },
        {
          type: "image",
          src: "/projects/observership_naval.jpeg",
        },
        {
          type: "image",
          src: "/projects/navy_presentation.jpeg",
          label: "Naval Presentation",
        },
        {
          type: "video",
          src: "/projects/beetlebot/Spider_Bot_video.mp4",
          label: "BeetleBot Demo",
        },
      ],
    },
  },
  {
    id: "smart-compost",
    title: "Khadify: IoT Smart Composting System",
    shortTitle: "Khadify",
    category: "Projects",
    summary:
      "Gold Medal winner at IRIS National Fair 2025–26 (top 30 of 120 nationwide innovators; qualified for Regeneron ISEF 2026). Built dual-function smart composting reactor with IoT sensors (temperature, moisture, NPK, ammonia gas), automated systems (aeration pump, PTC heater, exhaust fan), and ML-driven dashboard. Achieved 20–25% faster maturation cycles and 40–50% cost reduction through field studies across Maharashtra agricultural farms.",
    image: "/projects/compost/compost-bin-01.jpeg",
    tags: ["IoT automation", "ML Pipelines", "Agri-tech", "Sustainability"],
    content: {
      introduction:
        "Khadify is a low-cost, at-home smart composting system designed to accelerate compost maturation while reducing operational costs for smallholder farmers across Maharashtra and India.",
      abstract:
        "Khadify is an IoT-enabled composting reactor that integrates multi-sensor monitoring (NPK, temperature, moisture, ammonia gas detection) with automated actuators (heating, aeration, moisture control) and a machine-learning driven Compost Quality Score (CQS) dashboard. The system processes agricultural waste efficiently while generating farmer-trusted quality predictions that enable confident field application.",
      methodology:
        "Initial field research involved observational studies at multiple agricultural farms across Maharashtra to understand real-world composting practices, material composition variations, cost constraints, and farmer acceptance criteria. The design process included selection and calibration of sensor modules: NPK sensor for nutrient tracking, MQ137 ammonia gas sensor, DS18B20 temperature probe, and DHT11 humidity sensor. The IoT architecture centered on an ESP32 microcontroller managing sensor data acquisition, automated control of submersible aeration pump, 800W PTC heating element, and 24V DC exhaust fan motor. Field trials spanning 15 days across five different compost mix compositions validated sensor accuracy (±10%), confirmed actuator response timing, and informed the ML model training dataset. The system logs all sensor data to a cloud dashboard where the trained ML model processes real-time inputs to generate the Compost Quality Score, detects inefficiencies, and delivers bilingual recommendations tailored to individual farm conditions.",
      results:
        "Field validation across Maharashtra demonstrated compost maturation in 45–55 days, representing a 20–25% acceleration compared to traditional passive composting. Per-kilogram processing costs were reduced by 40–50% through optimized moisture management (maintained at 50–60% range) and reduced heating cycles. Ammonia peak levels were trimmed by approximately 20% through automated aeration scheduling. The system earned the Gold CREST Award in December 2025 for the project 'ML and IoT Sensing to Enhance Compost Quality and Speed Processing'. Khadify was selected for the prestigious IRIS National Fair 2025–26, where it ranked among the top 30 student innovations (out of 120 nationwide finalists) and earned a Gold Medal. This success qualified the project for the Regeneron ISEF 2026 competition, representing India on the international stage.",
      materials: [
        "ESP32 + cloud dashboard",
        "NPK, MQ137, DS18B20, DHT11 sensors",
        "PTC heater, pump, exhaust fan",
        "LCD + bilingual UI",
        "CQS ML model",
      ],
      media: [
        { type: "image", src: "/projects/iris/img3.jpeg", label: "IRIS Gold Award - Khadify" },
        { type: "image", src: "/projects/iris/img2.jpeg", label: "IRIS National Fair 2025-26 Ceremony" },
        { type: "image", src: "/projects/compost/compost-bin-01.jpeg", label: "Sensor deck" },
        { type: "image", src: "/projects/compost/compost-bin-12.jpeg", label: "Final product" },
        { type: "image", src: "/projects/compost/building_compost_bin.jpeg", label: "Building Khadify" },
        { type: "image", src: "/projects/compost/img9.jpeg", label: "Compost Field Material" },
        { type: "image", src: "/projects/compost/compost-bin-02.jpeg", label: "Aeration setup" },
        { type: "image", src: "/projects/compost/compost-bin-03.jpeg", label: "System assembly" },
        { type: "image", src: "/projects/compost/compost-bin-04.jpeg", label: "System overview" },
        { type: "image", src: "/projects/compost/compost-bin-05.jpeg", label: "Control view" },
        { type: "image", src: "/projects/compost/compost-bin-06.jpeg", label: "Component integration" },
        { type: "image", src: "/projects/compost/compost-bin-07.jpeg", label: "Wiring and sensors" },
        { type: "image", src: "/projects/compost/compost-bin-08.jpeg", label: "Field testing" },
        { type: "image", src: "/projects/compost/compost-bin-09.jpeg", label: "Build process" },
        { type: "image", src: "/projects/compost/compost-bin-11.jpeg", label: "Quality analysis" },
        {
          type: "video",
          src: "/projects/compost/videos/Khadify_DemoVideo_2025.mp4",
          label: "Khadify Demo 2025",
          description: "Latest end-to-end demo of Khadify (automation + dashboard).",
        },
        {
          type: "video",
          src: "/projects/compost/videos/khadify_field_test-01.mp4",
          label: "Field Test 1",
          description: "Real-world field testing of Khadify.",
        },
        {
          type: "video",
          src: "/projects/compost/videos/khadify_field_test-02.mp4",
          label: "Field Test 2",
          description: "Additional field validation footage.",
        },
        {
          type: "video",
          src: "/projects/compost/videos/khadify_field_test-03.mp4",
          label: "Field Test 3",
          description: "Extended field testing demonstration.",
        },
        {
          type: "pdf",
          src: "/docs/Khadify_PPT_Submission.pdf",
          label: "Khadify Project Deck",
        },
        {
          type: "pdf",
          src: "/docs/Compost_system_paper_IRIS.pdf",
          label: "Khadify IRIS Research Paper",
        },
      ],
    },
  },
  {
    id: "coastal-erosion",
    title: "Mumbai Mangroves Research Paper",
    shortTitle: "Mumbai Mangroves",
    category: "Projects",
    summary:
      "Compares GFW (Global Forest Watch) and GMW (Global Mangrove Watch) for Mumbai through Python raster analysis, to resolve discrepancies since they are widespread in environmental and engineering studies.",
    image: "/projects/navy_presentation.jpeg",
    thumbnail: "/projects/thumb-memri.jpeg",
    tags: ["Geospatial", "Simulation", "Climate resilience"],
    content: {
      abstract:
        "This study presents a comparative geospatial analysis of mangrove detection in Mumbai using Hansen Global Forest Change (GFC) and Global Mangrove Watch (GMW) datasets. It evaluates spatial agreement, temporal consistency, and classification stability to assess how dataset choice influences interpretation of mangroves and their classification.",
      methodology:
        "Geospatial raster datasets were processed using Python libraries (GeoPandas, Rasterio, NumPy) to extract mangrove areas within Mumbai and overlay GFC annual forest signals with GMW baseline extent. Spatial overlap, temporal detection patterns, and forest-duration metrics were analyzed to identify classification discrepancies.",
      results:
        "Results indicate significant instability in Hansen forest detection within mangrove areas, including zero persistent forest classification and short median detection durations. The findings highlight the limitations of applying generic forest datasets to coastal wetlands and emphasize the importance of dataset selection in environmental assessments.",
      media: [
        {
          type: "image",
          src: "/projects/mangrove/mangrove-analysis.jpeg",
          label: "Mangrove area reduction analysis",
          description: "Comparative analysis of mangrove area reduction across different spatial feature sets using satellite mapping and geospatial analysis.",

        },
        {
          type: "image",
          src: "/projects/mangrove/mangrove-analysis.jpeg",
          label: "Mangrove area reduction analysis",
          description: "Comparative analysis of mangrove area reduction across different spatial feature sets using satellite mapping and geospatial analysis.",
        },
        {
          type: "pdf",
          src: "/projects/Mumbai_Mangroves_White_Paper.pdf",
          label: "Mumbai Mangroves White Paper",
        },
      ],
    },
  },
  {
    id: "research-innovation",
    title: "Competitions",
    shortTitle: "Competitions",
    category: "Competitions",
    summary:
      "CREST Gold (pH–erosion study), FTC Think + Inspire Awards, Most Creative & Most Innovative at BIS Tech Fair.",
    image: "/projects/crest_gold_award.jpeg",
    thumbnail: "/projects/crest_gold_award.jpeg",
    tags: ["FTC", "CREST", "Materials", "Research"],
    content: {
      media: [
        { type: "image", src: "/projects/crest_gold_award.jpeg", label: "CREST Gold Award" },
      ],
      subProjects: [
        {
          title: "Most Creative Project (October 2024)",
          description:
            "Cyberbullying Website, Bombay International School, Tech fair.",
        },
        {
          title: "Most Innovative Tech Project (October 2025)",
          description:
"Beetlebot, Bombay International School, Tech Fair"        
},
        {
          title: "Think Award at Kazakhstan National Championship, Inspire Award & 2nd place overall at India National Championship (Sept2024-March2025) ",
          description:
            " CAD designer of the G-Force Team, First Tech Challenge",
        },
        {
          title: "Most Innovative Project (2025)",
          description:
            "BeetleBot showcase at BIS Tech Fair.",
        },
      ],
    },
  },
  {
    id: "robotics-leadership",
    title: "School Leadership",
    shortTitle: "School Leadership",
    category: "School Leadership",
    summary:
      "Elected Head Boy (Jan 2024–Jan 2025); founded AI Club (2023) and presided over Engineering Club (2024–present); served as Tech Secretary (2023–2024). Created BIS Beholder interschool film festival and led BIS Technology Fest under the theme 'Tech for All'.",
    image: "/projects/sl.png",
    thumbnail: "/projects/ftc/ftc_robotics_aaryaman_goenka.jpeg",
    tags: ["Leadership", "Student operations", "Club founding"],
    content: {
      introduction:
        "Held multiple leadership positions at Bombay International School, managing student operations, founding technical clubs, and organizing school-wide events that fostered innovation and community engagement.",
      media: [
        { type: "image", src: "/projects/sl.png", label: "School Leadership" },
        { type: "image", src: "/projects/ftc/building_FTC_robotics.jpeg", label: "Engineering Club Workshop" },
      ],
      subProjects: [
        {
          title: "Head Boy, Bombay International School (January 2024 – January 2025)",
          description:
            "Elected by school faculty to represent the school.Managed the logistics and coordination of pivotal school events, including weekly assemblies,  the election process,  investiture ceremony, NGO fair, and talent show. Organized BIS’s very first interschool short film competition called the BIS beholder.",
        },
        {
          title: "Tech Secretary, Bombay International School (January 2023 – January 2024)",
          description:
          "Elected by the student body to lead all inter and intra-school tech initiatives. Handled Audio-visual responsibilities and managed the student government website. Acted as liaison between the communications task force, students and parents. Spearheaded the BIS Technology Fest under the theme of “Tech for all” to encourage all students to develop a passion for technology. Led panel discussions with industry experts; designed a tech escape room, hosted tech workshops, provided a platform for students to pitch their tech ideas as shark tank projects.",
        },
        {
          title: "Founder, AI Club (January 2023 – January 2024)",
          description:
"Founded a school AI club in collaboration with 'Coding & More', leveraging their expertise as an industry specialist in coding and related fields through a franchise model. Facilitated communication between school authorities and the organization to ensure the smooth running of the club."
        },
        {
          title: "President, Engineering Club (July 2024 – Present)",
          description:
"Led engineering workshops, field visits, and hands-on workshop series encouraging early engagement and exploration in 3-D design, drones and  aeronautical engineering, and prototyping.",
        },
      ],
    },
  },
  {
    id: "stem-olympiads",
    title: "Academic Achievements",
    shortTitle: "STEM Honors",
    category: "Academic Achievements",
    summary:
      "IGCSE World Topper (Additional Math 2025); SASMO Gold; HKISO Silver; Waterloo Pascal Distinction; AP Microeconomics 5 (self-study).",
    image: "/projects/certificates/img15.jpeg",
    thumbnail: "/projects/certificates/img15.jpeg",
    tags: ["Olympiads", "Math"],
    content: {
      media: [
        { type: "image", src: "/projects/certificates/img6.jpeg", label: "Cambridge Outstanding Learner Award" },
        { type: "image", src: "/projects/certificates/img15.jpeg", label: "Cambridge Award Certificate" },
        { type: "image", src: "/projects/hkiso_silver_award.jpeg", label: "HKISO Silver Award" },
        { type: "image", src: "/projects/certificates/img1.jpeg", label: "CREST Gold Certificate" },
        { type: "image", src: "/projects/certificates/pascal_award.jpeg", label: "Waterloo Pascal Distinction" },
      ],
      subProjects: [
        { title: "Cambridge Outstanding Learner Award", description: "IGCSE World Topper in Additional Mathematics (2025)." },
        { title: "SASMO Gold & HKISO Silver", description: "International STEM Olympiads." },
        { title: "Waterloo Pascal Distinction", description: "Problem-solving recognition." },
        { title: "AP Microeconomics 5", description: "Self-studied advanced quantitative econ." },
      ],
    },
  },
  {
    id: "tech-fairs-outreach",
    title: "Outreach & Applied STEM",
    shortTitle: "Tech Outreach",
    category: "Outreach & Applied STEM",
    summary:
      "Observerships with DRDO New Delhi (fire safety protocols) and IIT Delhi (electronics research). Research Intern at Hippo Technotex analyzing the Cool Roof System. Delivered STEM outreach workshops and Khadify demonstrations to farmers across Maharashtra. Keynote presentation at Fire Safety Association of India conference to 200+ attendees.",
    image: "/projects/aaryamann_image2.png",
    thumbnail: "/projects/aaryamann_image2.png",
    tags: ["STEM Outreach", "Industry research", "Real-world application"],
    content: {
      introduction:
        "Engaged in structured observerships, internships, and outreach activities that translate academic learning into practical research and community impact.",
      media: [
        // { type: "image", src: "/projects/outreach/outreach2.png", label: "Agricultural STEM Workshop" },
        { type: "image", src: "/projects/outreach/otreach1.png", label: "Farmer Engagement Session" },
        { type: "image", src: "/projects/outreach/outreach3.png", label: "Community Outreach" },
        { type: "image", src: "/projects/beetlebot/fsai-speaker.jpeg", label: "FSAI Conference Presentation" },
        { type: "image", src: "/projects/img5.jpeg", label: "Field Demonstration" },
      ],
      subProjects: [
        {
          title:"Gold Medal",
          description:"Smart Compost System, IRIS National Fair (January 2026)"
        },
        {
          title: "CREST Gold Award",
          description:"Co-Author, Research Project on Corrosive Properties of Beverages, (Sep 2023-May 2024)"
        },
        {
          title:"IGCSE World Topper",
          description:"Additional Mathematics (2025)"
        },
        {
          title:"International and National Olympiads (Feb 2024 - Dec 2024)",
          description:"SASMO Gold, HKISO Silver, Waterloo Pascal Distinction"
        },
        {
          title: "Defense Research and Development Organization (DRDO) Observership (May 2024–Present)",
          description:
            "Conducted observership at DRDO New Delhi where I explored and examined fire safety protocols in defense establishments. The experience directly informed improvements to BeetleBot's fire-response functionality through feedback from experienced defense researchers and operational experts.",
        },
        {
          title: "Indian Institute of Technology Delhi (IIT Delhi) Observership",
          description:
            "Pursued research exploration at IIT Delhi focusing on on-ground and underwater electronics, studying advanced applications of electronic systems relevant to rescue robotics and underwater sensing.",
        },
        {
          title: "Hippo Technotex Research Internship (July 2025–Present)",
          description:
            "Served as Research Intern at Hippo Technotex, tasked with assessing the Cool Roof System—a proprietary insulated sandwich panel solution designed for rapid installation and superior thermal insulation. Conducted comparative performance analysis of the Cool Roof System against traditional roofing methods, evaluating thermal efficiency, structural feasibility, cost efficiency, and scalability. Developed engineering-based recommendations for scaling the Cool Roof System in sustainable urban infrastructure projects.",
        },
        {
          title: "Agricultural STEM Outreach & Khadify Demonstrations",
          description:
            "Conducted hands-on STEM workshops and Khadify system demonstrations across agricultural farms in Maharashtra, educating smallholder farmers on IoT-driven composting, sensor-based agricultural technology, and data-driven decision-making for improved crop management.",
        },
        {
          title: "Fire Safety Association of India (FSAI) Conference Presentation",
          description:
            "Presented the BeetleBot prototype at the Fire Safety Association of India's Mumbai Conference, delivering a technical keynote address to over 200 fire safety professionals, emergency responders, and engineers on the applications of quadruped robotics in confined-space rescue operations.",
        },
      ],
    },
  },
  {
    id: "cyber-advocacy",
    title: "CyberDost: Cyberbullying Prevention Initiative",
    shortTitle: "CyberDost",
    category: "Social Initiative",
    summary:
      "Founded CyberDost awareness and prevention platform (July 2024–Present). Created interactive website covering cyberbullying's psychological, legal, and policy dimensions. Organized art exhibition with Brush of Hope, expert panel discussions, and bilingual infographic campaigns. Directed 1,000+ participant seminars on cybersafety and youth involvement (December 2024–Present). Secured 1,300+ signatures on legislation petition endorsed by Maharashtra Department of Education.",
    image: "/projects/cyberdost-1.jpeg",
    tags: ["Advocacy", "Mental health", "Policy reform"],
    content: {
      introduction:
        "CyberDost is a comprehensive cyberbullying prevention and awareness initiative designed to educate students, educators, and families on the psychological impacts, legal protections, and policy solutions related to online harassment and cybersecurity.",
      media: [
        { type: "image", src: "/projects/cyberdost-08.jpeg", label: "CyberDost Community Engagement" },
        { type: "image", src: "/projects/cyberdost-07.jpeg", label: "CyberDost Outreach Program" },
        { type: "image", src: "/projects/cyberdost-1.jpeg", label: "CyberDost Platform" },
        { type: "image", src: "/projects/cyberdost_smiley.jpeg", label: "CyberDost Campaign" },
        { type: "image", src: "/projects/cyberdost_webinar.jpeg", label: "CyberDost Webinar Session" },
        { type: "image", src: "/projects/cyberdost/cyberdost_with_school_staff.jpeg", label: "School Staff Training" },
        { type: "image", src: "/projects/cyberdost/cyberdost_with_staff.jpeg", label: "CyberDost Workshop" },
        { type: "image", src: "/projects/cyberdost/zoom_webinar_cyberdost.jpeg", label: "Online Outreach Session" },
        {
          type: "pdf",
          src: "/docs/Cyberbullying Awareness and Prevention in India.pdf",
          label: "Cyberbullying Awareness (English)",
        },
        {
          type: "pdf",
          src: "/docs/Hindi_Cyberbullying Awareness and Prevention in India.pdf",
          label: "Cyberbullying Awareness (Hindi)",
        },
        {
          type: "pdf",
          src: "/docs/Cyberbullying Prevention Infographic.pdf",
          label: "Cyberbullying Prevention Infographic",
        },
        {
          type: "pdf",
          src: "/docs/Message_DharmendraPradhan_CyberDost.pdf",
          label: "Message from Minister Pradhan",
        },
      ],
      subProjects: [
        {
          title: "Digital Awareness Platform",
          description:
            "Created an informative and interactive website serving as a comprehensive resource on cyberbullying prevention, covering fundamental information on psychological impacts of cyberbullying, legal frameworks protecting victims, policy requirements for schools and platforms, and practical action steps for students, parents, and educators. The bilingual platform was designed and pitched to heads of Z-Schools for potential adoption across 100 schools as part of their curriculum.",
        },
        {
          title: "Community Campaigns & Art Exhibition (July 2024)",
          description:
            "Organized an art exhibition in collaboration with the Brush of Hope organization that displayed artworks created by cyberbullying survivors, powerfully portraying the psychological and emotional impacts of online harassment on mental health and well-being. Combined the exhibition with an expert panel discussion featuring cybersafety professionals who engaged directly with students about abuse reporting, digital citizenship, and online responsible behavior.",
        },
        {
          title: "Mass Awareness Seminars (December 2024 – Present)",
          description:
            "Initiated and conducted recurring online seminars reaching 1,000+ students and teachers across multiple sessions. Seminars focused on comprehensive cyberbullying policy education, practical reporting mechanisms available to victims, and action-oriented youth involvement in creating safer online communities. Developed bilingual educational content and infographic pamphlets about cybersafety distributed to all school staff.",
        },
        {
          title: "Policy & Legislative Advocacy",
          description:
            "Spearheaded a legislative petition campaign advocating for robust Indian laws addressing cyberbullying, securing over 1,300 signatures from students, parents, and educators. The petition proposal was reviewed, endorsed, and formally recommended by the Maharashtra Department of Education as an important policy direction for state-level cybersafety legislation.",
        },
      ],
    },
  },
  {
    id: "leadership-community",
    title: "Hobbies & Outdoor Leadership",
    shortTitle: "Hobbies",
    category: "Hobbies",
    summary:
      "15-day NOLS NH backpacking (65 miles, ~20 kg load); 50-mile Sandakphu–Phalut trek (Most Spirited Trekker award); 10-mile Uluru base walk in Australia. Advanced alpine skier (Black Diamond); open-water certified scuba diver. Created navigation app for trail safety. Trinity Grade 2 (Merit) classical guitar.",
    image: "/projects/hobbies/img8.jpeg",
    thumbnail: "/projects/trekking_hill.jpeg",
    tags: ["Outdoor expeditions", "Leadership", "Adventure sports"],
    content: {
      introduction:
        "Pursues outdoor adventure, athletic discipline, and technical applications of technology in personal pursuits, balancing physical challenge with innovation.",
      media: [
        { type: "image", src: "/projects/hobbies/img4.jpeg", label: "Trekking Adventure" },
        { type: "image", src: "/projects/hobbies/img8.jpeg", label: "Mountain Expedition" },
        { type: "image", src: "/projects/hobbies/img7.jpeg", label: "Outdoor Leadership" },
      ],
      subProjects: [
        {
          title: "Outdoor Leadership & Expeditions",
          description:
            "Completed NOLS (National Outdoor Leadership School) New Hampshire backpacking expedition in the USA, covering 65 miles of diverse and challenging terrain over 15 days while carrying ~20 kg packs. The extended wilderness experience developed critical leadership skills, wilderness survival competency, and collaborative teamwork in high-stress remote environments. Undertook the Sandakphu–Phalut 50-mile trek in West Bengal, navigating high-altitude terrain and earning the 'Most Spirited Trekker' award for leadership and perseverance. Completed a 10-mile cultural trekking experience at Uluru and Kata Tjuta National Park in Australia, combining outdoor adventure with indigenous cultural education and environmental stewardship.",
        },
        {
          title: "Trail Navigation Technology",
          description:
            "Developed and deployed a basic navigation application designed to help trekkers safely navigate trail routes, share experiences on trail forums, and optimize route planning. The app integrates GPS technology with community-contributed trail data and safety alerts.",
        },
        {
          title: "Alpine Skiing & Winter Sports",
          description:
            "Advanced alpine skier with expertise on Black Diamond terrain. Demonstrates technical skiing proficiency in steep, variable snow conditions, and understands avalanche awareness, mountain safety protocols, and ski equipment selection.",
        },
        {
          title: "Open Water Scuba Diving",
          description:
            "Certified open-water scuba diver trained in underwater navigation, buoyancy control, equipment management, dive safety procedures, and emergency response protocols. Explores underwater ecosystems while adhering to responsible diving practices.",
        },
        {
          title: "Badminton Athletics",
          description:
            "Participates in regular competitive badminton, maintaining cardiovascular fitness, strategic thinking, and motor skill development through a sport that requires rapid reaction times and tactical court positioning.",
        },
        {
          title: "Classical Guitar Performance",
          description:
            "Trained classical guitarist holding Trinity College London Grade 2 certification with Merit distinction. Performs classical repertoire and continues to develop advanced playing technique and musical interpretation.",
        },
        {
          title: "Technical Skills",
          description:
            "Proficient in Python for data analysis and automation, C++ for systems programming, Arduino programming for embedded systems control, HTML/CSS for web development, Fusion 360 for 3D CAD design, and MATLAB for numerical computation and visualization.",
        },
      ],
    },
  },
];

export const aboutData = {
  name: "Aaryamann Goenka",
  title: "Adaptive Robotics 🤖  Sustainability Frontliner ♻️ Mangrove Mender 🌴",
  bio: "Designs rescue robots, IoT + ML systems, and geospatial models; leads clubs, competitions, and outreach with a bias for measurable impact.",
  technicalBackground: [
    "Robotics control: Arduino, ESP32, RC + Wi-Fi failsafes",
    "IoT + ML dashboards for sensing and automation",
    "Geospatial + simulation: Python GIS, ANSYS, MATLAB",
    "3D CAD, rapid prototyping, PCB and soldering",
    "Field testing, sensor validation, and iteration loops",
  ],
  achievements: [
    "Beetlebot demos to DRDO/Naval Dockyard + Beetlebot talk (200+ audience)",
    "Khadify: 20–25% faster cycles, 40–50% cheaper output",
    "Mumbai Mangroves: Dataset comparison for more consistent interpretations and better environmental policies",
    "CREST Gold (materials science) + Hippo Technotex internship",
    "FTC Think Award + Inspire Award; AI/Engineering club leadership",
    "IGCSE World Topper (Add-Math) + SASMO Gold + HKISO Silver",
    "IRIS National Science Fair Gold Award (Khadify)",
  ],
  education: {
    school: "",
    graduation: "",
    grades: "",
  },
  courses: [],
  leadership: [
    "Head Boy, Bombay International School (2024–2025)",
    "Tech Secretary (2023–2024)",
    "Founder, AI Club",
    "President, Engineering Club",
  ],
};

export const contactData = {
  email: "aaryamann.2771@bis.edu.in",
  phone: "+91 8291817701",
  location: "Mumbai, India",
  socials: {
    linkedin: "https://www.linkedin.com/in/aaryamann-goenka-981502399/",
  },
};