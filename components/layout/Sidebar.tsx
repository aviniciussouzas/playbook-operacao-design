"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

type SidebarProps = {
  sectionType: "playbook" | "documentacao";
};

export function Sidebar({ sectionType }: SidebarProps) {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/playbook/overview") {
      return pathname === "/" || pathname === "/playbook/overview";
    }

    return pathname === href;
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] border-r border-stone-300 bg-[var(--panel-bg)] px-4 py-6">
      <div className="mb-8 px-3">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
          Operação Design
        </p>
        <h2 className="text-lg font-semibold mt-2 text-stone-900">
          Playbook App
        </h2>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500 px-3 mb-3">
            Playbook
          </p>

          <nav className="space-y-1">
            {navigation.playbook.map((item) => {
              const href =
                item.slug === "overview" ? "/" : `/playbook/${item.slug}`;
              const active = isActive(
                item.slug === "overview" ? "/playbook/overview" : href
              );

              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${
                    active
                      ? "bg-white text-stone-950 border border-stone-300"
                      : "text-stone-700 hover:bg-white"
                  }`}
                >
                  <span
                    className={`mr-2 ${
                      active ? "text-stone-500" : "text-stone-400"
                    }`}
                  >
                    {item.num}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500 px-3 mb-3">
            Documentação
          </p>

          <nav className="space-y-1">
            {navigation.documentacao.map((item) => {
              const href = `/documentacao/${item.slug}`;
              const active = pathname === href;

              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${
                    active
                      ? "bg-white text-stone-950 border border-stone-300"
                      : "text-stone-700 hover:bg-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}