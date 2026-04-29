// app/(dashboard)/layout.tsx
import React from 'react';
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        // Changed bg to your brand surface-light and ensured overflow-x is hidden
// Inside (dashboard)/layout.tsx
        <div className="relative min-h-screen bg-[#F1F4F4]">
            <Navbar />
            <main className="pt-32 px-6 pb-20">
                {children}
            </main>
        </div>
    );
}