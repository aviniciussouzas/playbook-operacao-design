export type DocumentationCard = {
  slug: string;
  title: string;
  subtitle: string;
  status?: string;
  description: string;
  highlights: string[];
  cover?: string;
};

export const documentationCards: DocumentationCard[] = [
  {
    slug: "holasim",
    title: "HolaSim",
    subtitle: "Documentação ativa",
    status: "Canvas",
    description:
      "Contexto do cliente, assets, referências e critérios para apoiar peças de social e performance.",
    highlights: [
      "Território criativo",
      "Assets e pastas",
      "Critérios de qualidade",
    ],
    cover: "/docs/holasim.jpg",
  },
  {
    slug: "icatu",
    title: "Icatu",
    subtitle: "Documentação ativa",
    status: "Canvas",
    description:
      "Base de direção visual, linguagem e leitura de marca para peças institucionais e campanhas.",
    highlights: [
      "Contexto do cliente",
      "Direção visual",
      "Restrições e consistência",
    ],
    cover: "/docs/icatu.jpg",
  },
  {
    slug: "gs1",
    title: "GS1",
    subtitle: "Documentação ativa",
    status: "Canvas",
    description:
      "Guia com referências, princípios visuais e orientações práticas para manter clareza e padronização.",
    highlights: [
      "Contexto do cliente",
      "Público prioritário",
      "Critérios de qualidade",
    ],
    cover: "/docs/gs1.jpg",
  },
  {
    slug: "pilot",
    title: "Pilot",
    subtitle: "Documentação ativa",
    status: "Canvas",
    description:
      "Estrutura de assets, links e referências para dar mais velocidade à execução e reduzir retrabalho.",
    highlights: [
      "Assets",
      "Fluxos",
      "Pastas corretas",
    ],
    cover: "/docs/pilot.jpg",
  },
  {
    slug: "cnp",
    title: "CNP",
    subtitle: "Documentação ativa",
    status: "Canvas",
    description:
      "Base de entendimento do cliente e parâmetros visuais para garantir segurança e consistência na operação.",
    highlights: [
      "Contexto do cliente",
      "Restrições",
      "Boas práticas",
    ],
    cover: "/docs/cnp.jpg",
  },
];