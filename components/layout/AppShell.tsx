import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

type AppShellProps = {
  children: ReactNode;
  sectionTitle: string;
  sectionType: "playbook" | "documentacao";
};

export function AppShell({
  children,
  sectionTitle,
  sectionType,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex">
      <Sidebar sectionType={sectionType} />
      <main className="flex-1 ml-[280px] min-h-screen bg-neutral-950">
        <Topbar title={sectionTitle} />
        <div className="max-w-5xl px-10 py-10">{children}</div>
      </main>
    </div>
  );
}