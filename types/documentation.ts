export type DocumentationHighlight =
  | "Direção visual"
  | "Tom de marca"
  | "Motion"
  | "Social"
  | "Performance"
  | "CRM"
  | "KV"
  | "Captação"
  | "Restrições"
  | "Fluxo operacional";

export type VisualReferenceItem = {
  id: string;
  title: string;
  description?: string;
  image: string;
  ratio?: "square" | "portrait" | "landscape";
  tag?: string;
  note?: string;
};

export type DocumentationSectionBlock = {
  title: string;
  body: string[];
};

export type DocumentationEntry = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  description: string;
  cover: string;
  updatedAt: string;
  highlights: DocumentationHighlight[];
  goals?: string[];
  dos?: string[];
  donts?: string[];
  operationalNotes?: string[];
  sections?: DocumentationSectionBlock[];
  visualReferences?: VisualReferenceItem[];
};