import Link from "next/link";
import { navigation } from "@/data/navigation";

type SidebarProps = {
  sectionType: "playbook" | "documentacao";
};

export function Sidebar({ sectionType }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] border-r border-neutral-800 bg-neutral-950 px-4 py-6">
      <div className="mb-8 px-3">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          Operação Design
        </p>
        <h2 className="text-lg font-semibold mt-2">Playbook App</h2>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 px-3 mb-3">
            Playbook
          </p>
          <nav className="space-y-1">
            {navigation.playbook.map((item) => (
              <Link
                key={item.slug}
                href={`/playbook/${item.slug}`}
                className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900"
              >
                <span className="text-neutral-500 mr-2">{item.num}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 px-3 mb-3">
            Documentação
          </p>
          <nav className="space-y-1">
            {navigation.documentacao.map((item) => (
              <Link
                key={item.slug}
                href={`/documentacao/${item.slug}`}
                className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}