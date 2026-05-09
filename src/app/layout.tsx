import type { Metadata } from "next";
import { Fira_Code, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://vithahaselvi.dev"),
  title: "Vithahaselvi Haribalajhee | ML & AI Developer",
  description:
    "Personal portfolio of Vithahaselvi Haribalajhee, an ML & AI Developer and M.Sc. Theoretical Computer Science student in Coimbatore, India.",
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
    title: "Vithahaselvi Haribalajhee | ML & AI Developer",
    description:
      "Projects in financial analytics, fraud detection, RAG systems, predictive maintenance, mental health AI, and data engineering.",
    url: "https://vithahaselvi.dev",
    siteName: "Vithahaselvi Haribalajhee Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vithahaselvi Haribalajhee | ML & AI Developer",
    description:
      "ML & AI Developer seeking May-Dec 2026 internship opportunities in data analytics and AI systems.",
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
      <body className={`${spaceGrotesk.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
