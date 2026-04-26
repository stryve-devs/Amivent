import React from 'react';

export default function EventsPage() {
    return (
        <div className="flex flex-col items-center">
            {/* --- HERO SECTION --- */}
            <section className="relative w-full py-20 lg:py-32 overflow-hidden flex flex-col items-center text-center">

                {/* Background Decorative Element (Soft Glow) */}
                <div className="absolute top-0 -z-10 h-full w-full bg-white">
                    <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-blue-100 opacity-50 blur-[80px]"></div>
                    <div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[30%] -translate-y-[20%] rounded-full bg-blue-50 opacity-50 blur-[80px]"></div>
                </div>

                {/* 1. Small "New" Pill (Base44 Style) */}
                <div className="mb-8 flex animate-fade-in justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-3 py-1 pr-4 shadow-sm backdrop-blur-md">
            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              New
            </span>
                        <span className="text-xs font-medium text-blue-900">
              Check out the Career Fair 2026 schedule →
            </span>
                    </div>
                </div>

                {/* 2. Main Heading */}
                <h1 className="max-w-4xl px-4 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl lg:leading-[1.1]">
                    The heartbeat of <br />
                    <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Campus Life.
          </span>
                </h1>

                {/* 3. Subtext */}
                <p className="mt-8 max-w-2xl px-6 text-lg leading-8 text-slate-600">
                    Discover clubs, track your schedule, and never miss a moment.
                    Amivent is the ultimate portal for everything happening across your university.
                </p>

                {/* 4. Hero Actions */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <button className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-95">
                        Browse All Events
                    </button>
                    <button className="rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 active:scale-95">
                        Register Organization
                    </button>
                </div>

                {/* 5. Social Proof / Stats */}
                <div className="mt-16 flex items-center gap-8 border-t border-slate-100 pt-8 text-slate-400">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-slate-900">1.2k+</span>
                        <span className="text-xs uppercase tracking-widest">Active Students</span>
                    </div>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-slate-900">45+</span>
                        <span className="text-xs uppercase tracking-widest">Clubs</span>
                    </div>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-slate-900">12</span>
                        <span className="text-xs uppercase tracking-widest">Daily Events</span>
                    </div>
                </div>
            </section>

            {/* --- GRID SECTION (Coming next) --- */}
            <div className="w-full max-w-7xl px-6 pb-24">
                {/* We will drop the Event Grid here */}
            </div>
        </div>
    );
}