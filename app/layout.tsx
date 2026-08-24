import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Primary Sans font: Sharp, modern aesthetic perfect for cybersecurity branding
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

// Monospace font: Highly legible for code blocks, terminal outputs, and metrics
const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Geez Security | AI-Powered GitHub Vulnerability Scanner",
    template: "%s | Geez Security",
  },
  description:
    "Automated GitHub repository security scanner. Identify code vulnerabilities, get actionable automated fixes, and secure your developer codebase instantly.",
  keywords: [
    "GitHub security scanner",
    "vulnerability scanner",
    "code security audit",
    "automated security fixes",
    "devsecops tool",
    "Geez Security",
    "static application security testing",
    "SAST tool",
  ],
  authors: [{ name: "Geez Security Team" }],
  creator: "Geez Security",
  publisher: "Geez Security",
  metadataBase: new URL("https://geezsecurity.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Geez Security | AI-Powered GitHub Vulnerability Scanner",
    description:
      "Automated GitHub repository security scanner. Identify code vulnerabilities and receive instant, actionable fixes.",
    url: "https://geezsecurity.com",
    siteName: "Geez Security",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Geez Security Platform Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geez Security | AI-Powered GitHub Vulnerability Scanner",
    description:
      "Scan GitHub repos for vulnerabilities and receive automated code fixes instantly.",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body 
      cz-shortcut-listen="true"
      className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}