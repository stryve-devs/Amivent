import React from 'react';
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen bg-[#F0F7FA]">
            <Navbar />
            {/* Increased padding to give the floating nav space */}
            <main className="pt-28 px-4 sm:px-6 pb-12">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}