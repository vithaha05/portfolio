import type { Metadata } from "next";
import { Fira_Code, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-green-one-32.vercel.app"),
  title: "Vithahaselvi Haribalajhee — ML & AI Developer",
  description:
    "MSc TCS student at PSG College of Technology. Building ML pipelines, RAG systems, and data engineering solutions. Seeking internship May-Dec 2026.",
  keywords: [
    "Vithahaselvi Haribalajhee",
    "ML Developer",
    "AI Developer",
    "Data Analyst",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Vithahaselvi Haribalajhee", url: "https://github.com/vithaha05" }],
  creator: "Vithahaselvi Haribalajhee",
  openGraph: {
    title: "Vithahaselvi Haribalajhee — ML & AI Developer",
    description:
      "MSc TCS student building ML pipelines, RAG systems, and data engineering solutions.",
    url: "https://portfolio-green-one-32.vercel.app",
    siteName: "Vithahaselvi Haribalajhee Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vithahaselvi Haribalajhee portfolio preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vithahaselvi Haribalajhee — ML & AI Developer",
    description:
      "MSc TCS student at PSG College of Technology. Building ML pipelines, RAG systems, and data engineering solutions. Seeking internship May-Dec 2026.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${firaCode.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
