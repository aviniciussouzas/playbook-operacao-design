type TopbarProps = {
  title: string;
};

export function Topbar({ title }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-300 bg-[var(--app-bg)]/90 backdrop-blur px-10 h-14 flex items-center">
      <span className="text-sm text-stone-600">{title}</span>
    </header>
  );
}