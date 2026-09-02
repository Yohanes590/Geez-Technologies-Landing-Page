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
  "title": {
    "default": "Geez Security | Premier Penetration Testing & Code Security Ethiopia",
    "template": "%s | Geez Security"
  },
  "description": "Ethiopia's leading cybersecurity firm. We provide penetration testing, vulnerability assessments, DevSecOps integration, and automated GitHub code security scanning for Ethiopian enterprises and developers.",
  "keywords": [
    "cybersecurity company Ethiopia",
    "penetration testing Ethiopia",
    "vulnerability scanner",
    "GitHub security scanner",
    "code security audit",
    "automated security fixes",
    "DevSecOps tool",
    "Geez Security",
    "static application security testing",
    "SAST tool",
    "cyber security testing Addis Ababa",
    "Ethiopian security auditing"
  ],
  "authors": [
    {
      "name": "Geez Security Team"
    }
  ],
  "creator": "Geez Security",
  "publisher": "Geez Security",
  "metadataBase": "https://geezsecurity.com",
  "alternates": {
    "canonical": "/"
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  "openGraph": {
    "title": "Geez Security | Enterprise Cybersecurity & Automated Vulnerability Scanning",
    "description": "Empowering Ethiopian businesses with local cybersecurity expertise, penetration testing, and automated GitHub code auditing.",
    "url": "https://geezsecurity.com",
    "siteName": "Geez Security",
    "images": [
      {
        "url": "/banner.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Geez Security Enterprise Cybersecurity & SAST Platform"
      }
    ],
    "locale": "en_US",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Geez Security | Enterprise Cybersecurity & SAST Platform",
    "description": "Protect your infrastructure and codebase. Ethiopian cybersecurity testing, vulnerability management, and automated code fixes.",
    "images": [
      "/banner.jpg"
    ]
  }
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