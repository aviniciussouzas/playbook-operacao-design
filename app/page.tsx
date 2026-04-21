import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            Operação Design
          </p>
          <h1 className="text-4xl font-semibold mt-2">
            Playbook + Documentação de Design
          </h1>
          <p className="text-neutral-400 mt-4 max-w-2xl">
            Sistema consultável para orientar operação, leitura de briefing,
            critérios e documentação viva dos clientes.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/playbook"
            className="rounded-xl border border-neutral-800 px-5 py-3 hover:bg-neutral-900"
          >
            Entrar no Playbook
          </Link>

          <Link
            href="/documentacao"
            className="rounded-xl border border-neutral-800 px-5 py-3 hover:bg-neutral-900"
          >
            Ver Documentação
          </Link>
        </div>
      </div>
    </main>
  );
}