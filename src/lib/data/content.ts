/**
 * Supporting marketing content: stats, process, industries,
 * tech stack, testimonials, certifications, differentiators.
 */

export const stats: { value: string; label: string; suffix?: string }[] = [
  { value: "6", suffix: "+", label: "Years delivering technology" },
  { value: "50", suffix: "+", label: "Projects executed" },
  { value: "12", suffix: "", label: "Service areas" },
  { value: "2", suffix: "", label: "Sectors: Government & Private" },
];

export const differentiators: { title: string; detail: string; icon: string }[] = [
  {
    title: "AI & automation first",
    detail:
      "We build the AI agents and automations clients actually want now — not bolt-ons. From voice agents to process automation, it's our core focus.",
    icon: "Sparkles",
  },
  {
    title: "Full-stack execution",
    detail:
      "Strategy, software, GIS, infrastructure, and hardware under one roof. We design, build, deploy, integrate, and support complete ecosystems.",
    icon: "Layers",
  },
  {
    title: "Government & enterprise proven",
    detail:
      "Experience across government, defence, utility and enterprise sector deployments — delivered to institutional standards.",
    icon: "ShieldCheck",
  },
  {
    title: "No vendor lock-in",
    detail:
      "Where it helps you, we build automations on tools you own — free to run, no per-task limits, full source handover.",
    icon: "KeyRound",
  },
  {
    title: "Registered & compliant",
    detail:
      "A formally registered business with relevant registrations and compliance documentation, built on years of referral-driven delivery.",
    icon: "BadgeCheck",
  },
  {
    title: "Outcome-focused",
    detail:
      "We measure success in hours saved, costs cut, and decisions enabled — not in demos or buzzwords.",
    icon: "Target",
  },
];

export const processSteps: { step: string; title: string; detail: string }[] = [
  {
    step: "01",
    title: "Discover",
    detail: "We map your goals, constraints, data, and success metrics before writing a line of code.",
  },
  {
    step: "02",
    title: "Design",
    detail: "We architect the solution — flows, data models, integrations, and guardrails — and agree the plan.",
  },
  {
    step: "03",
    title: "Build",
    detail: "We develop in reviewable milestones with clean, scalable, production-grade engineering.",
  },
  {
    step: "04",
    title: "Validate",
    detail: "We test correctness, performance, and security against real-world scenarios.",
  },
  {
    step: "05",
    title: "Deploy & Support",
    detail: "We ship to production, document everything, train your team, and provide ongoing support.",
  },
];

export const industries: { name: string; icon: string; detail: string }[] = [
  { name: "Government Organizations", icon: "Landmark", detail: "Digital systems, GIS, and infrastructure for public-sector bodies." },
  { name: "Municipal Authorities", icon: "Building2", detail: "Municipal GIS, asset management, and citizen-facing systems." },
  { name: "Utility Providers", icon: "Gauge", detail: "Utility mapping, technical support, and operational systems." },
  { name: "Infrastructure & Engineering", icon: "HardHat", detail: "Infrastructure mapping, software, and field tooling." },
  { name: "Defence Sector", icon: "Shield", detail: "Disciplined hardware procurement and deployment." },
  { name: "NGOs", icon: "HeartHandshake", detail: "Lean digital platforms and automation for impact teams." },
  { name: "Startups", icon: "Rocket", detail: "MVPs, AI products, and automation to move fast." },
  { name: "SMEs", icon: "Store", detail: "Websites, automation, and IT to run and grow the business." },
  { name: "Enterprises", icon: "Briefcase", detail: "Enterprise software, integrations, and infrastructure at scale." },
];

export const techStack: { category: string; items: string[] }[] = [
  { category: "AI & ML", items: ["LLMs", "RAG", "Bland", "Retell", "OpenAI", "Anthropic"] },
  { category: "Automation", items: ["n8n", "Make", "Zapier", "Apps Script", "Python"] },
  { category: "Web & App", items: ["Next.js", "React", "TypeScript", "React Native", "Node.js"] },
  { category: "GIS", items: ["Leaflet", "Mapbox", "QGIS", "PostGIS", "GeoJSON"] },
  { category: "Data & Cloud", items: ["PostgreSQL", "MongoDB", "Docker", "REST/GraphQL APIs"] },
  { category: "Infrastructure", items: ["Servers", "Networking", "CCTV", "Workstations"] },
];

/**
 * Testimonials — placeholders until client approvals are collected.
 * Replace `placeholder: true` entries with real, attributed quotes.
 */
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  company: string;
  placeholder?: boolean;
}[] = [
  {
    quote:
      "The Mahir Tech automated a process that used to take our team hours every day. It now runs in minutes, reliably.",
    name: "— (client name pending)",
    role: "Operations Lead",
    company: "Confidential",
    placeholder: true,
  },
  {
    quote:
      "They delivered exactly what they committed — on a public-sector engagement with tight standards. Professional throughout.",
    name: "— (client name pending)",
    role: "Project Coordinator",
    company: "Government Sector",
    placeholder: true,
  },
  {
    quote:
      "From AI agents to infrastructure, they handled everything as one partner. That made the whole project simpler for us.",
    name: "— (client name pending)",
    role: "Founder",
    company: "Confidential",
    placeholder: true,
  },
];

export const certifications: string[] = [
  "Registered Business",
  "Compliance Documentation",
  "Government Sector Experience",
  "Enterprise Delivery",
];
