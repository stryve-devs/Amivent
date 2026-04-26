"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [isNotifyOpen, setIsNotifyOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const userRole = "Admin";
    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { name: 'Dashboard', href: '/events' },
        { name: 'Browse', href: '/browse' },
        { name: 'My Schedule', href: '/schedule' },
        { name: 'Organizations', href: '/orgs' },
    ];

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
            <nav className="flex h-16 w-full max-w-7xl items-center justify-between rounded-full border border-white/40 bg-white/70 px-4 py-2 shadow-lg backdrop-blur-xl transition-all">

                {/* 1. Left Side: KEPT EXACTLY AS YOU HAD IT */}
                <div className="flex items-center shrink-0">
                    <Link href="/events" className="flex items-center gap-3 translate-x-1 group">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-blue-300 shadow-sm shadow-blue-200/50 group-hover:scale-110 transition-transform" />
                        <span className="text-xl font-bold tracking-tight text-blue-700 select-none border-blue-600/30 pb-[1px]">
                          Amivent
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center ml-12 gap-5 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-all duration-200 hover:text-blue-600 ${
                                    isActive(link.href) ? 'text-blue-600 font-bold' : 'text-slate-500'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 2. Center: Global Search */}
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
                    </div>
                </div>

                {/* 3. Right Side: Personal Actions */}
                <div className="flex items-center gap-2 sm:gap-4 shrink-0 relative">
                    {(userRole === "Admin" || userRole === "ClubPresident") && (
                        <Link
                            href="/create-event"
                            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 active:scale-95 transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </Link>
                    )}

                    <button
                        onClick={() => { setIsNotifyOpen(!isNotifyOpen); setIsProfileOpen(false); }}
                        className="p-2 text-slate-500 hover:text-blue-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </button>

                    {/* Profile Avatar & Dropdown Logic */}
                    <div className="relative">
                        <button
                            onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifyOpen(false); }}
                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-200 ring-1 ring-slate-200 hover:ring-blue-400 transition-all"
                        >
                            <div className="text-xs font-bold text-slate-600 uppercase">JD</div>
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-4 w-56 rounded-2xl border border-slate-200 bg-white py-2 shadow-xl z-[60] animate-in fade-in zoom-in duration-200">
                                <div className="px-4 py-2 border-b border-slate-100 mb-1">
                                    <p className="text-sm font-bold text-slate-900">John Doe</p>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mt-1">CS Student</p>
                                </div>
                                <Link
                                    href="/profile"
                                    onClick={() => setIsProfileOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                                >My Profile</Link>
                                <Link
                                    href="/settings"
                                    onClick={() => setIsProfileOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                                >Settings</Link>

                                <button className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-t border-slate-100 mt-1">
                                Logout
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>


            {/* --- MOBILE DRAWER OVERLAY --- */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-6 flex flex-col gap-8 animate-in slide-in-from-right duration-300">
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-blue-600">Amivent</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold text-slate-400">CLOSE</button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {/* 1. Main Navigation Section */}
                            <div className="space-y-4">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Menu</p>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block text-xl font-bold ${isActive(link.href) ? 'text-blue-600' : 'text-slate-800'}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="h-px bg-slate-100 w-full" />

                            {/* 2. Personal Section (Profile & Settings) */}
                            <div className="space-y-4">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Account</p>
                                <Link
                                    href="/profile"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 text-xl font-bold text-slate-800"
                                >
                                My Profile
                                </Link>
                                <Link
                                    href="/settings"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 text-xl font-bold text-slate-800"
                                >
                                Settings
                                </Link>
                            </div>

                            <div className="mt-auto">
                                <Link
                                    href="/create-event"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100"
                                >
                                    + Create Event
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}