export type Metric = {
  value: number;
  suffix?: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: 20, suffix: "+", label: "sistemas de automatización implementados" },
  { value: 11, label: "cuentas de Meta Ads gestionadas" },
  { value: 3, label: "países con clientes activos" },
  { value: 2, label: "socios fundadores, un solo estándar" },
];

export type CaseFeature = { k: string; v: string };

export type CaseStudy = {
  id: "voz" | "whatsapp" | "infra";
  label: string;
  title: string;
  description: string;
  features: CaseFeature[];
  visual: "voice" | "chat" | "flow";
  reverse?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "voz",
    label: "Agente de voz",
    title: "Un agente que contesta el teléfono como tu mejor vendedor.",
    description:
      "Construido sobre Vapi, integrado a Google Calendar y GoHighLevel: recibe la llamada, califica al prospecto, agenda la cita — en tiempo real, sin guiones robóticos.",
    features: [
      { k: "Motor de voz", v: "Vapi" },
      { k: "Agenda", v: "Google Calendar" },
      { k: "CRM destino", v: "GoHighLevel" },
    ],
    visual: "voice",
  },
  {
    id: "whatsapp",
    label: "Agentes de WhatsApp",
    title: "Conversaciones que venden mientras duermes.",
    description:
      "Agentes propios como Katy, María Angélica y Alondra atienden consultas, resuelven dudas y mueven al prospecto por el pipeline — con la voz y el catálogo de cada cliente, no un guion genérico.",
    features: [
      { k: "Orquestación", v: "n8n" },
      { k: "Canal", v: "API Cloud / WhatsApp" },
      { k: "Verticales", v: "Estética, salud, ventas" },
    ],
    visual: "chat",
    reverse: true,
  },
  {
    id: "infra",
    label: "Infraestructura para inmobiliarias",
    title: "El sistema nervioso detrás de cada lead.",
    description:
      "Basado en GoHighLevel, el CRM #1 para equipos comerciales: pipelines, matching de propiedades por WhatsApp (PropertyMatch) y automatizaciones n8n que conectan cada punto de contacto — para que ningún lead se pierda entre el anuncio y la firma.",
    features: [
      { k: "CRM", v: "GoHighLevel" },
      { k: "Automatización", v: "n8n" },
      { k: "Matching", v: "PropertyMatch (WhatsApp + IA)" },
    ],
    visual: "flow",
  },
];

/** Marcas del stack para el carrusel infinito. `icon` apunta a brandPaths. */
export type BrandLogo = { name: string; icon?: string };

export const stackLogos: BrandLogo[] = [
  { name: "GoHighLevel" },
  { name: "n8n", icon: "n8n" },
  { name: "Make", icon: "Make" },
  { name: "Twilio" },
  { name: "Vapi" },
  { name: "OpenAI" },
  { name: "WhatsApp", icon: "WhatsApp" },
  { name: "Slack" },
  { name: "Notion", icon: "Notion" },
  { name: "Vercel", icon: "Vercel" },
  { name: "Render", icon: "Render" },
  { name: "VPS propio" },
  { name: "Google", icon: "Google" },
  { name: "Supabase", icon: "Supabase" },
  { name: "Odoo", icon: "Odoo" },
  { name: "Meta Ads", icon: "Meta Ads" },
  { name: "Next.js" },
];

export const networkNodes = [
  { label: "Voz IA", left: 14, top: 16 },
  { label: "WhatsApp", left: 86, top: 16 },
  { label: "GoHighLevel", left: 8, top: 52 },
  { label: "n8n", left: 92, top: 52 },
  { label: "Meta Ads", left: 22, top: 84 },
  { label: "Google Calendar", left: 78, top: 84 },
];
