import type { Metadata } from "next";
import { Lato, Saira_Condensed } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

const saira_condensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-saira-condensed",
});

export const metadata: Metadata = {
  title: "Thinking Volleyball",
  description: "Thinking Volleyball is a community of volleyball enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${saira_condensed.variable} ${lato.className} bg-zinc-100`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="font-display font-bold italic text-xl">
            THINKING VOLLEYBALL
          </h1>
        </nav>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
