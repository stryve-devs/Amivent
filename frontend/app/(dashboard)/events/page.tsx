import React from 'react';

export default function EventsPage() {
    return (
        <div className="flex flex-col items-center font-manrope">
            {/* --- HERO SECTION --- */}
            <section className="relative w-full py-20 lg:py-32 overflow-hidden flex flex-col items-center text-center">

                {/* Background Decorative Element (Soft Teal Glow instead of Blue) */}
                <div className="absolute top-0 -z-10 h-full w-full bg-white">
                    <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#4FDBC8]/10 opacity-50 blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[30%] -translate-y-[20%] rounded-full bg-[#F1F4F4] opacity-50 blur-[80px]"></div>
                </div>

                {/* 1. Small "New" Pill (Updated to Teal/Dark) */}
                <div className="mb-8 flex animate-fade-in justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-[#4FDBC8]/30 bg-[#4FDBC8]/5 px-3 py-1 pr-4 shadow-sm backdrop-blur-md">
                        <span className="rounded-full bg-[#4FDBC8] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#00675B]">
                          New
                        </span>
                        <span className="text-xs font-bold text-[#171A1A]">
                          Check out the Career Fair 2026 schedule →
                        </span>
                    </div>
                </div>

                {/* 2. Main Heading (Using Brand Dark #171A1A) */}
                <h1 className="max-w-4xl px-4 text-5xl font-black tracking-tight text-[#171A1A] sm:text-7xl lg:leading-[1.1]">
                    The heartbeat of <br />
                    <span className="text-[#4FDBC8]">
                        Campus Life.
                    </span>
                </h1>

                {/* 3. Subtext (Using Brand Neutral #727876) */}
                <p className="mt-8 max-w-2xl px-6 text-lg leading-8 text-[#727876] font-medium">
                    Discover clubs, track your schedule, and never miss a moment.
                    Amivent is the ultimate portal for everything happening across your university.
                </p>

                {/* 4. Hero Actions (Using Dark and Outlined styles) */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    {/* Primary Button matches the 'Inverted' style from your screenshot */}
                    <button className="rounded-full bg-[#171A1A] px-8 py-4 text-base font-bold text-white shadow-lg shadow-black/10 transition-all hover:scale-105 active:scale-95">
                        Browse All Events
                    </button>
                    {/* Secondary Button matches 'Outlined' style */}
                    <button className="rounded-full border-2 border-[#171A1A]/10 bg-white px-8 py-4 text-base font-bold text-[#171A1A] transition-all hover:bg-[#F1F4F4] active:scale-95">
                        Register Organization
                    </button>
                </div>

                {/* 5. Social Proof / Stats (Academic Curator Neutral Style) */}
                <div className="mt-16 flex items-center gap-8 border-t border-[#F1F4F4] pt-8 text-[#727876]">
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-[#171A1A]">1.2k+</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Active Students</span>
                    </div>
                    <div className="h-10 w-px bg-[#F1F4F4]"></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-[#171A1A]">45+</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Clubs</span>
                    </div>
                    <div className="h-10 w-px bg-[#F1F4F4]"></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-[#171A1A]">12</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Daily Events</span>
                    </div>
                </div>
            </section>

            {/* --- GRID SECTION --- */}
            <div className="w-full max-w-7xl px-6 pb-24">
                {/* Event Grid will go here */}
            </div>
        </div>
    );
}