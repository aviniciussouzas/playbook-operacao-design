import Link from "next/link";

export default function DocumentationNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f4f1ea] px-6">
      <div className="max-w-xl rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
          Documentação
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
          Esta documentação não foi encontrada
        </h1>

        <p className="mt-4 text-sm leading-6 text-stone-700">
          O slug pode não existir ainda, ou essa base ainda não foi publicada no sistema.
        </p>

        <Link
          href="/documentacao"
          className="mt-6 inline-flex rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-800 transition hover:bg-stone-50"
        >
          Voltar para o painel de documentações
        </Link>
      </div>
    </main>
  );
}