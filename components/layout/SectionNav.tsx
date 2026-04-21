import Link from "next/link";
import { navigation } from "@/data/navigation";

type SectionNavProps = {
  currentSlug: string;
};

export function SectionNav({ currentSlug }: SectionNavProps) {
  const items = navigation.playbook;
  const currentIndex = items.findIndex((item) => item.slug === currentSlug);

  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem =
    currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  return (
    <div className="mt-12 p-4 border border-blue-500 bg-white">
      <p className="text-blue-700">slug atual: {currentSlug}</p>
      <p className="text-blue-700">índice: {currentIndex}</p>

      <div className="mt-4 flex justify-between gap-4">
        <div>
          {prevItem ? (
            <Link
              href={`/playbook/${prevItem.slug}`}
              className="block rounded-lg border border-stone-300 px-4 py-3 bg-stone-50"
            >
              ← {prevItem.num} {prevItem.label}
            </Link>
          ) : (
            <span className="text-stone-500">sem anterior</span>
          )}
        </div>

        <div>
          {nextItem ? (
            <Link
              href={`/playbook/${nextItem.slug}`}
              className="block rounded-lg border border-stone-300 px-4 py-3 bg-stone-50"
            >
              {nextItem.num} {nextItem.label} →
            </Link>
          ) : (
            <span className="text-stone-500">sem próximo</span>
          )}
        </div>
      </div>
    </div>
  );
}