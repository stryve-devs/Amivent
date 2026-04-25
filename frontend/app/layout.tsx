import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amivent | University Portal",
  description: "Scalable event management for students",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="h-full">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-white text-slate-900`}
      >
      {children}
      </body>
      </html>
  );
}