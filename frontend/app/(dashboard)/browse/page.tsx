"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import EventCard from "@/components/events/EventCard";

interface UniversityEvent {
    id: string;
    title: string;
    organizer: string;
    category: string;
    date: string;
    location: string;
}

const MOCK_EVENTS: UniversityEvent[] = [
    { id: '1', title: 'Next.js 15 Deep Dive', organizer: 'Stryve Dev Club', category: 'Tech', date: 'OCT 24', location: 'Innovation Hub' },
    { id: '2', title: 'Annual Spring Gala', organizer: 'Student Union', category: 'Social', date: 'NOV 12', location: 'Grand Ballroom' },
    { id: '3', title: 'Startup Pitch Night', organizer: 'Entrepreneurship Society', category: 'Career', date: 'DEC 05', location: 'Auditorium A' },
    { id: '4', title: 'Inter-University Cricket Cup', organizer: 'Athletics Dept', category: 'Sports', date: 'OCT 28', location: 'Main Sports Complex' },
    { id: '5', title: 'UI/UX Design Sprint', organizer: 'Design Collective', category: 'Workshop', date: 'NOV 02', location: 'Studio 404' },
    { id: '6', title: 'Cybersecurity CTF', organizer: 'Hackers Club', category: 'Tech', date: 'NOV 15', location: 'Computer Lab 3' },
    { id: '7', title: 'Networking Brunch', organizer: 'Alumni Assoc', category: 'Career', date: 'NOV 20', location: 'Campus Lounge' },
    { id: '8', title: 'Winter Music Festival', organizer: 'Arts Council', category: 'Social', date: 'DEC 10', location: 'Open Air Theater' },
    { id: '9', title: 'Data Science Bootcamp', organizer: 'AI Research', category: 'Workshop', date: 'JAN 15', location: 'Library Annex' },
    { id: '10', title: 'Chess Championship', organizer: 'Chess Club', category: 'Sports', date: 'JAN 20', location: 'Student Center' },
];

export default function BrowsePage() {
    const container = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState("");

    useGSAP(() => {
        gsap.from(".event-card", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "expo.out",
            clearProps: "all"
        });
    }, { scope: container });

    const handleClearFilters = () => {
        setSearchQuery("");
    };

    return (
        <div ref={container} className="w-full min-h-screen pb-20">
            {/* UNIFIED HEADER & FILTER SECTION */}
            <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-zinc-100 mb-12">

                <div className="flex-1">
                    <p className="text-[#4FDBC8] font-black uppercase tracking-[0.2em] text-[10px] mb-3">Discovery</p>
                    <h1 className="text-5xl md:text-4xl font-black text-[#171A1A] tracking-tighter leading-none">
                        Events near <span className="text-[#4FDBC8]">Dubai, AE</span>
                    </h1>
                </div>

                {/* Integrated Search & Filters */}
                <div className="flex flex-wrap items-center gap-4">
                    {/* Premium Search Field */}
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#4FDBC8] transition-all duration-300 !text-[20px]">
                            search
                        </span>
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-[#F1F4F4] hover:bg-[#EBEDED] border-2 border-transparent focus:border-[#4FDBC8]/20 focus:bg-white rounded-[18px] py-2.5 pl-12 pr-4 text-sm font-bold w-full md:w-72 transition-all duration-300 outline-none"
                        />
                    </div>

                    {/* Filter Pills */}
                    {[
                        { label: "Any day", icon: "schedule" },
                        { label: "Any Mode", icon: "videocam" },
                        { label: "Within 30km", icon: "distance" }
                    ].map((filter, index) => (
                        <button
                            key={index}
                            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-[18px] bg-white text-[#171A1A] border border-zinc-200 hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                        >
                            <span className="material-symbols-outlined !text-[20px] text-zinc-500 group-hover:text-[#4FDBC8] transition-colors">
                                {filter.icon}
                            </span>
                            <span className="text-[13px] font-bold tracking-tight">{filter.label}</span>
                            <span className="material-symbols-outlined !text-[18px] text-zinc-300 group-hover:translate-y-0.5 transition-transform">
                                expand_more
                            </span>
                        </button>
                    ))}

                    <button
                        onClick={handleClearFilters}
                        className="relative ml-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#727876] hover:text-[#171A1A] transition-colors py-2 group"
                    >
                        Clear All
                        <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#4FDBC8] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                </div>
            </div>

            {/* EVENT GRID */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-[#F8FAFA] p-10 rounded-[40px] border border-zinc-100/50 shadow-inner">
                    {MOCK_EVENTS.map((event) => (
                        <div key={event.id} className="event-card">
                            <EventCard
                                title={event.title}
                                organizer={event.organizer}
                                category={event.category}
                                date={event.date}
                                location={event.location}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}