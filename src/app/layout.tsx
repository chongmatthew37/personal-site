import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "matthew chong",
  description: "matthew chong's personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-notion-gray-50 text-gray-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
