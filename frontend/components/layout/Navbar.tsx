"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; //
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Squeeze as Hamburger } from 'hamburger-react'

export default function Navbar() {
    const router = useRouter(); //
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

    const handleLogOut = (e: React.MouseEvent | React.FormEvent) => {
        e.preventDefault();
        // Redirects to your partner's animated login page
        router.push('/login');
    };

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 font-sans transform-gpu translate-z-0 backface-hidden">
            <nav className="flex h-16 w-full max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/5 px-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-[10px] transition-all relative">
                <div className="flex items-center shrink-0">
                    {/* Hamburger Button */}
                    <div className="lg:hidden mr-2">
                        <Hamburger
                            toggled={isMobileMenuOpen}
                            toggle={setIsMobileMenuOpen}
                            size={20}
                            color={isMobileMenuOpen ? "#4FDBC8" : "#171A1A"}
                        />
                    </div>

                    <Link href="/events" className="flex items-center gap-3 group">
                        <div className="h-8 w-8 rounded-full bg-[#4FDBC8] shadow-sm shadow-[#4FDBC8]/40 group-hover:scale-110 transition-transform" />
                        <span className="text-xl font-bold tracking-tight text-[#518077] select-none">
                          Amivent
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center ml-12 gap-8 text-sm font-bold">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative py-1 transition-all duration-200 ${
                                        active ? 'text-[#4FDBC8]' : 'text-[#727876] hover:text-[#4FDBC8]'
                                    }`}
                                >
                                    {link.name}
                                    {active && (
                                        <div className="absolute -bottom-0.4 left-0 w-full h-[2px] bg-[#4FDBC8] rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* 2. Center: Global Search */}
                <div className="hidden md:flex flex-1 justify-center px-8">
                    <div className="relative w-full max-w-md group">
                        <div className="absolute inset-y-0 left-4 flex items-center text-[#727876] group-focus-within:text-[#4FDBC8] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search events..."
                            className="w-full rounded-full border-none bg-[#F1F4F4] py-2.5 pl-11 pr-12 text-sm outline-none transition-all focus:ring-2 focus:ring-[#4FDBC8]/30 text-[#171A1A]"
                        />
                    </div>
                </div>

                {/* 3. Right Side: Personal Actions */}
                <div className="flex items-center gap-3 sm:gap-5 shrink-0 relative">
                    {(userRole === "Admin" || userRole === "ClubPresident") && (
                        <Link
                            href="/create-event"
                            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-[#171A1A] text-white shadow-md hover:scale-105 active:scale-95 transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </Link>
                    )}

                    <button
                        onClick={() => { setIsNotifyOpen(!isNotifyOpen); setIsProfileOpen(false); }}
                        className={`p-1 transition-colors ${isNotifyOpen ? 'text-[#4FDBC8]' : 'text-[#171A1A] hover:text-[#4FDBC8]'}`}
                    >
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                            {!isNotifyOpen && (
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#4FDBC8] ring-2 ring-white"></span>
                            )}
                        </div>
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifyOpen(false); }}
                            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${isProfileOpen ? 'border-[#4FDBC8] bg-[#4FDBC8]/10' : 'border-zinc-200 bg-[#F1F4F4] hover:border-[#4FDBC8]'}`}
                        >
                            <div className={`text-xs font-bold uppercase ${isProfileOpen ? 'text-[#4FDBC8]' : 'text-[#727876]'}`}>JD</div>
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-6 w-56 rounded-3xl border border-zinc-100 bg-white py-3 shadow-2xl z-[60] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                <div className="px-5 py-3 border-b border-zinc-50 mb-2">
                                    <p className="text-sm font-black text-[#171A1A]">John Doe</p>
                                    <p className="text-[10px] text-[#4FDBC8] uppercase tracking-widest font-bold mt-0.5">CS Student</p>
                                </div>
                                <Link
                                    href="/profile"
                                    className="block px-5 py-2 text-sm font-medium text-[#171A1A] hover:text-[#4FDBC8] hover:bg-[#F1F4F4]"
                                >My Profile</Link>
                                <Link
                                    href="/settings"
                                    className="block px-5 py-2 text-sm font-medium text-[#171A1A] hover:text-[#4FDBC8] hover:bg-[#F1F4F4]"
                                >Settings</Link>

                                {/* Logout Button with Correct Redirect and Hover Shape */}
                                <button
                                    onClick={handleLogOut}
                                    className="w-full text-left px-5 py-3 text-sm text-[#FFB862] border-t border-zinc-50 mt-2 font-bold hover:bg-[#F1F4F4] transition-all rounded-b-3xl"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* 4. Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white rounded-3xl border border-zinc-100 p-6 shadow-2xl lg:hidden flex flex-col gap-4 animate-in slide-in-from-top-5 duration-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-lg font-bold ${isActive(link.href) ? 'text-[#4FDBC8]' : 'text-[#727876]'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
}