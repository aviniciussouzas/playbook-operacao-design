import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { documentationCards } from "@/data/documentacao";

function IntroBlock() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
          Documentação
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Documentação de Design
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-stone-600">
          Base viva de direção visual, operação criativa e referências por
          cliente.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">
            O que é este espaço?
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-7 text-stone-700">
            <p>
              Este espaço foi criado para reunir, em um único lugar, as
              principais informações de design, direção visual e operação
              criativa de cada cliente.
            </p>

            <p>
              A ideia aqui é ir além do brandbook. Nem sempre o brandbook,
              sozinho, dá conta de responder perguntas do dia a dia como:
            </p>

            <ul className="space-y-2 pl-5 text-stone-700">
              <li>Esse cliente permite algo mais ousado?</li>
              <li>Que tipo de imagem funciona melhor aqui?</li>
              <li>Tem alguma restrição visual importante?</li>
              <li>Como garantir que a peça fique boa antes de subir?</li>
              <li>Onde estão as referências e pastas corretas?</li>
            </ul>

            <p>
              Por isso, esta documentação existe para funcionar como um guia
              prático de trabalho, acessível para toda a agência, especialmente
              para designers, motion, conteúdo, social, coordenação e gestão.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">
            Por que isso é importante?
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-7 text-stone-700">
            <p>
              Essa é uma iniciativa de reunir, no mesmo lugar, não apenas o
              brandbook do cliente, mas toda a documentação viva de design
              necessária para a operação acontecer com mais clareza, consistência
              e qualidade.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "reduzir retrabalho",
                "facilitar a entrada de novos designers nas contas",
                "dar mais segurança na execução",
                "manter consistência visual",
                "organizar referências e aprendizados",
                "tornar o processo menos dependente de memória individual",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <p>
              Em outras palavras: se alguém novo entrar na conta amanhã, essa
              pessoa precisa conseguir entender o básico visual e operacional por
              aqui.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PanelHeader() {
  return (
    <section className="space-y-4 pt-4">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
          Painel
        </p>

        <h2 className="text-2xl font-semibold text-stone-900">
          Painel das Documentações
        </h2>
      </div>

      <div className="max-w-3xl space-y-3 text-[15px] leading-7 text-stone-700">
        <p>
          A ideia é facilitar a execução, reduzir retrabalho, ajudar na entrada
          de novos designers nas contas e dar mais consistência para as
          entregas.
        </p>

        <p>Esse material deve funcionar como um apoio prático no dia a dia.</p>

        <p>
          Está com dúvida sobre direção? Vá no território criativo.
          <br />
          Quer revisar se a peça está boa antes de subir? Vá nos critérios de
          qualidade.
        </p>
      </div>
    </section>
  );
}

function DocumentationCard({
  title,
  subtitle,
  status,
  description,
  highlights,
  cover,
  slug,
}: (typeof documentationCards)[number]) {
  return (
    <Link
      href={`/documentacao/${slug}`}
      className="group overflow-hidden rounded-2xl border border-stone-300 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative h-32 overflow-hidden border-b border-stone-200 bg-gradient-to-br from-stone-200 to-stone-100">
        {cover ? (
          // Pode trocar para next/image depois.
          <img
            src={cover}
            alt={title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        ) : null}

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-700 shadow-sm">
            {status || "Ativa"}
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-stone-900">{title}</h3>
          <p className="text-sm text-stone-500">{subtitle}</p>
        </div>

        <p className="text-sm leading-6 text-stone-700">{description}</p>

        <div className="flex flex-wrap gap-2">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="pt-1 text-sm font-medium text-stone-900">
          Abrir documentação →
        </div>
      </div>
    </Link>
  );
}

export default function DocumentacaoPage() {
  return (
    <AppShell sectionType="documentacao" showSidebar={true}>
      <div className="space-y-14">
        <IntroBlock />
        <PanelHeader />

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {documentationCards.map((card) => (
            <DocumentationCard key={card.slug} {...card} />
          ))}
        </section>
      </div>
    </AppShell>
  );
}