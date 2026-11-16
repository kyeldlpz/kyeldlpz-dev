export type ProjectVisual = "care" | "legal" | "greenhouse" | "cloud";

export type Project = {
  number: string;
  year: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
  stack: string[];
  visual: ProjectVisual;
  href: string;
};

export const portfolio = {
  name: "Kzyrell Dela Paz",
  shortName: "Kzy",
  role: "Computer engineering student · web developer",
  intro:
    "I design and build useful systems where interfaces, intelligent software, and infrastructure meet.",
  location: "Manila, Philippines",
  availability: "Open to thoughtful collaborations",
  email: "your-email@example.com",
  links: {
    github: "https://github.com/kyeldlpz",
    linkedin: "#",
  },
  disciplines: ["Web systems", "Edge AI", "Cloud infrastructure", "Product interfaces"],
};

export const projects: Project[] = [
  {
    number: "01",
    year: "2025—26",
    title: "CAIretaker",
    category: "Edge AI · Assistive technology",
    summary: "A privacy-first fall and posture warning system for elder care.",
    detail:
      "A Raspberry Pi edge pipeline that combines pose estimation, temporal movement analysis, and local identity profiles to surface early warnings without sending raw video to the cloud.",
    stack: ["Raspberry Pi 5", "Hailo AI HAT+", "YOLOv8 Pose", "Flask", "SQLite"],
    visual: "care",
    href: "#contact",
  },
  {
    number: "02",
    year: "2026",
    title: "Legal Management System",
    category: "Workflow product · Web application",
    summary: "A stage-based workspace for complex legal operations.",
    detail:
      "A production workflow system shaped around structured case movement, role-aware workspaces, operational dashboards, and resilient document-heavy processes.",
    stack: ["Next.js", "React", "PostgreSQL", "Supabase", "AWS"],
    visual: "legal",
    href: "#contact",
  },
  {
    number: "03",
    year: "2025",
    title: "Hydroponic greenhouse",
    category: "IoT · Environmental control",
    summary: "A controlled growing environment for more predictable lettuce cycles.",
    detail:
      "Sensor-led greenhouse automation that watches temperature, humidity, and carbon dioxide, then turns environmental readings into practical actuation decisions.",
    stack: ["IoT sensors", "Python", "Forecasting", "Automation", "Telemetry"],
    visual: "greenhouse",
    href: "#contact",
  },
  {
    number: "04",
    year: "Ongoing",
    title: "Cloud lab notes",
    category: "Infrastructure · Experiments",
    summary: "Small systems for learning how reliable services behave.",
    detail:
      "A living collection of deployable experiments around observability, queues, storage, and the everyday details that make software feel dependable.",
    stack: ["AWS", "Docker", "CI/CD", "Observability", "TypeScript"],
    visual: "cloud",
    href: "#contact",
  },
];

export const timeline = [
  { year: "2026", label: "Building production web systems", note: "Interfaces, workflows, infrastructure" },
  { year: "2025", label: "Exploring edge AI and IoT", note: "CAIretaker · controlled environments" },
  { year: "2024", label: "Learning by shipping", note: "Web apps · data · cloud fundamentals" },
];
