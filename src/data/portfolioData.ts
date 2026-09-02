import { Project, SkillCategory, JourneyMilestone, Certification, GithubRepoInfo, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: "NAGARJUNA REDDY",
  fullName: "Nagarjuna Reddy Mekala",
  headline: "Building Digital Experiences with Code & AI",
  tagline: "Developer • AI Enthusiast • Problem Solver",
  status: "Available for Internships & Opportunities",
  location: "Hyderabad, India",
  phone: "+91 7569304566",
  email: "mmnagarjunareddy@gmail.com",
  githubUrl: "https://github.com/Nagarjuna-1322",
  githubUsername: "Nagarjuna-1322",
  linkedinUrl: "https://linkedin.com/in/m-nagarjuna-reddy-ab00b5323",
  resumePath: "/resume.pdf", // Easily replaceable resume file path
  summary: "Detail-oriented and highly motivated Artificial Intelligence and Machine Learning (AI & ML) engineering student with a solid academic foundation and hands-on project experience. Possesses practical programming proficiency in Python alongside core understandings of AI methodologies. Demonstrates strong analytical thinking, problem-solving, and collaboration skills, eager to contribute to innovative technical projects.",
  languagesSpoken: [
    { name: "Telugu", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Conversational" }
  ],
  stats: [
    { label: "B.Tech CGPA", value: "7.75 / 10" },
    { label: "Class XII", value: "95%" },
    { label: "Hackathon Win", value: "1st Place" },
    { label: "Certifications", value: "4+ Verified" }
  ]
};

export const ABOUT_CARDS = [
  {
    title: "Developer",
    subtitle: "Full-Stack & Systems",
    desc: "Building intuitive frontend applications with React and clean backend logic using Python & Node.js.",
    icon: "Code2"
  },
  {
    title: "AI Enthusiast",
    subtitle: "LLMs & Applied ML",
    desc: "Exploring modern Generative AI, prompt engineering with Gemini, and predictive machine learning models.",
    icon: "Sparkles"
  },
  {
    title: "Problem Solver",
    subtitle: "Analytical & Creative",
    desc: "Approaching real-world problems with algorithmic precision, rapid prototyping, and collaborative effort.",
    icon: "Brain"
  },
  {
    title: "Continuous Learner",
    subtitle: "Curious & Adaptable",
    desc: "Constantly expanding skill set across cloud tools, modern web architectures, and advanced AI methodologies.",
    icon: "Rocket"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    iconName: "Terminal",
    description: "Core languages for algorithmic problem solving and backend computing.",
    skills: [
      {
        name: "Python",
        proficiency: "Proficient",
        description: "Primary language for Machine Learning, data processing, AI experimentation, and backend scripting.",
        tags: ["Core", "AI/ML", "Scripts"],
        highlight: true
      },
      {
        name: "Java",
        proficiency: "Intermediate",
        description: "Solid foundational knowledge of Object-Oriented Programming (OOP), data structures, and algorithms.",
        tags: ["OOP", "Data Structures"],
        highlight: false
      },
      {
        name: "JavaScript",
        proficiency: "Proficient",
        description: "Modern ES6+ syntax, asynchronous programming, DOM manipulation, and interactive web application logic.",
        tags: ["Web", "ES6+", "Async"],
        highlight: true
      }
    ]
  },
  {
    id: "web-dev",
    name: "Web Development",
    iconName: "Layout",
    description: "Modern frontend technologies creating responsive, accessible user interfaces.",
    skills: [
      {
        name: "React",
        proficiency: "Proficient",
        description: "Component-driven architecture, custom hooks, state management, and modern interactive UI workflows.",
        tags: ["Frontend", "SPA", "Hooks"],
        highlight: true
      },
      {
        name: "JavaScript",
        proficiency: "Proficient",
        description: "Dynamic client-side interactivity, API integration, and event-driven architecture.",
        tags: ["Client Logic", "APIs"],
        highlight: false
      },
      {
        name: "HTML5",
        proficiency: "Proficient",
        description: "Semantic web structure, accessibility (a11y) standards, and SEO-friendly document hierarchy.",
        tags: ["Semantics", "SEO"],
        highlight: false
      },
      {
        name: "CSS3 / Styling",
        proficiency: "Proficient",
        description: "Modern responsive design, flexbox, grid, glassmorphism, Tailwind CSS, and keyframe animations.",
        tags: ["Responsive", "Tailwind", "Design"],
        highlight: false
      }
    ]
  },
  {
    id: "ai-genai",
    name: "AI / Generative AI",
    iconName: "BrainCircuit",
    description: "Applied artificial intelligence, LLM orchestration, and predictive modeling.",
    skills: [
      {
        name: "Generative AI",
        proficiency: "Core Focus",
        description: "Deep exploration of foundational GenAI concepts, model capabilities, reasoning frameworks, and multimodal architectures.",
        tags: ["GenAI", "Foundations", "Google AI"],
        highlight: true
      },
      {
        name: "AI APIs",
        proficiency: "Proficient",
        description: "Integrating modern AI model endpoints (Gemini API, OpenAI) into production web applications.",
        tags: ["Integration", "REST", "SDKs"],
        highlight: true
      },
      {
        name: "Prompt Engineering",
        proficiency: "Proficient",
        description: "System instructions, few-shot prompting, structured JSON schema outputs, and chain-of-thought prompt tuning.",
        tags: ["Gemini", "Optimization", "LLMs"],
        highlight: true
      },
      {
        name: "AI Application Development",
        proficiency: "Core Focus",
        description: "End-to-end development of AI-powered assistants, career recommenders, and scholarship finders.",
        tags: ["Full Flow", "Products", "Solutions"],
        highlight: true
      }
    ]
  },
  {
    id: "cloud-tools",
    name: "Cloud / Tools",
    iconName: "Cloud",
    description: "Cloud infrastructure, version control, and modern developer tooling.",
    skills: [
      {
        name: "AWS",
        proficiency: "Intermediate",
        description: "Cloud fundamentals, compute instances, storage, and serverless application hosting concepts.",
        tags: ["Cloud", "Deployment", "Storage"],
        highlight: true
      },
      {
        name: "Firebase",
        proficiency: "Proficient",
        description: "Real-time Firestore databases, authentication, security rules, and cloud hosting for rapid prototyping.",
        tags: ["NoSQL", "Real-time", "Auth"],
        highlight: true
      },
      {
        name: "Power BI",
        proficiency: "Intermediate",
        description: "Interactive data visualization, dashboard generation, and analytics reporting.",
        tags: ["Analytics", "Dashboards"],
        highlight: false
      },
      {
        name: "Git & GitHub",
        proficiency: "Proficient",
        description: "Version control, branching workflows, pull requests, collaboration, and repository management.",
        tags: ["VCS", "Collaboration", "CI/CD"],
        highlight: false
      },
      {
        name: "VS Code",
        proficiency: "Proficient",
        description: "Configured developer environment with linting, debugging, extension ecosystems, and terminal integration.",
        tags: ["IDE", "Tooling"],
        highlight: false
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "scholar-ai",
    title: "ScholarAI – AI-Based Scholarship Finder",
    category: "AI / ML",
    featured: true,
    tagline: "AI-powered educational assistant streamlining scholarship discovery and funding for students.",
    description: "Developed and deployed an AI-assisted web application designed to streamline the scholarship discovery process for students by consolidating government and private funding opportunities. Integrated responsive front-end components with a secure Firebase database to manage and retrieve real-time scholarship updates efficiently.",
    technologies: ["React.js", "Firebase", "JavaScript", "HTML5", "CSS3", "AI APIs"],
    githubUrl: "https://github.com/Nagarjuna-1322",
    liveDemoUrl: "https://github.com/Nagarjuna-1322",
    metrics: [
      { label: "Database", value: "Real-time Firebase" },
      { label: "Focus", value: "Scholarship Matching" },
      { label: "Frontend", value: "React + Tailwind" }
    ],
    modalDetails: {
      problem: "Students frequently miss out on critical government and private financial grants because scholarship opportunities are scattered across hundreds of disparate portals with inconsistent eligibility criteria.",
      solution: "ScholarAI consolidates scholarship opportunities into an intelligent, centralized platform. It uses AI assistance to parse requirements and match students with optimal funding opportunities based on their academic qualifications.",
      keyFeatures: [
        "Real-time scholarship search and filtering by merit, category, and eligibility",
        "AI-assisted eligibility advisor providing clear qualification checklists",
        "Secure Firebase Firestore backend delivering instant updates on deadlines and applications",
        "Clean, responsive interface optimized for mobile and desktop learners",
        "Saved applications tracker to never miss a submission deadline"
      ],
      techStackDetails: [
        { category: "Frontend", tools: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"] },
        { category: "Database & Backend", tools: ["Firebase Firestore", "Firebase Authentication"] },
        { category: "AI & Intelligence", tools: ["Generative AI Prompts", "AI APIs for eligibility parsing"] }
      ],
      developmentProcess: [
        "Conducted user requirement analysis among university students to identify discovery bottlenecks.",
        "Engineered the responsive React frontend with intuitive filter facets.",
        "Integrated Firebase Firestore with real-time listeners for live updates.",
        "Embedded AI prompt flows to summarize dense legal scholarship guidelines into concise bullet points."
      ],
      architectureHighlights: [
        "Real-time database sync for instant status updates",
        "Decoupled client architecture with modular components",
        "Optimized client-side caching for instant search responses"
      ]
    }
  },
  {
    id: "career-path-predictor",
    title: "AI-Driven Career Path Predictor",
    category: "AI / ML",
    featured: true,
    tagline: "Predictive ML guidance system recommending tailored career trajectories based on academic profile.",
    description: "Engineered an intelligent career guidance system utilizing predictive machine learning models to analyze user interests, skills, and academic backgrounds to recommend optimal career trajectories. Spearheaded full-stack implementation, designing an intuitive React interface backed by a Node.js server to deliver instantaneous, personalized recommendations.",
    technologies: ["Python", "Machine Learning", "React.js", "Node.js", "Firebase"],
    githubUrl: "https://github.com/Nagarjuna-1322",
    liveDemoUrl: "https://github.com/Nagarjuna-1322",
    metrics: [
      { label: "ML Engine", value: "Python Scikit" },
      { label: "Architecture", value: "Full-Stack" },
      { label: "Guidance", value: "Personalized" }
    ],
    modalDetails: {
      problem: "Early engineering and university students often struggle with selecting specialized career pathways that align with their dynamic skill progression and market demand.",
      solution: "An intelligent assessment platform that evaluates a candidate's technical skills, interests, and academic performance, executing predictive machine learning models to recommend tailored career roadmaps.",
      keyFeatures: [
        "Multifaceted skill and interest assessment questionnaire",
        "Predictive career trajectory scoring engine powered by ML algorithms",
        "Interactive skill gap analysis highlighting essential technologies to learn next",
        "Full-stack architecture with React UI and Node.js backend orchestration",
        "Customized step-by-step career milestones and resource recommendations"
      ],
      techStackDetails: [
        { category: "Machine Learning & Logic", tools: ["Python", "Machine Learning Algorithms", "Data Modeling"] },
        { category: "Frontend", tools: ["React.js", "Tailwind CSS", "Interactive Charts"] },
        { category: "Backend & Data", tools: ["Node.js", "Firebase", "REST APIs"] }
      ],
      developmentProcess: [
        "Curated career trajectory datasets combining skill vectors and industry roles.",
        "Built predictive models in Python to calculate career fitness scores.",
        "Developed a Node.js server endpoint to process input vectors and interface with models.",
        "Designed a sleek, gamified React frontend for an engaging student assessment experience."
      ],
      architectureHighlights: [
        "Low-latency recommendation pipeline",
        "Dynamic skill gap mapping visualization",
        "Scalable REST API communication between React and backend services"
      ]
    }
  },
  {
    id: "ai-prompt-studio",
    title: "Gemini Prompt & AI Workflow Explorer",
    category: "Web Development",
    featured: false,
    tagline: "Interactive playground for experimenting with LLM prompt structures, token generation, and system instructions.",
    description: "A hands-on developer utility demonstrating practical LLM prompt engineering, few-shot conditioning, and structured JSON output parsing using modern Generative AI techniques.",
    technologies: ["JavaScript", "React.js", "AI APIs", "Generative AI", "CSS3"],
    githubUrl: "https://github.com/Nagarjuna-1322",
    liveDemoUrl: "https://github.com/Nagarjuna-1322",
    metrics: [
      { label: "Focus", value: "Prompt Engineering" },
      { label: "Platform", value: "Web Application" }
    ],
    modalDetails: {
      problem: "Developers and students need an intuitive way to test system prompts, model temperatures, and structured JSON schemas when integrating LLM APIs.",
      solution: "Created an interactive testing interface for structured prompt formatting, token inspection, and immediate output comparison.",
      keyFeatures: [
        "Prompt template library with role-based system definitions",
        "Structured output validation against JSON schemas",
        "Zero-shot vs few-shot comparison view",
        "Clean dark-mode interface with code copy and export utilities"
      ],
      techStackDetails: [
        { category: "Frontend", tools: ["React.js", "JavaScript (ES6+)", "Tailwind CSS"] },
        { category: "AI & Logic", tools: ["Generative AI APIs", "Prompt Structuring"] }
      ],
      developmentProcess: [
        "Implemented flexible schema builders for rapid API experimentation.",
        "Added real-time validation and response formatting."
      ],
      architectureHighlights: [
        "Client-side state management with local persistence",
        "Modular prompt serializer"
      ]
    }
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "gnit-btech",
    period: "2024 — 2028",
    year: "Present (3rd Year)",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    organization: "Guru Nanak Institute of Technology (GNIT)",
    location: "Hyderabad, India",
    category: "Education",
    description: "Pursuing Bachelor of Technology in AI & ML with strong focus on deep learning fundamentals, algorithmic computing, web technologies, and practical AI application development.",
    achievements: [
      "Current Academic Standing: Cumulative Grade Point Average (CGPA) of 7.75 / 10.0",
      "Core Coursework: Machine Learning, Artificial Intelligence, Data Structures, Python Programming, Database Systems"
    ],
    badge: "Graduation 2028"
  },
  {
    id: "hackathon-1st",
    period: "2024",
    year: "2024",
    title: "1st Place Winner — 24-Hour Rapid Prototyping Hackathon",
    organization: "Tech Titans Club",
    location: "Hyderabad",
    category: "Award",
    description: "Secured First Prize in an intensive 24-hour sprint prototyping practical software solutions under strict time constraints, competing against top university engineering teams.",
    achievements: [
      "Designed and deployed a working MVP prototype within 24 hours",
      "Spearheaded core application architecture, frontend interactivity, and real-time database flow"
    ],
    badge: "🏆 1st Prize Winner"
  },
  {
    id: "devnovate-volunteer",
    period: "2024",
    year: "2024",
    title: "Technical Volunteer & Event Organizer",
    organization: "Devnovate 24-Hour National-Level Campus Hackathon",
    location: "GNIT Campus",
    category: "Leadership",
    description: "Contributed as an active event organizer and technical volunteer, managing logistics, technical infrastructure, and assisting participating teams throughout the national-level competition.",
    achievements: [
      "Awarded Volunteer Recognition Certificate for exceptional leadership and operational management",
      "Mentored junior participants on debugging and deployment workflows"
    ],
    badge: "National Hackathon"
  },
  {
    id: "narayana-inter",
    period: "2022 — 2024",
    year: "Passed 2024",
    title: "Intermediate (Class XII) — MPC Stream",
    organization: "Narayana Junior College",
    location: "Hyderabad, India",
    category: "Education",
    description: "Completed higher secondary education in Mathematics, Physics, and Chemistry (MPC) with stellar academic excellence.",
    achievements: [
      "Academic Standings: Cumulative Score of 95%",
      "Solid mathematical and analytical foundation for computational modeling"
    ]
  },
  {
    id: "sri-chaitanya-ssc",
    period: "2022",
    year: "Passed 2022",
    title: "Secondary School Certificate (Class X)",
    organization: "Sri Chaitanya Techno School",
    location: "Hyderabad, India",
    category: "Education",
    description: "Completed secondary school education with top-tier academic honors.",
    achievements: [
      "Academic Standings: Cumulative Grade Point Average (CGPA) of 9.8 / 10.0"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-google-genai",
    title: "Introduction to Generative AI",
    issuer: "Google",
    date: "Verified",
    description: "Comprehensive credential covering foundational concepts of Generative AI, transformer architectures, and Google's large-scale AI ecosystems.",
    skillsCovered: ["Generative AI", "Foundations", "Google Cloud AI"],
    credentialUrl: "https://github.com/Nagarjuna-1322"
  },
  {
    id: "cert-google-gemini",
    title: "Large Language Model (LLM) Prompting with Gemini",
    issuer: "Google",
    date: "Verified",
    description: "Advanced techniques in prompt engineering, context window management, few-shot prompting, and utilizing the Gemini model family for reasoning tasks.",
    skillsCovered: ["Gemini LLM", "Prompt Engineering", "Multimodal Prompts"],
    credentialUrl: "https://github.com/Nagarjuna-1322"
  },
  {
    id: "cert-ms-prompt-eng",
    title: "Introduction to Prompt Engineering",
    issuer: "Microsoft",
    date: "Verified",
    description: "Mastery of structured prompting patterns, zero-shot and few-shot calibration, hallucinations reduction, and enterprise LLM integration principles.",
    skillsCovered: ["Prompt Engineering", "LLM Optimization", "AI Safety"],
    credentialUrl: "https://github.com/Nagarjuna-1322"
  },
  {
    id: "cert-devnovate-volunteer",
    title: "Volunteer Recognition Certificate",
    issuer: "Hackathon / Organization",
    date: "2024",
    description: "Awarded for outstanding technical volunteering, logistics coordination, and team mentorship at the Devnovate 24-Hour National Hackathon.",
    skillsCovered: ["Technical Leadership", "Event Logistics", "Team Mentoring"],
    credentialUrl: "https://github.com/Nagarjuna-1322"
  }
];

export const GITHUB_REPOS: GithubRepoInfo[] = [
  {
    name: "ScholarAI-Finder",
    description: "AI-based scholarship discovery platform with real-time Firebase backend and intelligent eligibility assistance.",
    stars: 12,
    forks: 4,
    language: "JavaScript / React",
    url: "https://github.com/Nagarjuna-1322",
    topics: ["react", "firebase", "scholarship-finder", "ai-assistant"],
    updatedAt: "2024"
  },
  {
    name: "AI-Career-Path-Predictor",
    description: "Intelligent career path recommendation engine combining Python ML models with React and Node.js.",
    stars: 15,
    forks: 6,
    language: "Python / React",
    url: "https://github.com/Nagarjuna-1322",
    topics: ["machine-learning", "python", "career-predictor", "fullstack"],
    updatedAt: "2024"
  },
  {
    name: "AI-ML-Foundations",
    description: "Curated implementations of machine learning algorithms, prompt engineering patterns, and data visualizations in Python.",
    stars: 9,
    forks: 2,
    language: "Python",
    url: "https://github.com/Nagarjuna-1322",
    topics: ["python", "machine-learning", "algorithms", "prompt-engineering"],
    updatedAt: "2024"
  },
  {
    name: "Nagarjuna-1322",
    description: "Developer profile repository and portfolio showcase of Nagarjuna Reddy.",
    stars: 8,
    forks: 1,
    language: "Markdown / React",
    url: "https://github.com/Nagarjuna-1322",
    topics: ["portfolio", "nagarjuna-reddy", "developer-profile"],
    updatedAt: "2024"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/Nagarjuna-1322",
    icon: "Github",
    username: "@Nagarjuna-1322"
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/m-nagarjuna-reddy-ab00b5323",
    icon: "Linkedin",
    username: "m-nagarjuna-reddy-ab00b5323"
  },
  {
    label: "Email",
    url: "mailto:mmnagarjunareddy@gmail.com",
    icon: "Mail",
    username: "mmnagarjunareddy@gmail.com"
  }
];
