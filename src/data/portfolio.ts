export type Project = { title: string; description: string; image: string; imageAlt: string; imageLayout: "portrait" | "landscape"; technologies: readonly string[]; repository?: string; liveUrl: string; accent: string };
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
      description: "A shared collection and expense-tracking platform that helps groups record receipts, monitor who owes whom, review balance insights, manage payment QR codes, and keep settlements organized in one place.",
      image: "/images/recivo.png",
      imageAlt: "AmbagMo mobile app showing profile, balance insights, and group settlement screens",
      imageLayout: "portrait",
      technologies: ["TypeScript", "React Native", "Node.js", "Express", "MySQL", "Docker", "Railway", "JWT", "Google OAuth", "Git", "WebSocket"],
      liveUrl: "https://ambagmo-app-production.up.railway.app",
      accent: "Shared expense platform",
    },
    {
      title: "Recivo",
      description: "A responsive collection-receipt tracker for recording and attaching receipts, monitoring monthly collections against a target, reviewing spending by category, and downloading period reports for submission.",
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
