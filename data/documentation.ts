import { DocumentationEntry } from "@/types/documentation";

export const documentationEntries: DocumentationEntry[] = [
  {
    slug: "pague-veloz",
    title: "PagueVeloz",
    client: "PagueVeloz by Serasa",
    summary:
      "Base de direção visual, operação criativa e repertório de execução da conta.",
    description:
      "Esta documentação organiza critérios visuais, aprendizados de performance, referências e combinados operacionais para reduzir retrabalho e garantir consistência nas entregas.",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    updatedAt: "2026-04-21",
    highlights: ["Direção visual", "Performance", "CRM", "KV", "Fluxo operacional"],
    goals: [
      "Dar segurança para quem entra na conta",
      "Reduzir dúvida recorrente de execução",
      "Centralizar critérios e referências",
      "Evitar perda de repertório entre ciclos",
    ],
    dos: [
      "Priorizar clareza visual com apelo contemporâneo",
      "Usar imagens com sensação de contexto real",
      "Buscar peças com leitura rápida e bom contraste",
    ],
    donts: [
      "Evitar excesso de elementos decorativos sem função",
      "Não usar imagens genéricas com cara de banco de imagem óbvio",
      "Evitar soluções visuais que afastem a marca do cotidiano real",
    ],
    operationalNotes: [
      "Sempre validar formato e desdobramento antes de avançar para acabamento",
      "Consultar referências de peças que performaram antes de propor ruptura visual",
      "Registrar exceções ou decisões fora do padrão para manter a base viva",
    ],
    sections: [
      {
        title: "Leitura da conta",
        body: [
          "A conta pede equilíbrio entre eficiência, legibilidade e contexto real.",
          "A documentação existe para traduzir nuances que não cabem sozinhas no brandbook.",
        ],
      },
      {
        title: "Aplicação prática",
        body: [
          "Antes de iniciar uma peça, vale responder: o que já funcionou aqui? o que soa deslocado? que grau de ousadia essa entrega permite?",
          "O objetivo não é engessar, mas reduzir erro evitável.",
        ],
      },
    ],
    visualReferences: [
      {
        id: "pv-1",
        title: "Peça com boa leitura de oferta",
        description: "Exemplo de hierarquia clara e composição limpa.",
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
        ratio: "portrait",
        tag: "Clareza",
        note: "Boa relação entre título, apoio e CTA.",
      },
      {
        id: "pv-2",
        title: "Imagem contextual",
        description: "Referência com sensação de uso real e não encenado.",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
        ratio: "landscape",
        tag: "Contexto real",
      },
      {
        id: "pv-3",
        title: "Composição modular",
        description: "Bom exemplo de estrutura que vira sistema.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        ratio: "square",
        tag: "Sistema",
      },
    ],
  },
  {
    slug: "icatu",
    title: "Icatu",
    client: "Icatu",
    summary:
      "Guia editorial da conta com referências, padrões de consistência e decisões operacionais.",
    description:
      "Espaço dedicado à organização de linguagem visual, repertório e aprendizados práticos da conta.",
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    updatedAt: "2026-04-21",
    highlights: ["Direção visual", "Social", "Tom de marca", "Restrições"],
    sections: [
      {
        title: "Visão geral",
        body: [
          "Documentação em evolução. Esta página já está pronta para receber critérios mais específicos da conta.",
        ],
      },
    ],
    visualReferences: [],
  },
];

export function getDocumentationBySlug(slug: string) {
  return documentationEntries.find((entry) => entry.slug === slug);
}