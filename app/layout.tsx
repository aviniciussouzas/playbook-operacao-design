import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playbook Operação Design",
  description: "Sistema consultável da operação e documentação de design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}