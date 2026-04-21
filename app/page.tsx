import { AppShell } from "@/components/layout/AppShell";
import { Overview } from "@/components/sections/Overview";

export default function HomePage() {
  return (
    <AppShell sectionType="playbook" showSidebar={true}>
      <Overview />
    </AppShell>
  );
}