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
    title: "Beetlebot: Quadruped Rescue Robot",
    shortTitle: "BeetleBot",
    category: "Projects",
    summary:
      "Built RC+Wi-Fi quadruped with night vision and onboard audio; briefed DRDO & Naval Dockyard; earned Letter of Appreciation and Beetlebot talk to 200+ engineers.",
    image: "/projects/beetlebot/beetlebot_demo.mp4",
    tags: ["Rescue robotics", "Night vision", "RC control", "Field demos"],
    content: {
      abstract:
        "Search-and-rescue quadruped with dual-mode (RC + Wi-Fi) control, IR night vision, and audio feed for confined-space response.",
      innovation:
        "Servo gait tuned for debris traversal; dual control path keeps operator link alive when Wi-Fi drops; payload-ready for gas/thermal sensing.",
      methodology:
        "Iterated Mark 1→2 after DRDO input; calibrated 12-servo gait, integrated RC receiver + ESP32 telemetry, mounted IR camera, validated maneuvering in clutter.",
      results:
        "Executed demos for DRDO Delhi and Naval Dockyard Mumbai; secured formal appreciation; recognized as Most Innovative Project at BIS Tech Fair 2025 and speaker slot at Beetlebot Mumbai (200+ audience).",
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
          text: "12-servo IK tuned for forward/side pivots; wiring contained for debris contact.",
          bullets: [
            "Dual-mode control keeps operator link live.",
            "IR vision covers low-light entries.",
            "Audio feed surfaces trapped-victim cues.",
          ],
        },
        {
          mediaIndex: 2,
          title: "Field Demo Loop",
          subtitle: "Night vision + telemetry",
          text: "Live camera stream and RC inputs validated in cluttered spaces before DRDO review.",
          bullets: [
            "RC primary with Wi-Fi fallback.",
            "Operator sees + hears environment in real time.",
          ],
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
    title: "Khadify: Low-Cost, At-Home Smart Compost Bin",
    shortTitle: "Khadify",
    category: "Projects",
    summary:
      "IRIS National Science Fair Gold Award winner. Built dual-function reactor with NPK/ammonia/temp/moisture sensing, ESP32 automation, and ML Compost Quality Score; cut cycle time 20–25% and costs 40–50%.",
    image: "/projects/compost/compost-bin-01.jpeg",
    tags: ["IoT automation", "ESP32", "Agri-ML", "Sustainability"],
    content: {
      abstract:
        "Khadify: Low-cost compost reactor that monitors nutrients and automates aeration, heating, and moisture control while scoring quality via ML dashboard.",
      innovation:
        "Combines sensor validation (±10% accuracy) with bilingual UI and CQS scoring so smallholder farmers can trust output before field use.",
      methodology:
        "Ran 15-day trials across five compost mixes; validated NPK, MQ137, DS18B20, DHT11; automated pump/heater/fan triggers; logged to cloud dashboard and ML model.",
      results:
        "Achieved 45–55 day maturation (20–25% faster); reduced per-kg cost 40–50%; stabilized moisture 50–60% and trimmed ammonia peaks ~20%.",
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
        { type: "image", src: "/projects/compost/building_khadify_2.jpeg", label: "Building Khadify - Electronics" },
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
          src: "/projects/navy_presentation.jpeg",
          label: "Coastal Research Presentation",
          description: "Presentation on coastal resilience and mangrove research.",
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
    image: "/projects/beetlebot/img2.jpeg",
    thumbnail: "/projects/crest_gold_award.jpeg",
    tags: ["FTC", "CREST", "Materials", "Research"],
    content: {
      media: [
        { type: "image", src: "/projects/crest_gold_award.jpeg", label: "CREST Gold Award" },
      ],
      subProjects: [
        {
          title: "CREST Gold Award",
          description:
            "Co-authored pH–erosion study using eggshell enamel analogues; paired microscopy with corrosion scoring.",
        },
        {
          title: "FIRST Tech Challenge (G-Force)",
          description:
            "3D-CAD lead; team earned Think Award (Kazakhstan Nationals) and Inspire Award + 2nd overall (India Nationals).",
        },
        {
          title: "Most Creative Project (2024)",
          description:
            "CyberDost awareness website with interactive UI/UX for social impact.",
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
      "Head Boy 2024–25; created BIS Beholder film festival; founded AI Club; led Engineering Club; served as Tech Secretary for BIS Tech Fest.",
    image: "/projects/ftc/ftc_robotics_aaryaman_goenka.jpeg",
    thumbnail: "/projects/ftc/ftc_robotics_aaryaman_goenka.jpeg",
    tags: ["Leadership", "Operations", "Clubs"],
    content: {
      media: [
        { type: "image", src: "/projects/ftc/building_FTC_robotics.jpeg", label: "Building FTC Robotics" },
        { type: "image", src: "/projects/ftc/ftc_robotics_aaryaman_goenka.jpeg", label: "FTC Robotics" },
      ],
      subProjects: [
        {
          title: "Head Boy & Event Ops",
          description:
            "Ran elections, investiture, NGO fair, showcases, and AV coordination; served as liaison across faculty, students, and parents.",
        },
        {
          title: "BIS Beholder Festival",
          description:
            "Created and directed the school's first interschool short-film festival.",
        },
        {
          title: "President, Engineering Club(s)",
          description:
            "Ran prototyping, 3D design, drone-building modules; mentored juniors in CAD/circuits/mechanics.",
        },
        {
          title: "Founder, AI Club",
          description:
            "Built school AI program with Coding & More; authored curriculum and workshops; grew cross-grade membership.",
        },
        {
          title: "Tech Secretary",
          description:
            "Produced BIS Tech Fest \"Tech for All\"; built tech escape room, expert panels, AV systems, and website updates.",
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
    image: "/projects/certificates/img6.jpeg",
    thumbnail: "/projects/certificates/img15.jpeg",
    tags: ["Olympiads", "Math"],
    content: {
      media: [
        { type: "image", src: "/projects/certificates/img6.jpeg", label: "Cambridge Outstanding Learner Award" },
        { type: "image", src: "/projects/certificates/img15.jpeg", label: "Cambridge Award Certificate" },
        { type: "image", src: "/projects/hkiso_silver_award.jpeg", label: "HKISO Silver Award" },
        { type: "image", src: "/projects/img1.jpeg", label: "CREST Gold Award" },
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
      "STEM workshops and Khadify demos for farmers; Hippo Technotex Relief Roof internship; FSAI conference presentation to 200+ attendees.",
    image: "/projects/compost/compost-bin-03.jpeg",
    tags: ["STEM Outreach", "Project application", "Real-World Impact"],
    content: {
      media: [
        { type: "image", src: "/projects/beetlebot/fsai-speaker.jpeg", label: "FSAI Conference Speaker" },
        { type: "image", src: "/projects/img5.jpeg", label: "IIT Delhi - Naval Construction Wing" },
      ],
      subProjects: [
        {
          title: "STEM Outreach",
          description:
            "Workshops and demos on Khadify for farmers in Maharashtra.",
        },
        {
          title: "Hippo Technotex Internship (2025–present)",
          description:
            "Benchmarked Relief Roof sandwich panels vs. conventional roofing; modeled thermal + structural loads and drafted scalable design guidance.",
        },
        {
          title: "FSAI Conference",
          description:
            "Presented prototype to 200+ attendees at the Fire Safety Association of India, Mumbai Conference.",
        },
      ],
    },
  },
  {
    id: "cyber-advocacy",
    title: "Social Initiative",
    shortTitle: "CyberDost",
    category: "Social Initiative",
    summary:
      "Founded CyberDost awareness portal; ran 1,000+ participant seminars; secured 1,300+ signature petition with Dept. of Education endorsement.",
    image: "/projects/cyberdost-1.jpeg",
    tags: ["Advocacy", "Policy", "Digital safety"],
    content: {
      media: [
        { type: "image", src: "/projects/cyberdost-08.jpeg", label: "CyberDost Community" },
        { type: "image", src: "/projects/cyberdost-07.jpeg", label: "CyberDost Outreach" },
        { type: "image", src: "/projects/cyberdost-1.jpeg", label: "CyberDost" },
        { type: "image", src: "/projects/cyberdost_smiley.jpeg", label: "CyberDost Smiley" },
        { type: "image", src: "/projects/cyberdost_webinar.jpeg", label: "CyberDost Webinar" },
        { type: "image", src: "/projects/cyberdost/cyberdost_with_school_staff.jpeg", label: "CyberDost with School Staff" },
        { type: "image", src: "/projects/cyberdost/cyberdost_with_staff.jpeg", label: "CyberDost with Staff" },
        { type: "image", src: "/projects/cyberdost/zoom_webinar_cyberdost.jpeg", label: "Zoom Webinar" },
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
          label: "Cyberbullying Infographic",
        },
        {
          type: "pdf",
          src: "/docs/Message_DharmendraPradhan_CyberDost.pdf",
          label: "Message from Minister Pradhan",
        },
      ],
      subProjects: [
        {
          title: "Awareness Platform",
          description:
            "Built bilingual portal on psychological/legal/policy aspects; pitched for 100-school adoption.",
        },
        {
          title: "Community Campaigns",
          description:
            "Art exhibit with Brush of Hope; schoolwide expert panel; pamphlet distribution to all staff.",
        },
        {
          title: "Mass Training",
          description: "Recurring online seminars for 1,000+ students/teachers on reporting and digital citizenship.",
        },
        {
          title: "Policy Push",
          description:
            "Legislation petition with 1,300+ signatures; endorsed by Maharashtra Dept. of Education.",
        },
      ],
    },
  },
  {
    id: "leadership-community",
    title: "Hobbies",
    shortTitle: "Hobbies",
    category: "Hobbies",
    summary:
      "NOLS 65-mile expedition; Sandakphu–Phalut 50-mile trek; advanced alpine skier (Black Diamond); open-water scuba diver.",
    image: "/projects/trek_expedition_NOLS_USA.jpeg",
    thumbnail: "/projects/trekking_hill.jpeg",
    tags: ["Expeditions", "Hobbies"],
    content: {
      media: [
        { type: "image", src: "/projects/hobbies/img12.jpeg", label: "Sandakphu Trek" },
        { type: "image", src: "/projects/hobbies/img10.jpeg", label: "Sandakphu Summit" },
        { type: "image", src: "/projects/hobbies/img11.jpeg", label: "Trek Summit View" },
        { type: "image", src: "/projects/hobbies/img8.jpeg", label: "NOLS Group" },
        { type: "image", src: "/projects/hobbies/img14.jpeg", label: "Workshop - Woodworking" },
        { type: "image", src: "/projects/hobbies/img4.jpeg", label: "Workshop - Power Tools" },
        { type: "image", src: "/projects/hobbies/img7.jpeg", label: "Workshop - Bike Assembly" },
        { type: "image", src: "/projects/trekking_hill.jpeg", label: "Trekking Expedition" },
        { type: "image", src: "/projects/trek_expedition_NOLS_USA.jpeg", label: "NOLS Expedition" },
      ],
      subProjects: [
        {
          title: "Outdoor Leadership",
          description:
            "NOLS NH backpacking (65 miles/15 days, ~20 kg packs); Sandakphu–Phalut 50-mile trek (Most Spirited Trekker); Uluru–Kata Tjuta 10-mile cultural trek; built simple nav app for trail safety.",
        },
        {
          title: "Athletics & Discipline",
          description: "Advanced alpine skier (Black Diamond), open-water scuba diver, regular badminton athlete.",
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