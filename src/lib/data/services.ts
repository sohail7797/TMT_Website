/**
 * Service catalogue, seed content.
 * AI-first ordering reflects current market demand.
 * Icons reference lucide-react component names (resolved in components/icon.tsx).
 */

export type Service = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  summary: string;
  description: string;
  highlights: string[];
  capabilities: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    icon: "Sparkles",
    tagline: "Intelligent systems built for real business outcomes",
    summary:
      "Custom AI assistants, chatbots, voice agents and LLM applications that automate conversations, support customers, and turn data into decisions.",
    description:
      "We design and ship production AI, from website chatbots and voice agents to agentic systems that take action across your tools. Our work spans no-code assistants, custom LLM applications, and AI integrated directly into your existing platforms. We focus on reliability, guardrails, and measurable ROI rather than demos.",
    highlights: [
      "AI assistants & chatbots (no-code and custom)",
      "Voice agents & AI calling (Bland, Retell)",
      "Agentic systems that act across your tools",
      "LLM apps with retrieval over your own data",
    ],
    capabilities: [
      "AI Consulting & Strategy",
      "AI Assistants & Chatbots",
      "Website Chatbots (no-code)",
      "Voice Agents & AI Calling Agents",
      "Data Intelligence & RAG",
      "AI Integration into existing systems",
      "Custom LLM Applications",
      "Agentic Systems",
    ],
    deliverables: [
      "Working AI assistant deployed to your channel",
      "Knowledge base / retrieval pipeline over your content",
      "Guardrails, fallback handling & escalation flows",
      "Analytics dashboard & conversation logs",
      "Documentation & team handover",
    ],
    process: [
      { step: "Discovery", detail: "Map the use case, data sources, and success metrics." },
      { step: "Design", detail: "Define conversation flows, tools, and guardrails." },
      { step: "Build", detail: "Develop, connect data, and integrate with your stack." },
      { step: "Evaluate", detail: "Test against real scenarios and tune for accuracy." },
      { step: "Deploy & Support", detail: "Ship to production and monitor performance." },
    ],
    faqs: [
      {
        q: "Will the AI use our own data?",
        a: "Yes. We build retrieval pipelines so the assistant answers from your documents, products, and policies, not generic internet knowledge.",
      },
      {
        q: "Can it talk on the phone?",
        a: "Yes. We build voice and AI calling agents that can handle inbound and outbound calls, with live transcription and action points.",
      },
      {
        q: "Which models do you use?",
        a: "We are model-agnostic and select the best fit for your accuracy, latency, and cost requirements.",
      },
    ],
    featured: true,
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    icon: "Workflow",
    tagline: "Eliminate repetitive work with reliable automations",
    summary:
      "Workflow and process automation across your tools, Slack, Gmail, Calendar, Trello, Sheets and more, that runs reliably and without per-task limits.",
    description:
      "We turn manual, repetitive processes into automations that run themselves. From lead-list processing that takes a script seconds instead of hours, to meeting summarisers that post action points to Slack, to calendar and CRM syncs, we build automations on the right tool (n8n, Apps Script, Python, Make/Zapier) and remove the limits that cripple off-the-shelf setups.",
    highlights: [
      "Process automation that saves hours per day",
      "Lead & data processing pipelines (Python)",
      "Meeting summarisers with action points to Slack",
      "Cross-app syncs: Calendar, Trello, Gmail, Sheets",
    ],
    capabilities: [
      "Business Process Automation",
      "Workflow Automation (n8n, Make, Zapier)",
      "Custom Python Automation Apps",
      "Google Apps Script Automations",
      "Data Cleaning & Normalisation Pipelines",
      "Meeting Summarisers & Call Agents",
      "Email & Reminder Automation",
      "Integration & API Glue",
    ],
    deliverables: [
      "Deployed automation with monitoring",
      "Documentation & runbook",
      "Error handling & notification on failure",
      "Source code / workflow export you own",
      "Training for your team",
    ],
    process: [
      { step: "Audit", detail: "Identify the slowest, most repetitive processes." },
      { step: "Design", detail: "Choose the right platform and map the workflow." },
      { step: "Build", detail: "Develop the automation with proper error handling." },
      { step: "Test", detail: "Validate accuracy against real inputs." },
      { step: "Handover", detail: "Deploy, document, and train your team." },
    ],
    faqs: [
      {
        q: "Will we be locked into a paid platform?",
        a: "Not unless you want to be. Where it makes sense we build on Python or Apps Script so the automation is yours, runs free, and has no per-task limits.",
      },
      {
        q: "How much time can automation realistically save?",
        a: "We have replaced 3-hour manual data processes with automations that finish in minutes. Savings depend on volume, we quantify it during the audit.",
      },
    ],
    featured: true,
  },
  {
    slug: "gis-solutions",
    title: "GIS Solutions",
    icon: "Map",
    tagline: "Location intelligence for infrastructure & government",
    summary:
      "Geospatial intelligence, interactive maps, utility mapping and GIS dashboards for municipal, utility and infrastructure organisations.",
    description:
      "We deliver end-to-end GIS, consulting, spatial analysis, data processing, and interactive web GIS applications. Our solutions help government, municipal and utility organisations map assets, plan infrastructure, integrate field surveys, and make decisions from location data.",
    highlights: [
      "Interactive web GIS applications & dashboards",
      "Utility & infrastructure asset mapping",
      "Survey integration & spatial data processing",
      "Government & municipal GIS systems",
    ],
    capabilities: [
      "GIS Consulting",
      "Spatial Analysis & Geospatial Intelligence",
      "GIS Web Applications & Dashboards",
      "Utility Mapping & Asset Management",
      "Survey Integration",
      "Location Intelligence",
      "GIS Data Processing",
      "Interactive Maps",
      "Government & Municipal GIS Systems",
      "Infrastructure Mapping",
    ],
    deliverables: [
      "Interactive GIS web application or dashboard",
      "Cleaned, structured geospatial datasets",
      "Asset & utility maps",
      "Spatial analysis reports",
      "Admin tooling & documentation",
    ],
    process: [
      { step: "Scoping", detail: "Define datasets, layers, and decision needs." },
      { step: "Data Processing", detail: "Clean, georeference, and structure spatial data." },
      { step: "Build", detail: "Develop maps, dashboards, and analysis tools." },
      { step: "Validate", detail: "Verify accuracy with stakeholders and field data." },
      { step: "Deliver", detail: "Deploy and train operators." },
    ],
    faqs: [
      {
        q: "Do you work with existing GIS data?",
        a: "Yes, we ingest, clean, and georeference data from surveys, CAD, spreadsheets, and existing systems.",
      },
      {
        q: "Can the maps be embedded in our portal?",
        a: "Yes. We build web GIS applications that embed into existing dashboards and government portals.",
      },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    icon: "Code2",
    tagline: "Enterprise platforms engineered to scale",
    summary:
      "Custom enterprise applications, ERP, management systems and cloud platforms built on modern, maintainable architecture.",
    description:
      "We build the systems businesses run on, ERPs, management platforms, internal tools, and customer-facing applications. Our engineering emphasises clean architecture, scalability, and integration with the systems you already use, so software keeps delivering as you grow.",
    highlights: [
      "Custom enterprise & business applications",
      "ERP and management systems",
      "API integrations & system modernisation",
      "Cloud-ready, scalable architecture",
    ],
    capabilities: [
      "Enterprise Applications",
      "Business Systems & ERP",
      "Custom Platforms",
      "Web Applications",
      "Management Systems",
      "Cloud Solutions",
      "API Integrations",
      "Database Architecture",
      "System Modernisation",
    ],
    deliverables: [
      "Production application & source code",
      "Database schema & API documentation",
      "Admin & role-based access control",
      "Deployment pipeline",
      "Maintenance & support plan",
    ],
    process: [
      { step: "Requirements", detail: "Workshop goals, users, and constraints." },
      { step: "Architecture", detail: "Design data model, APIs, and infrastructure." },
      { step: "Build", detail: "Develop in iterative, reviewable milestones." },
      { step: "QA", detail: "Test correctness, security, and performance." },
      { step: "Launch & Support", detail: "Deploy and maintain." },
    ],
    faqs: [
      {
        q: "Can you integrate with our existing systems?",
        a: "Yes. API integration and system modernisation are core to our work, we connect new software to your current stack.",
      },
      {
        q: "Do we own the code?",
        a: "Yes. You receive full ownership of source code and documentation.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    icon: "Globe",
    tagline: "Fast, SEO-ready websites & web apps",
    summary:
      "High-performance websites and web applications, corporate sites, portals, marketplaces and dashboards, built for speed and search.",
    description:
      "From marketing sites to complex marketplaces and dashboards, we build web experiences that are fast, accessible, SEO-optimised, and easy to maintain. We use modern frameworks (Next.js, React) and a component-driven approach so your site scales cleanly.",
    highlights: [
      "Corporate websites & landing pages",
      "Marketplaces & multi-vendor platforms",
      "Dashboards & internal portals",
      "SEO, performance & accessibility built-in",
    ],
    capabilities: [
      "Corporate Websites",
      "Web Applications",
      "Marketplace Platforms",
      "Dashboards & Portals",
      "E-commerce",
      "Headless CMS Integration",
      "SEO & Performance Optimisation",
      "Responsive & Accessible UI",
    ],
    deliverables: [
      "Responsive, SEO-optimised website or app",
      "CMS for editable content",
      "Analytics & performance setup",
      "Documentation & training",
    ],
    process: [
      { step: "Design", detail: "Define structure, content, and visual direction." },
      { step: "Build", detail: "Develop responsive, component-driven pages." },
      { step: "Optimise", detail: "Tune SEO, speed, and accessibility." },
      { step: "Launch", detail: "Deploy and hand over the CMS." },
    ],
    faqs: [
      {
        q: "Will we be able to edit content ourselves?",
        a: "Yes. We integrate a CMS so your team can update content without touching code.",
      },
      {
        q: "Is SEO included?",
        a: "Yes, clean structure, metadata, structured data, sitemaps, and performance optimisation are built in.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "Smartphone",
    tagline: "Native-quality apps for iOS & Android",
    summary:
      "Cross-platform mobile applications with clean UX, offline support and integration into your backend systems.",
    description:
      "We design and build mobile apps that feel native, work reliably in the field, and connect to your existing systems. From customer-facing apps to internal field tools, we cover the full lifecycle, design, development, deployment, and store submission.",
    highlights: [
      "Cross-platform iOS & Android apps",
      "Field & offline-capable tooling",
      "Backend & API integration",
      "App store deployment",
    ],
    capabilities: [
      "Cross-platform App Development",
      "Customer-facing Apps",
      "Field & Internal Tools",
      "Offline Support & Sync",
      "Push Notifications",
      "Backend & API Integration",
      "App Store Deployment",
      "Maintenance & Updates",
    ],
    deliverables: [
      "Published iOS & Android apps",
      "Backend / API as needed",
      "App store listings & assets",
      "Documentation & support plan",
    ],
    process: [
      { step: "UX Design", detail: "Wireframe flows and design the interface." },
      { step: "Build", detail: "Develop the app and backend." },
      { step: "Test", detail: "QA across devices and conditions." },
      { step: "Release", detail: "Submit to stores and support." },
    ],
    faqs: [
      {
        q: "Do you build for both iOS and Android?",
        a: "Yes, we build cross-platform so you reach both with a single, maintainable codebase.",
      },
    ],
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    icon: "Server",
    tagline: "Servers, networks & security, deployed and supported",
    summary:
      "Server deployment, network design, security and CCTV systems, with installation, maintenance and ongoing technical support.",
    description:
      "We design, deploy, and support the infrastructure organisations depend on, servers, networks, workstations, security and surveillance systems. From data-centre support to office rollouts, we handle installation, configuration, and maintenance end-to-end.",
    highlights: [
      "Server deployment & data-centre support",
      "Network design & installation",
      "Security & CCTV systems",
      "Maintenance & technical support",
    ],
    capabilities: [
      "Server Deployment",
      "Network Design & Installation",
      "Security Systems & CCTV",
      "Data Center Support",
      "Workstation Setup",
      "Installation Services",
      "Maintenance Services",
      "Technical Support",
    ],
    deliverables: [
      "Deployed & configured infrastructure",
      "Network & rack documentation",
      "Security / CCTV setup",
      "Maintenance & support agreement",
    ],
    process: [
      { step: "Survey", detail: "Assess site, requirements, and capacity." },
      { step: "Design", detail: "Plan the network, servers, and security layout." },
      { step: "Deploy", detail: "Install and configure on-site." },
      { step: "Support", detail: "Maintain and provide ongoing support." },
    ],
    faqs: [
      {
        q: "Do you handle on-site installation?",
        a: "Yes. We provide installation, configuration, and on-site support for servers, networks, and security systems.",
      },
      {
        q: "Can you support government and large-sector deployments?",
        a: "Yes, we have delivered hardware and infrastructure deployments for government and large institutional clients.",
      },
    ],
  },
  {
    slug: "hardware-supply",
    title: "Hardware Supply",
    icon: "Cpu",
    tagline: "Procurement of enterprise-grade IT equipment",
    summary:
      "Reliable procurement and supply of PCs, laptops, printers, servers, workstations and enterprise hardware for organisations of any scale.",
    description:
      "We source and supply IT hardware for offices, institutions, and large deployments, from individual workstations to bulk server and equipment procurement. We handle vendor management, configuration, and delivery, including installation where required.",
    highlights: [
      "PCs, laptops, printers, servers, workstations",
      "Bulk & institutional procurement",
      "Enterprise hardware & accessories",
      "Configuration & installation included",
    ],
    capabilities: [
      "Hardware Procurement",
      "IT Equipment Supply",
      "PCs, Laptops & Workstations",
      "Printers & Peripherals",
      "Servers & Enterprise Hardware",
      "Bulk & Institutional Supply",
      "Configuration & Setup",
      "Delivery & Installation",
    ],
    deliverables: [
      "Procured & configured hardware",
      "Asset list & warranty documentation",
      "Installation where required",
      "Ongoing supply agreement",
    ],
    process: [
      { step: "Specify", detail: "Define requirements and budget." },
      { step: "Source", detail: "Procure from trusted vendors." },
      { step: "Configure", detail: "Set up and test equipment." },
      { step: "Deliver", detail: "Deliver and install on-site." },
    ],
    faqs: [
      {
        q: "Can you handle large or bulk orders?",
        a: "Yes, we manage institutional and bulk procurement, including government and large-sector deployments.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
