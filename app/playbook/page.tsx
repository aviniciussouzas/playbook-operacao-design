import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { navigation } from "@/data/navigation";

export default function PlaybookPage() {
  return (
    <AppShell sectionTitle="Playbook" sectionType="playbook">
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold">Playbook</h1>
        <p className="text-neutral-400">
          Estrutura da operação, rituais, briefing, guardrails e critérios.
        </p>

        <div className="grid gap-3">
          {navigation.playbook.map((item) => (
            <Link
              key={item.slug}
              href={`/playbook/${item.slug}`}
              className="rounded-xl border border-neutral-800 p-4 hover:bg-neutral-900"
            >
              <span className="text-neutral-500 mr-2">{item.num}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}