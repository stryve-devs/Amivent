import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
            <nav className="flex h-16 w-full max-w-7xl items-center justify-between rounded-full border border-white/40 bg-white/70 px-6 py-2 shadow-lg backdrop-blur-xl transition-all">

                {/* Left: Branding */}
                <div className="flex items-center gap-3 shrink-0 translate-x-1 translate-y-0.5">
                    {/* The Logo Circle */}
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-blue-300 shadow-sm shadow-blue-200/50" />

                    {/* The Text - Nudged down specifically */}
                    <span className="text-xl font-bold tracking-tight text-blue-700 select-none translate-y-[1.7px] border-b-2 border-blue-600/30 pb-0.2px">Amivent</span>                </div>

                {/* Center: Desktop Links (Hidden on small screens) */}
                <div className="hidden items-center gap-8 lg:flex">
                    <Link href="/events" className="text-sm font-medium text-slate-600 hover:text-slate-900">Events</Link>
                    <Link href="/orgs" className="text-sm font-medium text-slate-600 hover:text-slate-900">Clubs</Link>
                    <Link href="/resources" className="text-sm font-medium text-slate-600 hover:text-slate-900">Resources</Link>
                    <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">Pricing</Link>
                </div>

                {/* Right: Actions & Mobile Menu */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="hidden sm:block rounded-full bg-[#00a2ff] px-6 py-2.5 text-sm font-semibold text-[#ffffff] shadow-sm transition-all hover:bg-[#73daff] active:scale-95">
                        Start Building
                    </button>

                    {/* 3-Lines (Hamburger Menu) - Only visible when screen is small */}
                    <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-200/50 lg:hidden text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}