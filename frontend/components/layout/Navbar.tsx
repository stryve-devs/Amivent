import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    // Logic placeholder: In the future, this comes from your Auth Provider
    const userRole = "Admin"; // Options: "Student", "Admin", "ClubPresident"

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
            <nav className="flex h-16 w-full max-w-7xl items-center justify-between rounded-full border border-white/40 bg-white/70 px-4 py-2 shadow-lg backdrop-blur-xl transition-all">

                {/* 1. Left Side: Brand & Direct Nav */}
                <div className="flex items-center shrink-0">
                    {/* Brand - Keep this grouped */}
                    <Link href="/" className="flex items-center gap-3 translate-x-1 translate-y-0.2 group">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-blue-300 shadow-sm shadow-blue-200/50 group-hover:scale-110 transition-transform" />
                        <span className="text-xl font-bold tracking-tight text-blue-700 select-none">Amivent</span>
                    </Link>

                    {/* The Gap - Using ml-12 (48px) to push the nav links away from the logo */}
                    <div className="hidden lg:flex items-center ml-12 gap-5 text-sm font-medium text-slate-500">
                        <Link href="/dashboard" className="text-blue-600 font-bold">Dashboard</Link>
                        <Link href="/browse" className="hover:text-slate-900 transition-colors">Browse</Link>
                        <Link href="/schedule" className="hover:text-slate-900 transition-colors">My Schedule</Link>
                        <Link href="/orgs" className="hover:text-slate-900 transition-colors">Organizations</Link>
                    </div>
                </div>

                {/* 2. Center: Global Search (The Core Utility) */}
                <div className="hidden md:flex flex-1 justify-center px-8">
                    <div className="relative w-full max-w-md group">
                        <div className="absolute inset-y-0 left-3 flex items-center text-slate-400 group-focus-within:text-blue-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search events, #tags, or locations..."
                            className="w-full rounded-full border border-slate-200 bg-slate-50/50 py-2 pl-10 pr-12 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center">
                            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-slate-200 bg-white px-1.5 font-sans text-[10px] font-medium text-slate-400 shadow-sm">
                                <span className="text-xs">⌘</span>K
                            </kbd>
                        </div>
                    </div>
                </div>

                {/* 3. Right Side: Personal Actions & Status */}
                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    {/* RBAC Create Button */}
                    {(userRole === "Admin" || userRole === "ClubPresident") && (
                        <button className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 active:scale-95 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    )}

                    {/* Notifications Icon */}
                    <button className="relative p-2 text-slate-500 hover:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                        <span className="absolute top-2 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
                    </button>

                    {/* User Avatar Group */}
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-200 ring-1 ring-slate-200 overflow-hidden hover:ring-blue-400 transition-all">
                        <div className="text-xs font-bold text-slate-600">JD</div>
                        {/* <img src="/path-to-avatar.jpg" alt="Profile" /> */}
                    </button>

                    {/* Mobile Hamburger */}
                    <button className="lg:hidden p-2 text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}