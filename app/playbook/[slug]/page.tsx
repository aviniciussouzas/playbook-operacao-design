import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { navigation } from "@/data/navigation";
import { playbookSections } from "@/lib/section-map";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PlaybookSlugPage({ params }: Props) {
  const { slug } = await params;

  const SectionComponent =
    playbookSections[slug as keyof typeof playbookSections];

  const navItem = navigation.playbook.find((item) => item.slug === slug);

  if (!SectionComponent || !navItem) {
    return notFound();
  }

  return (
    <AppShell sectionType="playbook" showSidebar={true}>
      <SectionComponent />
    </AppShell>
  );
}