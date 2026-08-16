/**
 * Project portfolio. Real, confident case studies written from delivered work.
 * AI & automation cases are framed as client-engagement stories.
 */
import { siteConfig } from "@/lib/site";

/** GIS engagements are led by our COO & GIS Expert. */
const GIS_LEAD = siteConfig.team.coo;

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
  client: string;
  industry?: string;
  href?: string; // public/live link where available
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  /** Delivery lead, shown on the case study when the engagement had a named owner. */
  lead?: string;
  /** Engagement window, e.g. "Jan 2022 – Apr 2022". */
  period?: string;
  /** Domain skills applied, distinct from the technology stack. */
  skills?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  /* ───────────── AI & Automation (core focus) ───────────── */
  {
    slug: "leads-processing-automation",
    title: "Leads Processing Automation",
    category: "AI & Automation",
    client: "B2B Sales Team",
    industry: "Sales & Lead Generation",
    summary:
      "A Python automation that turned a three-hour manual lead-cleaning task into a job that finishes in minutes, with no recurring cost.",
    challenge:
      "A client reached out to us through one of our channels with a recurring headache. Every week he received a large leads spreadsheet and had to clean it by hand: normalising company names, pulling the client's first name out of their full name, standardising city spellings, and splitting the list by email provider. It took roughly three hours each time and mistakes slipped through.",
    solution:
      "After understanding his exact workflow, we built a dedicated Python application that ingests the raw CSV, normalises company names, extracts first names, standardises city names, and exports two clean files: one for contacts on Microsoft email and one for everyone else. We tested it against his real data until the output matched what he would have produced by hand, only faster.",
    results: [
      "Three hours of manual work reduced to a few minutes",
      "Consistent, accurate output with no human slips",
      "Runs locally for life with no per-task limits or subscription",
    ],
    stack: ["Python", "Pandas", "CSV Processing", "Data Normalisation"],
    featured: true,
  },
  {
    slug: "trello-calendar-automation",
    title: "Trello to Calendar Automation",
    category: "AI & Automation",
    client: "Project Manager",
    industry: "Operations",
    summary:
      "A Google Apps Script automation that mirrors Trello card due dates onto a calendar with the right time and colour, built free after no-code tools hit their limits.",
    challenge:
      "A senior manager contacted us with a clear need: whenever he added or updated a due date on a card in selected Trello boards, that task should appear on a calendar at a specific time and colour so the work would actually get done on the committed day. He had already tried Zapier and Make, but each came with limits that broke the workflow.",
    solution:
      "We took the problem apart and rebuilt it in Google Apps Script. The automation watches the chosen Trello boards and, on any due-date change, creates or updates a matching calendar event with the correct title, time and colour. It runs on the client's own Google account with no third-party quota in the way.",
    results: [
      "Reliable, real-time sync between Trello and the calendar",
      "No platform limits and no recurring subscription",
      "A fully owned automation the client controls end to end",
    ],
    stack: ["Google Apps Script", "Trello API", "Google Calendar API"],
    featured: true,
  },
  {
    slug: "meeting-summarizer-call-agent",
    title: "Meeting Summariser & Live Call Agent",
    category: "AI & Automation",
    client: "Remote Team",
    industry: "Productivity",
    summary:
      "An automation that posts call summaries with action points to Slack seconds after a meeting, plus a live agent that transcribes calls in real time and saves a clean record.",
    challenge:
      "A team we work with kept losing the thread after calls. People forgot action items, and writing up notes by hand was slow and inconsistent. They wanted recaps to land somewhere everyone could see, immediately.",
    solution:
      "We built two connected tools. The first uses Fathom with an n8n workflow to push a concise summary and clear action points into Slack within seconds of a call ending. The second is a lightweight live agent you switch on at the start of a call: it shows real-time transcription and key points as you talk, then saves the full transcript and summary to a file when the call stops.",
    results: [
      "Summaries and action points delivered to Slack within seconds",
      "Action items captured automatically, nothing forgotten",
      "A searchable archive of transcripts and decisions",
    ],
    stack: ["n8n", "Fathom", "Slack", "Speech-to-Text", "LLMs"],
    featured: true,
  },
  {
    slug: "ai-voice-calling-agents",
    title: "AI Voice & Calling Agents",
    category: "AI & Automation",
    client: "Service Business",
    industry: "Customer Engagement",
    summary:
      "Website voice agents and AI calling agents built with Bland and Retell to handle inbound and outbound conversations naturally.",
    challenge:
      "A business wanted to answer common customer questions and make routine calls without tying up staff, while keeping every conversation natural and on-brand.",
    solution:
      "We designed voice agents for the website and AI calling agents with Bland and Retell, scripted the conversation flows, added guardrails, and built escalation paths so anything sensitive is handed to a human. The agents speak naturally and stay on topic.",
    results: [
      "Automated voice conversations on the website and phone",
      "Inbound and outbound calling handled without staff time",
      "Natural, guarded interactions with clean human handover",
    ],
    stack: ["Bland", "Retell", "LLMs", "Telephony"],
  },
  {
    slug: "website-chatbot-nocode",
    title: "No-Code Website Chatbot",
    category: "AI & Automation",
    client: "SME",
    industry: "Web & Support",
    summary:
      "A website chatbot that answers visitor questions from the company's own content and routes real leads to the team.",
    challenge:
      "A small business was missing enquiries that came in after hours, and the team spent time answering the same questions over and over.",
    solution:
      "We built a website chatbot trained on the company's own pages, services and FAQs, so it answers accurately instead of guessing. When a visitor shows buying intent, the bot captures the details and hands the lead to the team.",
    results: [
      "Common questions answered instantly, day and night",
      "Qualified leads captured and routed to the team",
      "Less repetitive support load on staff",
    ],
    stack: ["No-Code Chatbot", "RAG", "Website Integration"],
  },
  {
    slug: "appscript-form-email-automations",
    title: "Form & Email Automations (Apps Script)",
    category: "AI & Automation",
    client: "Education & Brand Clients",
    industry: "Operations",
    summary:
      "Google Apps Script automations connecting Google Forms and Gmail for an educational institute and a brand, plus billing-reminder emails for a SaaS platform.",
    challenge:
      "Several clients were handling form responses and follow-up emails manually: an educational institute, a consumer brand, and a SaaS company that needed timely billing reminders. Each manual step was a chance to miss something.",
    solution:
      "We built tailored Apps Script automations for each: Google Form submissions trigger the right Gmail responses automatically for the institute and the brand, and the SaaS platform sends billing reminders on schedule without anyone watching the clock.",
    results: [
      "Form responses and follow-ups handled automatically",
      "Billing reminders sent on time, every time",
      "Zero recurring cost on the clients' own Google accounts",
    ],
    stack: ["Google Apps Script", "Google Forms", "Gmail API"],
  },

  /* ───────────── GIS & Geospatial (led by our COO & GIS Expert) ───────────── */
  {
    slug: "gis-land-management-system",
    title: "GIS-Based Land Management & Records Digitisation",
    category: "GIS",
    client: "Confidential (name withheld by agreement)",
    industry: "Land & Estate Management",
    lead: GIS_LEAD,
    summary:
      "A complete GIS-based land management system that ties every land document, down to the oldest record in the archive, to the exact parcel it belongs to.",
    challenge:
      "The client approached us with an archive problem that had become an operating risk. Decades of land holdings existed only on paper: deeds, mutations, allotment letters, survey maps, court orders and correspondence, spread across registers and cupboards, some of them handwritten, fragile and older than anyone still working there. Nothing connected a document to the piece of land it described. Answering a simple ownership question meant days of digging, and when a boundary or title was challenged, the evidence was hard to assemble in time. The organisation's identity had to stay confidential throughout.",
    solution:
      "We built the system around one idea: the map is the index. We georeferenced the legacy cadastral sheets, digitised parcel geometry into a structured geodatabase, and then scanned, indexed and tagged the document archive from the oldest surviving record forward, by document type, date, parties and parcel reference. Every document was linked to its parcel, so selecting a parcel on the map returns its full chronological history in one view. On top of that we added search by owner, parcel and document number, role-based access so sensitive records stay restricted, and an audit trail of every view and change. The engagement ran under strict confidentiality: the client is never named, and the data never left their controlled environment.",
    results: [
      "Any parcel's complete document history retrievable in seconds instead of days",
      "Ownership chains reconstructed and verifiable from the oldest available record onward",
      "Boundary and title queries answered with mapped, document-backed evidence",
      "Fragile originals preserved, with staff working from indexed digital copies",
      "Role-based access and audit trails over confidential land records",
    ],
    stack: ["ArcGIS", "QGIS", "PostGIS", "Geodatabase Design", "Document Digitisation", "Web GIS"],
    skills: [
      "Cadastral Mapping",
      "Georeferencing & Digitisation",
      "Land Records Management",
      "Geodatabase Design",
      "Spatial Analysis",
      "Data Governance & Confidentiality",
    ],
    featured: true,
  },
  {
    slug: "sugarcane-harvest-monitoring",
    title: "Sugarcane Harvest Monitoring using Multispectral Imagery",
    category: "GIS",
    client: "Sugarcane Supply & Grower Operations",
    industry: "Agriculture & Agri-processing",
    lead: GIS_LEAD,
    period: "Jan 2022 – Apr 2022",
    summary:
      "Satellite-based harvest-readiness mapping that told a cane supply team which blocks to cut first, instead of relying on field-by-field guesswork.",
    challenge:
      "The client came to us during crushing season with a scheduling problem. Cane was being harvested block by block on the basis of field visits and habit, which meant some blocks were cut before they matured and others stood too long. Both cost sugar recovery, and with thousands of acres spread across a wide catchment, no team could physically inspect enough of it in time to fix the order.",
    solution:
      "We built a monitoring workflow on multispectral satellite imagery. Field boundaries were digitised into a parcel layer, then each new cloud-free acquisition was processed into vegetation and moisture indices and tracked as a time series per block. Comparing each block's curve against its own crop calendar let us classify maturity and flag the blocks approaching peak. The output was a plain harvest-readiness map, refreshed with every satellite pass, that the supply team could act on directly.",
    results: [
      "Harvest sequencing driven by observed crop condition, not manual scouting",
      "Whole catchment covered every satellite pass, without extra field teams",
      "Early and late cutting reduced, protecting sugar recovery",
      "A repeatable workflow the team can re-run each season",
    ],
    stack: ["Sentinel-2", "ERDAS Imagine", "ArcGIS", "Python", "NDVI / NDMI", "Time-Series Analysis"],
    skills: [
      "Remote Sensing",
      "Multispectral Image Processing",
      "Vegetation Index Analysis",
      "Crop Phenology",
      "Spatial Analysis",
      "Qualitative Research",
    ],
  },
  {
    slug: "crop-health-change-detection-yield",
    title: "Crop Health Monitoring, Change Detection & Yield Estimation",
    category: "GIS",
    client: "Agricultural Programme Operator",
    industry: "Agriculture",
    lead: GIS_LEAD,
    summary:
      "A multi-season geospatial programme that flags crop stress early, tracks how cropped area changes year on year, and estimates yield before harvest.",
    challenge:
      "The client was managing crops across a large area with three blind spots: stress was noticed only once it was visible on the ground and already costly, nobody could say reliably how cropped area had shifted between seasons, and yield was a guess until the harvest was actually in. Procurement, storage and credit decisions were all being made on that guess.",
    solution:
      "We put a multi-temporal satellite stack behind all three questions. Health indices computed per field surface stress zones early enough to act on. Supervised classification of each season, compared post-classification, shows exactly where crop area expanded, contracted or switched type. Yield is modelled by regressing peak-season index values against field-sampled harvest records, so the estimate is calibrated to the client's own ground data rather than a generic curve. Everything is delivered as maps and season reports the operations team reads without needing GIS training.",
    results: [
      "Crop stress surfaced from imagery before it was visible on the ground",
      "Season-to-season cropped-area change quantified per zone, not estimated",
      "Pre-harvest yield estimates calibrated against the client's own field samples",
      "Procurement and storage planning based on mapped evidence",
    ],
    stack: ["Sentinel-2", "Landsat", "ArcGIS", "ERDAS Imagine", "Python", "Supervised Classification"],
    skills: [
      "Remote Sensing",
      "Image Classification",
      "Change Detection",
      "Yield Modelling",
      "Spatial Statistics",
      "Qualitative Research",
    ],
  },
  {
    slug: "dem-from-sentinel1-sar",
    title: "DEM Generation from SAR Data (Sentinel-1)",
    category: "GIS",
    client: "Infrastructure Planning Team",
    industry: "Surveying & Infrastructure",
    lead: GIS_LEAD,
    period: "Jul 2020",
    summary:
      "A site-specific digital elevation model built from Sentinel-1 radar imagery, where open global DEMs were too coarse and a ground survey was too slow.",
    challenge:
      "The client needed terrain heights for a planning study and was stuck between two bad options. The freely available global elevation data was too coarse and too dated for the decisions they had to make, while commissioning a ground or LiDAR survey over that area would have taken longer and cost more than the study itself justified.",
    solution:
      "We generated the elevation model from Sentinel-1 SAR using an interferometric workflow: selecting a suitable image pair, coregistration, interferogram formation, coherence assessment, phase filtering, unwrapping, conversion of unwrapped phase to height, and geocoding to the client's projection. The result was validated against reference elevation data and known control points before handover, and the areas of low coherence were reported honestly rather than smoothed over.",
    results: [
      "A site-specific DEM delivered in days, without a ground survey",
      "Radar-derived elevation validated against reference data and control points",
      "Low-confidence zones documented so planners knew what to trust",
      "A repeatable SAR workflow the client can commission again for new sites",
    ],
    stack: ["Sentinel-1 SAR", "SNAP", "InSAR", "SNAPHU", "ArcGIS", "QGIS"],
    skills: [
      "SAR Interferometry",
      "Radar Remote Sensing",
      "Terrain & Elevation Modelling",
      "Geodesy & Projections",
      "Data Validation",
      "Geography",
    ],
  },
  {
    slug: "gis-raster-publishing-caching-tool",
    title: "Customised GIS Tool for Automatic Raster Publishing & Caching",
    category: "GIS",
    client: "Institutional GIS Data Team",
    industry: "Geospatial Data Operations",
    lead: GIS_LEAD,
    period: "Jun 2020",
    summary:
      "A custom GIS tool that takes new raster data from folder to published, cached map service automatically, replacing a slow manual routine.",
    challenge:
      "Every time new imagery arrived, an analyst had to walk it through the same manual routine by hand: check it, mosaic it, publish it to the map server, then build cache tiles scale by scale. It ate hours, it varied depending on who did it, and when someone skipped the caching step the maps crawled for every user downstream.",
    solution:
      "We automated the whole routine into a customised GIS tool. It watches the drop folder, validates incoming rasters, handles projection and mosaicking, publishes the service to the map server, and generates cache tiles at the agreed scale levels, writing a log of every run so failures are visible instead of silent. The analysts kept control of the parameters; they just stopped doing the clicking.",
    results: [
      "Raster publishing and caching reduced from hours of clicking to an unattended run",
      "Identical output every time, regardless of who is on shift",
      "Cached services, so maps load fast for every downstream user",
      "Run logs that make failures visible instead of silent",
    ],
    stack: ["ArcPy", "Python", "ArcGIS Server", "Raster Mosaicking", "Map Caching", "Automation"],
    skills: [
      "GIS Automation & Scripting",
      "Raster Data Management",
      "Map Service Publishing",
      "Geoprocessing Workflow Design",
      "Spatial Data Infrastructure",
      "Geography",
    ],
  },
  {
    slug: "river-flow-prediction-gee",
    title: "River Flow Prediction from Historical Data on Google Earth Engine",
    category: "GIS",
    client: "Water Resources Stakeholder",
    industry: "Water Resources & Hydrology",
    lead: GIS_LEAD,
    period: "Dec 2019 – Jan 2020",
    summary:
      "A Google Earth Engine model that predicts river flow from historical climate and catchment data, for a basin with thin gauge coverage.",
    challenge:
      "The client needed to anticipate river flow for planning, but the basin had sparse and inconsistent gauge records. Decisions about water availability were being made on short, patchy history, and there was no practical way to install and wait on new instrumentation.",
    solution:
      "We rebuilt the picture from satellite and reanalysis archives on Google Earth Engine. The catchment was delineated from elevation data, then decades of precipitation, temperature and snow-cover records were extracted over it and aligned with the gauge discharge that did exist. A regression model trained on that relationship produces flow predictions, and because the whole thing runs on Earth Engine, it re-runs against fresh data without any local processing burden.",
    results: [
      "Flow prediction made possible despite sparse gauge records",
      "Decades of climate and catchment history brought into the model",
      "Runs entirely on Earth Engine, no local processing infrastructure needed",
      "Re-runnable as new seasons of data become available",
    ],
    stack: ["Google Earth Engine", "JavaScript API", "CHIRPS", "MODIS", "Python", "Regression Modelling"],
    skills: [
      "Hydrological Modelling",
      "Cloud Geospatial Analysis",
      "Time-Series Analysis",
      "Watershed Delineation",
      "Statistical Modelling",
      "Geography",
    ],
  },
  {
    slug: "solar-power-potential-gis",
    title: "Estimating Solar Power Potential using Customised GIS Tools",
    category: "GIS",
    client: "Renewable Energy Planner",
    industry: "Renewable Energy",
    lead: GIS_LEAD,
    period: "Dec 2019",
    summary:
      "Custom GIS tooling that ranks sites by solar potential using terrain, shading and land-use constraints, so siting decisions stop being guesswork.",
    challenge:
      "The client had candidate areas for solar deployment and no defensible way to choose between them. Terrain, shading from surrounding relief, slope and aspect, and land-use restrictions all changed the answer, but assessing each site by hand was slow and the reasoning was impossible to reproduce for anyone reviewing the decision.",
    solution:
      "We modelled incoming solar radiation across the study area from elevation data, accounting for slope, aspect and terrain shadowing through the year, then layered exclusion masks for unsuitable land use and constrained areas. The scoring was packaged into a customised GIS toolbox, so the client can change assumptions and re-run the ranking themselves, and every ranked site comes with the reasoning behind its score.",
    results: [
      "Candidate sites ranked on modelled radiation, not assumption",
      "Terrain shading, slope and aspect factored into every score",
      "Unsuitable and restricted land excluded before ranking",
      "A reusable toolbox the client re-runs with their own parameters",
    ],
    stack: ["ArcGIS", "Solar Radiation Modelling", "Model Builder", "Python", "DEM Analysis", "Suitability Modelling"],
    skills: [
      "Solar Resource Assessment",
      "Terrain & DEM Analysis",
      "Multi-Criteria Site Suitability",
      "GIS Tool Development",
      "Spatial Analysis",
      "Geography",
    ],
  },

  /* ───────────── Web & Marketplace ───────────── */
  {
    slug: "be-digital",
    title: "Be Digital",
    category: "Web Development",
    client: "Be Digital (New Zealand)",
    industry: "IT Solutions Provider",
    href: "https://www.bdigital.co.nz/",
    summary:
      "Web platform work for Be Digital, a New Zealand IT-solutions provider with divisions spanning web, cloud, security, telecom and AI across NZ, Australia and India.",
    challenge:
      "Be Digital offers a wide range of services under one roof (Be Online, Be Cloud, Be Secure, Be Connect and Be AI) and needed a clear, professional web presence that presents each division well and converts visitors into enquiries across multiple regions.",
    solution:
      "We delivered a structured, responsive WordPress website that organises Be Digital's service divisions cleanly, communicates credibility, and is easy for their team to maintain. The information architecture keeps a broad service catalogue navigable and conversion-focused.",
    results: [
      "Clear presentation of every service division",
      "Responsive, professional, SEO-ready WordPress build",
      "Content the in-house team can update without a developer",
    ],
    stack: ["WordPress", "PHP", "Responsive Design", "SEO"],
    featured: true,
  },
  {
    slug: "be-connect",
    title: "Be Connect",
    category: "Web Development",
    client: "Be Connect (Be Digital Group)",
    industry: "Telecom & Connectivity",
    summary:
      "Web presence for Be Connect, the telecommunications and ICT-procurement division of the Be Digital group.",
    challenge:
      "Be Connect handles telecommunications and the procurement of ICT hardware, software and network devices. It needed a focused presence that explains its connectivity offering and procurement strengths to business buyers.",
    solution:
      "We built a clean, responsive WordPress section that frames Be Connect's telecom and procurement services for a business audience, consistent with the wider Be Digital brand and easy to keep current.",
    results: [
      "Focused presentation of telecom and ICT-procurement services",
      "Consistent with the parent Be Digital brand",
      "Maintainable WordPress build",
    ],
    stack: ["WordPress", "PHP", "Responsive Design"],
  },
  {
    slug: "tmhct-website",
    title: "TMHCT Website",
    category: "Web Development",
    client: "TMHCT (Charitable Trust)",
    industry: "Non-Profit / Trust",
    summary:
      "A trustworthy, easy-to-manage website for TMHCT, a charitable trust, designed to communicate its mission and support its work.",
    challenge:
      "As a charitable trust, TMHCT needed a website that conveys credibility and mission clearly, while staying simple enough for the team to maintain and update as activities evolve.",
    solution:
      "We designed and built a clean, accessible WordPress website with a clear structure for the trust's mission, work and contact points, plus a CMS so the team can keep content current themselves.",
    results: [
      "Clear, credible presentation of the trust's mission",
      "Accessible, mobile-friendly design",
      "Self-service content management for the team",
    ],
    stack: ["WordPress", "PHP", "Accessible UI", "SEO"],
  },
  {
    slug: "workscout-marketplace",
    title: "WorkScout Marketplace",
    category: "Marketplace",
    client: "WorkScout",
    industry: "Freelance & Services Marketplace",
    summary:
      "A freelance and services marketplace connecting clients with service providers through profiles, listings and search.",
    challenge:
      "WorkScout needed a working two-sided marketplace: providers needed profiles and listings, clients needed to search and find the right person, and the whole experience had to feel smooth and trustworthy on any device.",
    solution:
      "We delivered a marketplace with provider profiles, categorised service listings, search and filtering, and a responsive interface, structured so the platform can grow as more providers and categories are added.",
    results: [
      "A functional two-sided freelance marketplace",
      "Profiles, listings, search and filtering in place",
      "A responsive experience ready to scale",
    ],
    stack: ["WordPress", "Marketplace Plugins", "Search & Filtering", "Responsive Design"],
    featured: true,
  },

  /* ───────────── IT Infrastructure & Public Sector ───────────── */
  {
    slug: "pak-army-servers-nas",
    title: "Servers & NAS Solutions, Pakistan Army",
    category: "IT Infrastructure",
    client: "Pakistan Army",
    industry: "Defence",
    summary:
      "Provision and deployment of servers and NAS storage solutions for the Pakistan Army, executed with the discipline and accountability defence work demands.",
    challenge:
      "The requirement was reliable server and network-attached storage capacity for a defence-sector environment, where standards, security and dependability are non-negotiable.",
    solution:
      "We handled the provision of servers and NAS solutions end to end: specification, procurement of the right enterprise hardware, configuration, and on-site deployment, delivered to institutional standards with proper documentation.",
    results: [
      "Reliable server and NAS storage capacity delivered",
      "Procurement, configuration and on-site deployment handled in full",
      "Executed to strict defence-sector standards",
    ],
    stack: ["Servers", "NAS Storage", "Enterprise Hardware", "On-site Deployment"],
    featured: true,
  },
  {
    slug: "pak-army-computer-lab",
    title: "Computer Lab Setup, Pakistan Army",
    category: "IT Infrastructure",
    client: "Pakistan Army",
    industry: "Defence",
    summary:
      "Complete development and setup of a computer lab for the Pakistan Army, from workstations and networking to installation and configuration.",
    challenge:
      "A fully working computer lab was needed for a defence-sector setup: ready-to-use workstations, reliable networking, and a clean, maintainable environment built to institutional expectations.",
    solution:
      "We developed the lab end to end, supplying and configuring workstations, setting up the network, installing and testing software, and handing over a stable, ready-to-use environment with documentation and support.",
    results: [
      "A complete, ready-to-use computer lab",
      "Workstations, networking and software configured and tested",
      "Disciplined delivery to defence-sector standards",
    ],
    stack: ["Workstations", "Networking", "Software Setup", "Installation"],
  },
  {
    slug: "school-computer-labs",
    title: "Computer Lab Development, Private Schools",
    category: "IT Infrastructure",
    client: "Private Schools",
    industry: "Education",
    summary:
      "Design and development of computer labs for private schools, giving students reliable, ready-to-use IT facilities.",
    challenge:
      "Private schools needed proper computer labs for their students: dependable workstations, sensible networking, and a setup that staff could rely on day to day without technical headaches.",
    solution:
      "We planned and built the labs around each school's space and budget, supplying and configuring workstations, setting up networking, installing the required software, and providing installation and ongoing support so teachers can focus on teaching.",
    results: [
      "Ready-to-use computer labs for students",
      "Reliable workstations and networking tailored to each school",
      "Installation and support handled for staff",
    ],
    stack: ["Workstations", "Networking", "Software Setup", "Support"],
    featured: true,
  },
  {
    slug: "wasa-technical-support",
    title: "WASA Technical Support",
    category: "IT Infrastructure",
    client: "WASA (Water & Sanitation Authority)",
    industry: "Public Utility",
    summary:
      "Hands-on IT and infrastructure technical support for WASA, a public-sector water and sanitation authority.",
    challenge:
      "As a public utility with time-sensitive operations, WASA needed dependable technical support to keep its IT and infrastructure running smoothly.",
    solution:
      "We provided practical technical support, troubleshooting and infrastructure assistance, working to the responsiveness and reliability a public utility requires.",
    results: [
      "Dependable, responsive technical support",
      "Hands-on troubleshooting and infrastructure assistance",
      "Proven experience working with a public-sector utility",
    ],
    stack: ["IT Support", "Networking", "Infrastructure"],
  },
  {
    slug: "enterprise-it-deployments",
    title: "Enterprise IT Deployments",
    category: "IT Infrastructure",
    client: "Enterprise Clients",
    industry: "Enterprise",
    summary:
      "Server installations, network infrastructure and workstation rollouts for enterprise clients, delivered with minimal disruption.",
    challenge:
      "Enterprise clients needed reliable IT stood up quickly and cleanly, without interrupting day-to-day operations.",
    solution:
      "We delivered server installations, network setup and workstation configuration, with documentation and support, planned to keep downtime to a minimum.",
    results: [
      "Reliable enterprise rollouts with minimal disruption",
      "Documented and supported deployments",
      "A single partner for servers, network and workstations",
    ],
    stack: ["Servers", "Networking", "Workstations", "Support"],
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
