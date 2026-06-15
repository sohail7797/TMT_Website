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
      "We build the AI agents and automations clients actually want now, not bolt-ons. From voice agents to process automation, it is our core focus.",
    icon: "Sparkles",
  },
  {
    title: "Full-stack execution",
    detail:
      "Strategy, software, GIS, infrastructure and hardware under one roof. We design, build, deploy, integrate and support complete ecosystems.",
    icon: "Layers",
  },
  {
    title: "Government & enterprise proven",
    detail:
      "Experience across government, defence, utility and enterprise deployments, delivered to institutional standards.",
    icon: "ShieldCheck",
  },
  {
    title: "No vendor lock-in",
    detail:
      "Where it helps you, we build automations on tools you own: free to run, no per-task limits, full source handover.",
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
      "We measure success in hours saved, costs cut and decisions enabled, not in demos or buzzwords.",
    icon: "Target",
  },
];

export const processSteps: { step: string; title: string; detail: string }[] = [
  {
    step: "01",
    title: "Discover",
    detail: "We map your goals, constraints, data and success metrics before writing a line of code.",
  },
  {
    step: "02",
    title: "Design",
    detail: "We architect the solution (flows, data models, integrations and guardrails) and agree the plan.",
  },
  {
    step: "03",
    title: "Build",
    detail: "We develop in reviewable milestones with clean, scalable, production-grade engineering.",
  },
  {
    step: "04",
    title: "Validate",
    detail: "We test correctness, performance and security against real-world scenarios.",
  },
  {
    step: "05",
    title: "Deploy & Support",
    detail: "We ship to production, document everything, train your team and provide ongoing support.",
  },
];

export const industries: { name: string; icon: string; detail: string }[] = [
  { name: "Government Organizations", icon: "Landmark", detail: "Digital systems, GIS and infrastructure for public-sector bodies." },
  { name: "Defence Sector", icon: "Shield", detail: "Disciplined hardware, servers, NAS and computer-lab deployments." },
  { name: "Municipal Authorities", icon: "Building2", detail: "Municipal GIS, asset management and citizen-facing systems." },
  { name: "Utility Providers", icon: "Gauge", detail: "Utility mapping, technical support and operational systems." },
  { name: "Education", icon: "GraduationCap", detail: "Computer labs, school IT and learning platforms." },
  { name: "Infrastructure & Engineering", icon: "HardHat", detail: "Infrastructure mapping, software and field tooling." },
  { name: "NGOs & Trusts", icon: "HeartHandshake", detail: "Lean digital platforms and automation for impact teams." },
  { name: "Startups", icon: "Rocket", detail: "MVPs, AI products and automation to move fast." },
  { name: "SMEs", icon: "Store", detail: "Websites, automation and IT to run and grow the business." },
  { name: "Enterprises", icon: "Briefcase", detail: "Enterprise software, integrations and infrastructure at scale." },
];

export const techStack: { category: string; items: string[] }[] = [
  { category: "AI & ML", items: ["LLMs", "RAG", "Bland", "Retell", "OpenAI", "Anthropic"] },
  { category: "Automation", items: ["n8n", "Make", "Zapier", "Apps Script", "Python"] },
  { category: "Web & App", items: ["Next.js", "React", "WordPress", "TypeScript", "React Native", "Node.js"] },
  { category: "GIS", items: ["Leaflet", "Mapbox", "QGIS", "PostGIS", "GeoJSON"] },
  { category: "Data & Cloud", items: ["PostgreSQL", "MongoDB", "Docker", "REST/GraphQL APIs"] },
  { category: "Infrastructure", items: ["Servers", "NAS Storage", "Networking", "CCTV", "Workstations"] },
];

/** Client testimonials. Real, human voices shown as name + designation. */
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}[] = [
  {
    quote:
      "They automated a weekly process that used to eat up around three hours of my time. Now it runs in minutes and the output is spot on every time. Genuinely changed how I work.",
    name: "Uzair",
    role: "Operations Manager",
    rating: 5,
  },
  {
    quote:
      "The AI chatbot answers our customers around the clock and passes real leads straight to my team. Setup was smooth and the results were immediate.",
    name: "Helene",
    role: "Marketing Manager",
    rating: 5,
  },
  {
    quote:
      "Our website was delivered exactly as promised: fast, clean and easy for us to update ourselves. The communication stayed clear from start to finish.",
    name: "Edwin",
    role: "Director",
    rating: 5,
  },
  {
    quote:
      "The server and storage deployment was handled professionally, to the exact standards our environment demands. They do what they commit to, on time.",
    name: "Ahmad",
    role: "IT Manager",
    rating: 5,
  },
  {
    quote:
      "We needed an AI calling agent that sounds natural and never drops a lead, and that is exactly what they built. Genuinely impressive engineering.",
    name: "Mark",
    role: "CEO",
    rating: 5,
  },
  {
    quote:
      "Our computer lab was set up cleanly and runs without a single issue. Students and staff finally have a facility they can rely on every day.",
    name: "Derek",
    role: "School Principal",
    rating: 5,
  },
  {
    quote:
      "From the website to the technical side, they handled everything as one partner. That made the entire project far simpler for us to manage.",
    name: "Sara",
    role: "Project Manager",
    rating: 5,
  },
  {
    quote:
      "Their meeting summariser drops action points into Slack seconds after every call. Nothing slips through the cracks anymore.",
    name: "Bilal",
    role: "Product Lead",
    rating: 5,
  },
  {
    quote:
      "Responsive, dependable and genuinely skilled. They understood our deadlines and never once made us chase them for an update.",
    name: "Daniel",
    role: "COO",
    rating: 5,
  },
  {
    quote:
      "They took a messy manual workflow and turned it into a clean automation that simply runs. Easily the best money we have spent on operations.",
    name: "Omar",
    role: "Founder",
    rating: 5,
  },
];

export const certifications: string[] = [
  "Registered Business",
  "Compliance Documentation",
  "Government & Defence Sector Experience",
  "Enterprise Delivery",
];
