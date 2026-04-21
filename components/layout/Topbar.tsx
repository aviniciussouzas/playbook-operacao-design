type TopbarProps = {
  title: string;
};

export function Topbar({ title }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur px-10 h-14 flex items-center">
      <span className="text-sm text-neutral-400">{title}</span>
    </header>
  );
}