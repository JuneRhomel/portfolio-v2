import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const bodyFont = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const displayFont = Manrope({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "June Rhomel Mandigma — Full-stack Web Developer",
  description:
    "Portfolio of June Rhomel Mandigma, a full-stack developer building responsive applications, REST APIs, and scalable web products.",
  keywords: [
    "June Rhomel Mandigma",
    "Full-stack developer",
    "Front End Developer",
    "React developer",
    "TypeScript",
  ],
  authors: [{ name: "June Rhomel Mandigma" }],
  openGraph: {
    title: "June Rhomel Mandigma — Full-stack Web Developer",
    description:
      "Responsive applications and scalable digital products, engineered from interface to backend.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
