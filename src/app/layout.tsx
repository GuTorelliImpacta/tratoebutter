import type { Metadata, Viewport } from "next";
import { DM_Sans, Zilla_Slab } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { SITE_URL } from "@/content/site";

const slab = Zilla_Slab({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-slab", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Trato & Butter | Hamburgueria em Tremembé, zona norte de SP", template: "%s | Trato & Butter" },
  description:
    "Hamburgueria em Tremembé, zona norte de São Paulo. Top 50 Hamburguerias 2026 (Guia do Hambúrguer). Peça no iFood ou venha ao salão.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Trato & Butter",
    images: [{ url: "/img/og.jpg", width: 1200, height: 630, alt: "Trato & Butter — hambúrguer de bairro, padrão de ranking" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#000000", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${slab.variable} ${sans.variable}`}>
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-butter focus:px-4 focus:py-3 focus:font-bold focus:text-ink">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
