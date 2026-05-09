'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Modular Component Imports
import DiscoveryHeader from '@/components/events/DiscoveryHeader'
import FilterBar from '@/components/events/FilterBar'
import CategoryBar from '@/components/events/CategoryBar'
import ViewModeToggle from '@/components/events/ViewModeToggle'
import EventCard from '@/components/events/EventCard'

// Types
type ViewMode = 'grid' | 'list'

type Category =
    | 'All events'
    | 'Study'
    | 'Club'
    | 'Lecture'
    | 'Volunteer'
    | 'Networking'
    | 'Workshop'
    | 'Pitch'
    | 'Panel'
    | 'Social'
    | 'Sports'
    | 'Games'
    | 'Wellness'
    | 'Gallery'
    | 'Campus';

interface Event {
    id: string
    title: string
    club: string
    category: Category
    date: string
    time: string
    location: string
    status: 'registered' | 'organizer' | 'open' | 'few-spots'
    attendees?: number
    badge?: string
    format: 'Online' | 'In person'
    dateLabel: string
    isOnline: boolean
}

const EVENTS: Event[] = [
    // --- Original 9 Events ---
    {
        id: '1', title: 'Career Fair 2026', date: 'Today', time: '10:00 AM',
        location: 'Main Hall', club: 'CS Department', category: 'Volunteer',
        status: 'registered', attendees: 320,
        format: 'In person', dateLabel: 'Today', isOnline: false
    },
    {
        id: '2', title: 'Hackathon 2026', date: 'Today', time: '2:00 PM',
        location: 'Lab Block B', club: 'ACM Club', category: 'Study',
        status: 'organizer', attendees: 142, badge: '48h',
        format: 'In person', dateLabel: 'Today', isOnline: false
    },
    {
        id: '3', title: 'UI/UX Design Bootcamp', date: 'May 1', time: '11:00 AM',
        location: 'Design Studio', club: 'Design Society', category: 'Workshop',
        status: 'open', attendees: 38, badge: 'New',
        format: 'Online', dateLabel: 'This week', isOnline: true
    },
    {
        id: '4', title: 'Inter-College Basketball', date: 'May 2', time: '4:00 PM',
        location: 'Sports Complex', club: 'Sports Assoc.', category: 'Sports',
        status: 'open', attendees: 200,
        format: 'In person', dateLabel: 'This week', isOnline: false
    },
    {
        id: '5', title: 'Annual Art Exhibition', date: 'May 3', time: '2:00 PM',
        location: 'Art Gallery', club: 'Fine Arts Club', category: 'Gallery',
        status: 'few-spots', attendees: 80, badge: 'Few spots',
        format: 'In person', dateLabel: 'Next week', isOnline: false
    },
    {
        id: '6', title: 'Photography Walk', date: 'May 4', time: '6:00 PM',
        location: 'Studio 3', club: 'Photo Club', category: 'Gallery',
        status: 'open', attendees: 24,
        format: 'In person', dateLabel: 'Next week', isOnline: false
    },
    {
        id: '7', title: 'Entrepreneurship Panel', date: 'May 5', time: '3:00 PM',
        location: 'Auditorium A', club: 'E-Cell', category: 'Panel',
        status: 'open', attendees: 150, badge: 'Keynote',
        format: 'Online', dateLabel: 'Next week', isOnline: true
    },
    {
        id: '8', title: 'Open Mic Night', date: 'May 6', time: '7:00 PM',
        location: 'Student Lounge', club: 'Cultural Club', category: 'Social',
        status: 'open', attendees: 60,
        format: 'In person', dateLabel: 'Next week', isOnline: false
    },
    {
        id: '9', title: 'Machine Learning Workshop', date: 'May 7', time: '10:00 AM',
        location: 'Lab 204', club: 'Data Society', category: 'Lecture',
        status: 'open', attendees: 55, badge: 'Beginner-friendly',
        format: 'Online', dateLabel: 'Next week', isOnline: true
    },

    // --- New Additional Events (Academic & Study) ---
    {
        id: '10', title: 'Organic Chemistry Study Group', date: 'Today', time: '4:00 PM',
        location: 'Library Floor 2', club: 'Science Society', category: 'Study',
        status: 'open', attendees: 12, badge: 'Intensive',
        format: 'In person', dateLabel: 'Today', isOnline: false
    },
    {
        id: '11', title: 'Intro to Quantum Physics', date: 'May 8', time: '11:00 AM',
        location: 'Lecture Theatre C', club: 'Physics Dept', category: 'Lecture',
        status: 'open', attendees: 85,
        format: 'In person', dateLabel: 'Next week', isOnline: false
    },
    {
        id: '12', title: 'Robotics Club Weekly Meet', date: 'May 9', time: '5:30 PM',
        location: 'Engineering Lab', club: 'Robotics Club', category: 'Club',
        status: 'open', attendees: 20,
        format: 'In person', dateLabel: 'Next week', isOnline: false
    },

    // --- New Additional Events (Corporate & Wellness) ---
    {
        id: '13', title: 'Fintech Networking Mixer', date: 'May 10', time: '6:00 PM',
        location: 'Innovation Hub', club: 'Business School', category: 'Networking',
        status: 'few-spots', attendees: 45, badge: 'Corporate',
        format: 'In person', dateLabel: 'Next week', isOnline: false
    },
    {
        id: '14', title: 'Startup Pitch Competition', date: 'May 11', time: '2:00 PM',
        location: 'Virtual Hall', club: 'E-Cell', category: 'Pitch',
        status: 'open', attendees: 120, badge: '$1k Prize',
        format: 'Online', dateLabel: 'Next week', isOnline: true
    },
    {
        id: '15', title: 'Mindfulness & Meditation', date: 'Today', time: '8:00 AM',
        location: 'Zen Garden', club: 'Wellness Center', category: 'Wellness',
        status: 'registered', attendees: 30,
        format: 'In person', dateLabel: 'Today', isOnline: false
    },
    {
        id: '16', title: 'E-Sports Valorant Finals', date: 'May 12', time: '8:00 PM',
        location: 'Gaming Lounge', club: 'Gaming Club', category: 'Games',
        status: 'open', attendees: 250, badge: 'Live Stream',
        format: 'In person', dateLabel: 'Next week', isOnline: false
    },
    {
        id: '17', title: 'Campus Orientation 2026', date: 'May 15', time: '9:00 AM',
        location: 'Admin Block', club: 'Student Union', category: 'Campus',
        status: 'open', attendees: 500, badge: 'Mandatory',
        format: 'In person', dateLabel: 'Next week', isOnline: false
    }
];

export default function BrowsePage() {

    const [activeCategory, setActiveCategory] = useState<Category>('All events');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [search, setSearch] = useState('');
    const [dateFilter, setDateFilter] = useState('Any day');
    const [typeFilter, setTypeFilter] = useState('Any mode'); //Changed from 'Any type'
    const [distanceFilter, setDistanceFilter] = useState(30);

    // 2. Comprehensive Filtering Logic
    const filteredEvents = EVENTS.filter((event) => {
        const matchesCategory = activeCategory === 'All events' || event.category === activeCategory;

        const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) ||
            event.club.toLowerCase().includes(search.toLowerCase());

        // 🚨 THE FIX: Change 'Any type' to 'Any mode' here to match the reset state
        const matchesType = typeFilter === 'Any mode' || event.format === typeFilter;

        const matchesDate = dateFilter === 'Any day' || event.dateLabel === dateFilter;

        // (Note: If you plan to actually filter by distance, you'd add matchesDistance here too!)

        return matchesCategory && matchesSearch && matchesType && matchesDate;
    });

    return (
        <main className="min-h-screen bg-white pb-20 rounded-3xl">
            <DiscoveryHeader />

            {/* Passing states as props resolves the "Unused variable" warnings */}
            <FilterBar
                search={search}
                setSearch={setSearch}
                dateFilter={dateFilter}
                setDateFilter={setDateFilter}
                typeFilter={typeFilter}
                setTypeFilter={setTypeFilter}
                distanceFilter={distanceFilter}
                setDistanceFilter={setDistanceFilter}
            />

            <CategoryBar
                active={activeCategory}
                onChange={setActiveCategory}
            />

            <ViewModeToggle
                mode={viewMode}
                onChange={setViewMode}
                count={filteredEvents.length}
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className={viewMode === 'grid'
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6"
                            : "flex flex-col gap-4 px-6"}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredEvents.map((event) => (
                                <EventCard key={event.id} event={event} viewMode={viewMode} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {filteredEvents.length === 0 && (
                    <div className="py-20 text-center border-2 border-dashed border-zinc-100 rounded-4xl">
                        <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">
                            No events found matching your search
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}