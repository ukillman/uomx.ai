import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Umob.AI™ | Agent OS for Bankruptcy, Restructuring & Liquidation",
  description:
    "Umob.AI Agent OS is cognitive infrastructure for bankruptcy, restructuring, and liquidation workflows.",
  metadataBase: new URL("https://umob.ai"),
  openGraph: {
    title: "Umob.AI™ Agent OS",
    description:
      "AI-native operating system for highly complex restructuring and liquidation cases.",
    url: "https://umob.ai",
    siteName: "Umob.AI™",
    locale: "zh_CN",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="bg-[#050505] font-sans text-white antialiased">{children}</body>
    </html>
  );
}
