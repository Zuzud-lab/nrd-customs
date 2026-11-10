import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NRD Customs — мастерская техники",
    template: "%s — NRD Customs",
  },
  description:
    "Ремонт, обслуживание и подготовка водной, снежной и внедорожной техники.",
  icons: {
    icon: "/nrd-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
