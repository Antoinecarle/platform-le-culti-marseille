import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "le-culti-marseille", description: "le-culti-marseille" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
