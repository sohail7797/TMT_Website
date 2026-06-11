/**
 * Project portfolio — seed content.
 * Descriptions are professional but conservative; unverified metrics use
 * the `placeholder: true` flag and "—" so nothing is fabricated.
 */

export type Project = {
  slug: string;
  title: string;
  category:
    | "AI & Automation"
    | "Web Development"
    | "Software"
    | "Marketplace"
    | "GIS"
    | "IT Infrastructure";
  client: string; // "Confidential" or "—" where not public
  year?: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  featured?: boolean;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "be-digital",
    title: "Be Digital",
    category: "Web Development",
    client: "Be Digital",
    summary:
      "Digital presence and platform work for the Be Digital brand, delivering a modern, conversion-focused web experience.",
    challenge:
      "The brand needed a polished digital presence that communicated credibility and converted visitors into leads.",
    solution:
      "Designed and built a responsive, performance-optimised website with a clear information architecture and strong calls to action.",
    results: ["Modern, responsive brand presence", "SEO-ready structure", "— (metrics to be added)"],
    stack: ["Next.js", "React", "Tailwind CSS"],
    featured: true,
    placeholder: true,
  },
  {
    slug: "be-connect",
    title: "Be Connect",
    category: "Software",
    client: "Be Connect",
    summary:
      "Platform development for Be Connect, focused on connecting users through a clean, scalable application.",
    challenge:
      "Deliver a connection-oriented platform with reliable performance and room to scale.",
    solution:
      "Engineered a modular application with a maintainable architecture and integrated core workflows.",
    results: ["Scalable application architecture", "Reliable core workflows", "— (metrics to be added)"],
    stack: ["Next.js", "Node.js", "Database"],
    placeholder: true,
  },
  {
    slug: "tmhct-website",
    title: "TMHCT Website",
    category: "Web Development",
    client: "TMHCT",
    summary:
      "Corporate website delivery for TMHCT with a professional, trust-building design and editable content.",
    challenge: "Present the organisation professionally with content the team can maintain.",
    solution:
      "Built a responsive corporate website with a CMS for content management and SEO fundamentals.",
    results: ["Professional corporate presence", "Editable content via CMS", "— (metrics to be added)"],
    stack: ["Next.js", "Headless CMS", "Tailwind CSS"],
    placeholder: true,
  },
  {
    slug: "workscout-marketplace",
    title: "WorkScout Marketplace",
    category: "Marketplace",
    client: "WorkScout",
    summary:
      "A marketplace platform connecting service providers and clients, with listings, profiles and search.",
    challenge:
      "Build a two-sided marketplace with reliable listings, search, and a smooth user journey.",
    solution:
      "Developed a marketplace with provider profiles, categorised listings, search/filter, and a responsive interface.",
    results: ["Functional two-sided marketplace", "Listing & search experience", "— (metrics to be added)"],
    stack: ["Next.js", "Node.js", "Database", "Search"],
    featured: true,
    placeholder: true,
  },
  {
    slug: "marketplace-platform",
    title: "Marketplace Platform",
    category: "Marketplace",
    client: "Confidential",
    summary:
      "End-to-end marketplace platform with vendor management, transactions, and an admin dashboard.",
    challenge: "Deliver a scalable marketplace supporting multiple vendors and transaction flows.",
    solution:
      "Built vendor onboarding, catalogue management, and an admin dashboard on a scalable architecture.",
    results: ["Multi-vendor capability", "Admin & vendor dashboards", "— (metrics to be added)"],
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    placeholder: true,
  },
  {
    slug: "wasa-technical-support",
    title: "WASA Technical Support",
    category: "IT Infrastructure",
    client: "WASA (Water & Sanitation Authority)",
    summary:
      "Technical support engagement for WASA, providing IT and infrastructure assistance to a public-sector utility.",
    challenge:
      "Provide dependable technical support to a utility organisation with operational, time-sensitive needs.",
    solution:
      "Delivered hands-on technical support, troubleshooting, and infrastructure assistance.",
    results: ["Reliable technical support", "Public-sector utility experience", "— (details to be added)"],
    stack: ["IT Support", "Networking", "Infrastructure"],
    featured: true,
    placeholder: true,
  },
  {
    slug: "government-infrastructure-deployments",
    title: "Government Infrastructure Deployments",
    category: "IT Infrastructure",
    client: "Government Sector",
    summary:
      "Infrastructure and hardware deployment for government-sector engagements, delivered to institutional standards.",
    challenge: "Deploy reliable infrastructure under public-sector requirements and timelines.",
    solution:
      "Planned, procured, installed, and configured infrastructure for government-sector requirements.",
    results: ["Institutional-grade deployment", "Government-sector delivery", "— (details to be added)"],
    stack: ["Servers", "Networking", "Hardware"],
    placeholder: true,
  },
  {
    slug: "army-sector-hardware-deployments",
    title: "Army Sector Hardware Deployments",
    category: "IT Infrastructure",
    client: "Defence Sector",
    summary:
      "Hardware procurement and deployment for army-sector engagements, executed with discipline and accountability.",
    challenge: "Supply and deploy hardware to strict institutional standards.",
    solution:
      "Managed procurement, configuration, and deployment of hardware for defence-sector requirements.",
    results: ["Disciplined hardware deployment", "Defence-sector delivery", "— (details to be added)"],
    stack: ["Hardware", "Procurement", "Deployment"],
    placeholder: true,
  },
  {
    slug: "enterprise-it-deployments",
    title: "Enterprise IT Deployments",
    category: "IT Infrastructure",
    client: "Enterprise Clients",
    summary:
      "Server installations, network infrastructure, and workstation rollouts for enterprise clients.",
    challenge: "Stand up reliable enterprise IT with minimal disruption to operations.",
    solution:
      "Delivered server installs, network setup, and workstation configuration with documentation and support.",
    results: ["Reliable enterprise rollouts", "Documented & supported", "— (details to be added)"],
    stack: ["Servers", "Networking", "Workstations"],
    placeholder: true,
  },
  // ----- AI / Automation showcase (from delivered work) -----
  {
    slug: "leads-processing-automation",
    title: "Leads Processing Automation",
    category: "AI & Automation",
    client: "Confidential",
    summary:
      "A Python automation that turns a 3-hour manual lead-processing task into a job that finishes in minutes — free and without limits.",
    challenge:
      "A client's large leads sheet required ~3 hours of manual processing: normalising company names, extracting first names, standardising city names, and splitting records by email provider.",
    solution:
      "Built a robust Python application that processes the CSV, normalises company names, extracts client first names, standardises city names, and outputs two clean files — one for Microsoft email providers and one for all others.",
    results: [
      "~3 hours of manual work reduced to minutes",
      "Accurate, repeatable results with no per-task limits",
      "Lifetime-free — no recurring platform cost",
    ],
    stack: ["Python", "Pandas", "Data Processing"],
    featured: true,
  },
  {
    slug: "trello-calendar-automation",
    title: "Trello × Calendar Automation",
    category: "AI & Automation",
    client: "Internal / Confidential",
    summary:
      "An Apps Script automation that adds Trello card due dates to a calendar with time and colour — built free after off-the-shelf tools hit limits.",
    challenge:
      "Whenever a due date was added or updated on cards in selected Trello boards, the card needed to appear on a calendar at a specific time and colour. Zapier and Make each hit limitations.",
    solution:
      "Engineered a Google Apps Script automation that syncs Trello due dates to the calendar reliably — free and without the limits of no-code platforms.",
    results: ["Reliable, real-time sync", "No platform limits or recurring cost", "Fully owned automation"],
    stack: ["Google Apps Script", "Trello API", "Google Calendar"],
    featured: true,
  },
  {
    slug: "meeting-summarizer",
    title: "Meeting Summariser & Call Agent",
    category: "AI & Automation",
    client: "Confidential",
    summary:
      "A meeting summariser (Fathom + n8n + Slack) and a live call agent that transcribes calls in real time and saves summaries with action points.",
    challenge:
      "Teams needed fast, structured recaps of calls — key points and action items — without manual note-taking.",
    solution:
      "Built a summariser that posts concise recaps with action points to Slack seconds after a call, plus a call agent that shows live transcription and saves a transcript + summary file when the call ends.",
    results: ["Summaries delivered within seconds", "Action points captured automatically", "Searchable transcript archive"],
    stack: ["n8n", "Fathom", "Slack", "Speech-to-Text"],
    featured: true,
  },
  {
    slug: "ai-voice-calling-agents",
    title: "AI Voice & Calling Agents",
    category: "AI & Automation",
    client: "Confidential",
    summary:
      "Website voice agents and AI calling agents built with Bland and Retell for automated inbound/outbound conversations.",
    challenge: "Handle customer conversations and calls automatically while keeping them natural and reliable.",
    solution:
      "Delivered website voice agents and AI calling agents using Bland and Retell, with guardrails and escalation paths.",
    results: ["Automated voice conversations", "Inbound & outbound calling", "Natural, guarded interactions"],
    stack: ["Bland", "Retell", "LLMs", "Telephony"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = [
  "AI & Automation",
  "Web Development",
  "Software",
  "Marketplace",
  "GIS",
  "IT Infrastructure",
] as const;
