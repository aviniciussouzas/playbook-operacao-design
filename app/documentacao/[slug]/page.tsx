import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  documentationEntries,
  getDocumentationBySlug,
} from "@/data/documentation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return documentationEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getDocumentationBySlug(slug);

  if (!entry) {
    return {
      title: "Documentação não encontrada",
    };
  }

  return {
    title: `${entry.title} | Documentação`,
    description: entry.summary,
  };
}

function InfoList({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold tracking-tight text-stone-900">
        {title}
      </h2>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-stone-200 pl-4 text-sm leading-6 text-stone-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function TextSections({
  sections,
}: {
  sections?: {
    title: string;
    body: string[];
  }[];
}) {
  if (!sections || sections.length === 0) return null;

  return (
    <section className="space-y-6">
      {sections.map((section) => (
        <article
          key={section.title}
          className="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-sm"
        >
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-stone-900">
            {section.title}
          </h2>

          <div className="space-y-4">
            {section.body.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-[15px] leading-7 text-stone-700"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function VisualReferenceGallery({
  items,
}: {
  items?: {
    id: string;
    title: string;
    description?: string;
    image: string;
    ratio?: "square" | "portrait" | "landscape";
    tag?: string;
    note?: string;
  }[];
}) {
  if (!items || items.length === 0) return null;

  const ratioClasses = {
    square: "aspect-square",
    portrait: "aspect-[4/5]",
    landscape: "aspect-[4/3]",
  };

  return (
    <section className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-sm">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
            Curadoria visual
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-stone-900">
            Referências que ajudam a calibrar a conta
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-stone-600">
          Não é uma galeria genérica. É um repertório de leitura visual para apoiar
          decisão, não só inspiração.
        </p>
      </div>

      <div className="columns-1 gap-4 md:columns-2 xl:columns-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="mb-4 break-inside-avoid overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50"
          >
            <div className={`relative w-full ${ratioClasses[item.ratio ?? "square"]}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>

            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-medium text-stone-900">{item.title}</h3>
                {item.tag ? (
                  <span className="rounded-full border border-stone-300 px-2.5 py-1 text-[11px] text-stone-600">
                    {item.tag}
                  </span>
                ) : null}
              </div>

              {item.description ? (
                <p className="text-sm leading-6 text-stone-700">{item.description}</p>
              ) : null}

              {item.note ? (
                <p className="text-xs leading-5 text-stone-500">{item.note}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default async function DocumentationSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getDocumentationBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-stone-900">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/70 shadow-sm">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-between p-8 lg:p-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                  Documentação de conta
                </p>

                <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
                  {entry.title}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-stone-700">
                  {entry.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {entry.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-stone-300 bg-stone-50 px-3 py-1.5 text-xs text-stone-700"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-8 text-sm text-stone-500">
                Última atualização: {entry.updatedAt}
              </div>
            </div>

            <div className="relative min-h-[280px] border-t border-stone-200 lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src={entry.cover}
                alt={`Capa da documentação de ${entry.title}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <TextSections sections={entry.sections} />
            <VisualReferenceGallery items={entry.visualReferences} />
          </div>

          <aside className="space-y-6">
            <InfoList title="Objetivos desta base" items={entry.goals} />
            <InfoList title="O que fazer" items={entry.dos} />
            <InfoList title="O que evitar" items={entry.donts} />
            <InfoList title="Notas operacionais" items={entry.operationalNotes} />
          </aside>
        </div>
      </div>
    </main>
  );
}