import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oussama Negzaoui | Software & Mobile Engineer | Flutter & Full-Stack | AI Integration",
  description:
    "Engineering portfolio of Oussama Negzaoui (ESPRIT / ISAMM). Specializing in Flutter (BLoC), Android Native (Kotlin Compose), NestJS, FastAPI, Multimodal RAG, and Web3 DLT.",
  keywords: [
    "Oussama Negzaoui",
    "Flutter Developer",
    "Mobile Engineer",
    "Android Kotlin",
    "NestJS",
    "FastAPI",
    "Multimodal RAG",
    "ESPRIT",
    "ISAMM",
    "Tunisia Software Engineer",
  ],
  authors: [{ name: "Oussama Negzaoui", url: "https://github.com/negzaoui16" }],
  openGraph: {
    title: "Oussama Negzaoui | Software & Mobile Engineer",
    description:
      "Explore production mobile apps, AI pipelines, and distributed backends engineered by Oussama Negzaoui.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100">{children}</body>
    </html>
  );
}
