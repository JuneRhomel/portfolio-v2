export type ArchitectureLayer = { label: string; title: string; description: string };
export type TechnicalDecision = { title: string; rationale: string };
export type Project = { title: string; slug: string; role: string; description: string; overview: string; problem: string; solution: string; features: readonly string[]; challenges: readonly string[]; decisions: readonly TechnicalDecision[]; architecture: readonly ArchitectureLayer[]; lessons: readonly string[]; image: string; imageAlt: string; imageLayout: "portrait" | "landscape"; technologies: readonly string[]; repository?: string; liveUrl: string; accent: string };
export type SkillGroup = { label: string; title: string; description: string };
export type SocialLink = { label: string; href: string };
export type Experience = { company: string; role: string; location: string; period: string; description: string; highlights: readonly string[] };
export type PortfolioData = { name: string; role: string; email: string; phone: string; location: string; introduction: string; about: readonly string[]; skills: readonly SkillGroup[]; technologies: readonly string[]; experience: readonly Experience[]; projects: readonly Project[]; socials: readonly SocialLink[] };

export const portfolio: PortfolioData = {
  name: "June Rhomel Mandigma",
  role: "Full-stack web developer",
  email: "junemandigma@gmail.com",
  phone: "+63 926 621 0532",
  location: "Batangas City, Batangas, Philippines",
  introduction: "I build responsive web applications and scalable digital products, combining front-end craftsmanship with REST API development, database solutions, and cloud-ready engineering.",
  about: [
    "I’m a full-stack developer experienced in building responsive web applications, developing RESTful APIs, and managing database solutions. My work spans front-end and back-end technologies with a strong focus on clean code, performance optimization, and user experience.",
    "I enjoy translating business requirements into scalable technical solutions, collaborating with cross-functional teams, and delivering reliable, high-quality software products.",
  ],
  skills: [
    { label: "01", title: "Front-end engineering", description: "Responsive, cross-browser interfaces built with React, TypeScript, semantic HTML, modern CSS, and component-based architecture." },
    { label: "02", title: "Full-stack development", description: "Scalable web applications using Node.js, PHP, SQL, RESTful APIs, integrations, and reliable database solutions." },
    { label: "03", title: "Quality and collaboration", description: "Agile delivery, Jest testing, debugging, troubleshooting, version control, performance optimization, and UX best practices." },
  ],
  technologies: ["TypeScript", "JavaScript", "React.js", "React Native", "Node.js", "PHP", "HTML", "CSS", "AWS Services", "AI Engineering", "Redis", "Git", "SQL", "REST API", "Jest"],
  experience: [
    {
      company: "Inventi Philippines",
      role: "Full Stack Developer",
      location: "Makati City, Metro Manila, Philippines · Remote",
      period: "March 2023 — Present",
      description: "Delivering high-quality software in an Agile environment while following engineering best practices for maintainability, scalability, and reliability.",
      highlights: [
        "Develop reusable, responsive, and user-friendly web systems for scalable applications and microservices.",
        "Collaborate with QA engineers, UX/UI designers, and stakeholders to translate business requirements into working solutions.",
        "Write unit-tested code and contribute to systems using React, TypeScript, Node.js, AWS services, SQL, REST APIs, Git, and Jest.",
      ],
    },
  ],
  projects: [
    {
      title: "AmbagMo!",
      slug: "ambagmo",
      role: "Full Stack Developer",
      description: "A shared collection and expense-tracking platform that helps groups record receipts, monitor who owes whom, review balance insights, manage payment QR codes, and keep settlements organized in one place.",
      overview: "AmbagMo! brings shared expenses, group balances, settlement options, and activity insights into one mobile-first workflow.",
      problem: "Group expenses become difficult to reconcile when contributions, receipts, balances, and payment details are spread across chats and separate apps.",
      solution: "A shared workspace where members can organize groups, see who owes whom, review balance summaries, and access payment QR codes when they are ready to settle.",
      features: ["Group creation and invite-link joining", "Per-group and all-time balance insights", "Receipt and collection tracking", "GCash and Maya payment QR management", "Authentication and account preferences", "Real-time group updates"],
      challenges: ["Representing balances clearly across multiple members and groups", "Keeping shared activity synchronized without requiring manual refreshes", "Supporting secure password and Google sign-in flows", "Packaging the mobile client and API for repeatable deployment"],
      decisions: [
        { title: "React Native client", rationale: "A shared TypeScript mobile codebase keeps the experience consistent while supporting native interaction patterns." },
        { title: "REST plus WebSocket", rationale: "REST handles predictable application operations while WebSocket updates support time-sensitive group activity." },
        { title: "JWT and Google OAuth", rationale: "Token-based sessions support the mobile client while Google OAuth provides a lower-friction sign-in option." },
        { title: "Containerized deployment", rationale: "Docker and Railway provide a repeatable runtime for the Node.js and Express service." },
      ],
      architecture: [
        { label: "01", title: "Mobile client", description: "React Native and TypeScript render group, insight, profile, and settlement workflows." },
        { label: "02", title: "Application API", description: "Node.js and Express expose authenticated operations for users, groups, balances, and receipts." },
        { label: "03", title: "Identity", description: "JWT sessions and Google OAuth protect account and group-level actions." },
        { label: "04", title: "Real-time layer", description: "WebSocket connections deliver shared activity updates to active group members." },
        { label: "05", title: "Data layer", description: "MySQL stores users, memberships, group activity, and settlement-related records." },
        { label: "06", title: "Infrastructure", description: "Docker packages the service and Railway hosts the deployed application." },
      ],
      lessons: ["Financial interfaces need explicit labels and predictable balance states.", "Real-time behavior is most useful when paired with a reliable request-response API.", "Deployment consistency matters as much as local feature completeness."],
      image: "/images/recivo.png",
      imageAlt: "AmbagMo mobile app showing profile, balance insights, and group settlement screens",
      imageLayout: "portrait",
      technologies: ["TypeScript", "React Native", "Node.js", "Express", "MySQL", "Docker", "Railway", "JWT", "Google OAuth", "Git", "WebSocket"],
      liveUrl: "https://ambagmo-app-production.up.railway.app",
      accent: "Shared expense platform",
    },
    {
      title: "Recivo",
      slug: "recivo",
      role: "Full Stack Developer",
      description: "A responsive collection-receipt tracker for recording and attaching receipts, monitoring monthly collections against a target, reviewing spending by category, and downloading period reports for submission.",
      overview: "Recivo turns receipt collection into a structured, responsive workflow with monthly progress, categorized totals, attachments, and downloadable reports.",
      problem: "Manually collected receipts are easy to lose and difficult to summarize, especially when a monthly target and submission-ready report must be maintained.",
      solution: "A focused dashboard for adding receipt details, attaching proof, monitoring the current collection period, and exporting organized reports and images.",
      features: ["Monthly collection dashboard and target progress", "Receipt creation, editing, and deletion", "Receipt image attachments", "Spending summaries by type", "Period report and image downloads", "Responsive desktop and mobile layouts"],
      challenges: ["Presenting dense receipt data clearly on small screens", "Keeping receipt operations and monthly summaries consistent", "Protecting user-specific collection data and authenticated routes", "Producing a deployment artifact that behaves consistently across environments"],
      decisions: [
        { title: "Next.js interface", rationale: "The App Router supports a responsive web experience with clear separation between rendered UI and interactive behavior." },
        { title: "Node.js and Express API", rationale: "A dedicated service boundary keeps receipt operations and authentication independent from presentation concerns." },
        { title: "JWT and Google OAuth", rationale: "The two authentication paths balance direct account access with a convenient identity-provider flow." },
        { title: "Docker on Railway", rationale: "A containerized build makes the deployed runtime explicit and repeatable." },
      ],
      architecture: [
        { label: "01", title: "Responsive web client", description: "Next.js and TypeScript render dashboard, receipt management, and reporting workflows." },
        { label: "02", title: "Application API", description: "Node.js and Express coordinate receipt operations, attachments, summaries, and report requests." },
        { label: "03", title: "Identity", description: "JWT and Google OAuth secure user-specific pages and application actions." },
        { label: "04", title: "Reporting flow", description: "Collection data is shaped into period summaries, downloadable reports, and receipt-image exports." },
        { label: "05", title: "Infrastructure", description: "Docker packages the services and Railway hosts the production deployment." },
      ],
      lessons: ["Responsive data interfaces require prioritization, not simply smaller desktop layouts.", "Report generation should be designed alongside the underlying data workflow.", "Explicit deployment configuration reduces differences between local and hosted environments."],
      image: "/images/recivo-dashboard.png",
      imageAlt: "Recivo collection receipt dashboard displayed on desktop and mobile devices",
      imageLayout: "landscape",
      technologies: ["TypeScript", "Next.js", "Node.js", "Express", "Docker", "JWT", "Google OAuth", "Railway", "Git"],
      liveUrl: "https://recivo-app-production-9111.up.railway.app",
      accent: "Collection receipt tracker",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/JuneRhomel" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/june-rhomel-mandigma-69859a175/" },
  ],
};

export function getProjectBySlug(slug: string) {
  return portfolio.projects.find((project) => project.slug === slug);
}
