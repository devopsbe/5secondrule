import React from "react";
import type { Metadata } from "next";
import { Luckiest_Guy, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ClientLayout from "./client-layout";

// Add Luckiest Guy for headings/titles
const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
  weight: "400",
});

// Add Poppins for body text
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "5SecondRule - Food Safety Timer",
    template: "%s | 5SecondRule",
  },
  description: "Keep food safe with 5SecondRule - The food safety timer",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⏱️</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport = {
  themeColor: '#FF6699', // bubblegum-pink color
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      poppins.variable,
      luckiestGuy.variable,
    )}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
