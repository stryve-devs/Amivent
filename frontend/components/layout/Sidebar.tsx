import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
            <div className="p-6">
                <h1 className="text-2xl font-bold tracking-tight text-blue-400">Amivent</h1>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">University Portal</p>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                <Link href="/events" className="flex items-center gap-3 p-3 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-600/20">
                    <span>📅</span>
                    <span className="font-medium">Events Feed</span>
                </Link>
                <Link href="/orgs" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
                    <span>🏢</span>
                    <span className="font-medium text-slate-300">Organizations</span>
                </Link>
                <Link href="/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
                    <span>👤</span>
                    <span className="font-medium text-slate-300">My Profile</span>
                </Link>
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button className="w-full text-left p-2 text-xs text-slate-500 hover:text-white">
                    Logout
                </button>
            </div>
        </aside>
    );
}