import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yaduvanshi Transport | Safe • Fast • Reliable",
  description:
    "Yaduvanshi Transport — reliable transportation and logistics solutions from Neemrana to Delhi-NCR and beyond.",
  keywords: [
    "Yaduvanshi Transport",
    "transport service Neemrana",
    "transport service Delhi NCR",
    "Neemrana Delhi transport",
    "goods transport",
    "logistics service",
    "full truck load",
    "part load service",
  ],
  openGraph: {
    title: "Yaduvanshi Transport | Safe • Fast • Reliable",
    description:
      "Your trusted transport partner for safe, fast and reliable cargo movement.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
