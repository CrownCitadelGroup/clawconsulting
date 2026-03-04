export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.openclawinstallations.com";

export const siteConfig = {
  name: "Openclaw & AI Consulting",
  shortName: "Openclaw",
  title: "Openclaw & AI Consulting in Fuquay-Varina, NC | Private self-hosted AI setup",
  description:
    "OpenClaw installation Fuquay-Varina with local and remote support across the Raleigh Triangle. Private, self-hosted AI installation NC with chat app integration, persistent memory, and practical automation.",
  ownerName: "Jc",
  location: "Fuquay-Varina, NC",
  phone: "",
  email: "consulting@humanityfirst.ai",
  localInstallPrice: "$250",
  localInstallIncludes: ["Up to 1 hour on-site installation", "1 hour of free post-install tech support"],
  addOnSupportRate: "Contact for pricing",
  remoteSetupStartingPrice: "$250",
  serviceAreas: ["Fuquay-Varina", "Holly Springs", "Apex", "Garner", "Raleigh", "Cary", "Angier", "Willow Spring"],
  openClawDefinition:
    "OpenClaw is a private, self-hosted AI system that works where you already work. It runs on your own hardware or VPS, connects to your chat apps, remembers context, and can take real actions with guardrails you control.",
  businessHighlights: [
    "Workflow automation for repetitive operational tasks",
    "Role-based team deployment with shared skills",
    "Custom OpenClaw skills and integration planning",
    "Ongoing support plans for continuous refinement"
  ],
  legalDisclaimers: {
    affiliation:
      "Openclaw & AI Consulting is an independent service provider and is not affiliated with the OpenClaw project unless explicitly stated.",
    credentials:
      "Clients are responsible for maintaining valid licenses, accounts, credentials, and access permissions required for their environment.",
    dataHandling:
      "Data collection is kept minimal and limited to scheduling, communication, and service delivery."
  }
} as const;

export const navigation = [
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About" },
  { href: "/legal", label: "Legal" }
] as const;
