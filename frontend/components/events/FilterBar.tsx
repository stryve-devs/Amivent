// components/events/FilterBar.tsx
import React from 'react';

const filterOptions = [
    { label: 'Date', icon: 'calendar_today' },
    { label: 'Event Type', icon: 'category' },
    { label: 'Format', icon: 'videocam' },
];

export default function FilterBar() {
    return (
        <div className="sticky top-20 z-40 w-full bg-white/80 backdrop-blur-md py-4 border-b border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center gap-4">

                {/* Search Input */}
                <div className="relative w-full md:w-80 group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#4FDBC8] transition-colors !text-[20px]">
                        search
                    </span>
                    <input
                        type="text"
                        placeholder="Search events..."
                        className="w-full bg-zinc-100 border-none rounded-2xl py-2.5 pl-11 pr-4 text-sm font-medium focus:ring-2 focus:ring-[#4FDBC8]/20 outline-none transition-all"
                    />
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                    {filterOptions.map((filter) => (
                        <button className="flex items-center gap-x-2.5 px-4 py-2.5 rounded-xl border border-zinc-200 bg-white hover:border-[#4FDBC8] hover:bg-zinc-50 transition-all shadow-sm shrink-0">
    <span className="material-symbols-outlined !text-[20px] leading-none text-zinc-600">
        calendar_today
    </span>
                            <span className="text-sm font-bold tracking-tight text-[#171A1A]">
        Date
    </span>
                            <span className="material-symbols-outlined !text-[18px] leading-none text-zinc-400 ml-1">
        expand_more
    </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}