import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { navigation } from "@/data/navigation";

export default function PlaybookPage() {
  return (
    <AppShell sectionType="playbook" showSidebar={true}>
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.16em] text-stone-500">
            Playbook
          </p>
          <h1 className="text-4xl font-semibold">Operação de Design</h1>
          <p className="text-stone-600 max-w-2xl">
            Estrutura da operação, rituais, briefing, guardrails e critérios.
          </p>
        </div>

        <div className="grid gap-3">
          {navigation.playbook.map((item) => (
            <Link
              key={item.slug}
              href={item.slug === "overview" ? "/" : `/playbook/${item.slug}`}
              className="rounded-xl border border-stone-300 bg-white p-4 hover:bg-stone-50 transition"
            >
              <span className="text-stone-400 mr-2">{item.num}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}