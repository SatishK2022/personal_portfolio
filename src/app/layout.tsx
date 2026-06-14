import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satish Kumar — Full Stack Developer",
  description:
    "Full Stack Developer based in Delhi, India. Building scalable web applications, internal tools, and Web3 products using modern JavaScript technologies.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web3",
    "Node.js",
    "Delhi",
    "India",
    "Satish Kumar",
  ],
  authors: [{ name: "Satish Kumar" }],
  creator: "Satish Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Satish Kumar — Full Stack Developer",
    description:
      "Full Stack Developer based in Delhi, India. Building scalable web applications, internal tools, and Web3 products.",
    siteName: "Satish Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satish Kumar — Full Stack Developer",
    description:
      "Full Stack Developer based in Delhi, India. Building scalable web applications, internal tools, and Web3 products.",
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
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
