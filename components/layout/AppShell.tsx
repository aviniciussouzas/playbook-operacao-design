import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

type AppShellProps = {
  children: ReactNode;
  sectionType?: "playbook" | "documentacao";
  showSidebar?: boolean;
};

export function AppShell({
  children,
  sectionType = "playbook",
  showSidebar = true,
}: AppShellProps) {
  return (
    <div className="min-h-screen text-stone-900 flex bg-[var(--app-bg)]">
      {showSidebar && <Sidebar sectionType={sectionType} />}

      <main
        className={`flex-1 min-h-screen bg-[var(--app-bg)] ${
          showSidebar ? "ml-[280px]" : ""
        }`}
      >
        <div className="max-w-5xl px-10 py-10">{children}</div>
      </main>
    </div>
  );
}