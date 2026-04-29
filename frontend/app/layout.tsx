import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
    title: "Amivent | University Portal",
    description: "Scalable event management for students",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            {/* Correct placement for the Material Symbols stylesheet */}
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
        </head>
        <body className={`${manrope.variable} antialiased min-h-screen bg-white text-[#171A1A] font-manrope`}>
        {children}
        </body>
        </html>
    );
}