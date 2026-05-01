'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type Category = 'All' | 'Tech & CS' | 'Career' | 'Arts & Culture' | 'Sports' | 'Workshops' | 'Social'
type ViewMode = 'grid' | 'list'

interface Event {
    id: number
    title: string
    date: string
    time: string
    location: string
    club: string
    clubInitials: string
    category: Category
    status: 'registered' | 'organizer' | 'open' | 'few-spots'
    attendees?: number
    badge?: string
    gradient: string
    accentColor: string
    accentBg: string
    accentText: string
}

const EVENTS: Event[] = [
    {
        id: 1,
        title: 'Career Fair 2026',
        date: 'Today',
        time: '10:00 AM',
        location: 'Main Hall',
        club: 'CS Department',
        clubInitials: 'CS',
        category: 'Career',
        status: 'registered',
        attendees: 320,
        gradient: 'linear-gradient(135deg, #4FDBC8 0%, #0f9e8c 100%)',
        accentColor: '#4FDBC8',
        accentBg: 'rgba(79,219,200,0.12)',
        accentText: '#00675B',
    },
    {
        id: 2,
        title: 'Hackathon 2026',
        date: 'Today',
        time: '2:00 PM',
        location: 'Lab Block B',
        club: 'ACM Club',
        clubInitials: 'AC',
        category: 'Tech & CS',
        status: 'organizer',
        attendees: 142,
        badge: '48h',
        gradient: 'linear-gradient(135deg, #FFB862 0%, #e8920d 100%)',
        accentColor: '#FFB862',
        accentBg: 'rgba(255,184,98,0.12)',
        accentText: '#a06010',
    },
    {
        id: 3,
        title: 'UI/UX Design Bootcamp',
        date: 'May 1',
        time: '11:00 AM',
        location: 'Design Studio',
        club: 'Design Society',
        clubInitials: 'DS',
        category: 'Workshops',
        status: 'open',
        attendees: 38,
        badge: 'New',
        gradient: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
        accentColor: '#a78bfa',
        accentBg: 'rgba(167,139,250,0.12)',
        accentText: '#6d28d9',
    },
    {
        id: 4,
        title: 'Inter-College Basketball',
        date: 'May 2',
        time: '4:00 PM',
        location: 'Sports Complex',
        club: 'Sports Assoc.',
        clubInitials: 'SA',
        category: 'Sports',
        status: 'open',
        attendees: 200,
        gradient: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
        accentColor: '#34d399',
        accentBg: 'rgba(52,211,153,0.12)',
        accentText: '#065f46',
    },
    {
        id: 5,
        title: 'Annual Art Exhibition',
        date: 'May 3',
        time: '2:00 PM',
        location: 'Art Gallery',
        club: 'Fine Arts Club',
        clubInitials: 'FA',
        category: 'Arts & Culture',
        status: 'few-spots',
        attendees: 80,
        badge: 'Few spots',
        gradient: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
        accentColor: '#f87171',
        accentBg: 'rgba(248,113,113,0.12)',
        accentText: '#b91c1c',
    },
    {
        id: 6,
        title: 'Photography Walk',
        date: 'May 4',
        time: '6:00 PM',
        location: 'Studio 3',
        club: 'Photo Club',
        clubInitials: 'PC',
        category: 'Arts & Culture',
        status: 'open',
        attendees: 24,
        gradient: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
        accentColor: '#60a5fa',
        accentBg: 'rgba(96,165,250,0.12)',
        accentText: '#1d4ed8',
    },
    {
        id: 7,
        title: 'Entrepreneurship Panel',
        date: 'May 5',
        time: '3:00 PM',
        location: 'Auditorium A',
        club: 'E-Cell',
        clubInitials: 'EC',
        category: 'Career',
        status: 'open',
        attendees: 150,
        badge: 'Keynote',
        gradient: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
        accentColor: '#fbbf24',
        accentBg: 'rgba(251,191,36,0.12)',
        accentText: '#92400e',
    },
    {
        id: 8,
        title: 'Open Mic Night',
        date: 'May 6',
        time: '7:00 PM',
        location: 'Student Lounge',
        club: 'Cultural Club',
        clubInitials: 'CC',
        category: 'Social',
        status: 'open',
        attendees: 60,
        gradient: 'linear-gradient(135deg, #f472b6 0%, #db2777 100%)',
        accentColor: '#f472b6',
        accentBg: 'rgba(244,114,182,0.12)',
        accentText: '#9d174d',
    },
    {
        id: 9,
        title: 'Machine Learning Workshop',
        date: 'May 7',
        time: '10:00 AM',
        location: 'Lab 204',
        club: 'Data Society',
        clubInitials: 'DS',
        category: 'Tech & CS',
        status: 'open',
        attendees: 55,
        badge: 'Beginner-friendly',
        gradient: 'linear-gradient(135deg, #4FDBC8 0%, #0891b2 100%)',
        accentColor: '#4FDBC8',
        accentBg: 'rgba(79,219,200,0.12)',
        accentText: '#0e7490',
    },
]

const CATEGORIES: Category[] = ['All', 'Tech & CS', 'Career', 'Arts & Culture', 'Sports', 'Workshops', 'Social']

const statusConfig = {
    registered: { label: 'Registered ✓', bg: 'rgba(79,219,200,0.12)', color: '#00675B' },
    organizer: { label: 'Organizer', bg: 'rgba(255,184,98,0.12)', color: '#a06010' },
    open: { label: 'Register →', bg: '#171A1A', color: '#fff' },
    'few-spots': { label: 'Few spots left', bg: 'rgba(248,113,113,0.12)', color: '#b91c1c' },
}

function GridIcon({ active }: { active: boolean }) {
    return (
        <svg width="14" height="14" fill="none" stroke={active ? '#00675B' : '#727876'} strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
    )
}

function ListIcon({ active }: { active: boolean }) {
    return (
        <svg width="14" height="14" fill="none" stroke={active ? '#00675B' : '#727876'} strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
    )
}

function SearchIcon() {
    return (
        <svg width="16" height="16" fill="none" stroke="#727876" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    )
}

function EventCardGrid({ event }: { event: Event }) {
    const status = statusConfig[event.status]
    const isButton = event.status === 'open' || event.status === 'few-spots'

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            style={{
                background: 'rgba(255,255,255,0.85)',
                border: '0.5px solid rgba(79,219,200,0.25)',
                borderRadius: 16,
                overflow: 'hidden',
                backdropFilter: 'blur(8px)',
            }}
        >
            {/* Card Header */}
            <div
                style={{
                    background: event.gradient,
                    height: 90,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                }}
            >
        <span
            style={{
                background: 'rgba(255,255,255,0.25)',
                color: '#fff',
                fontSize: 9,
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: 20,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
            }}
        >
          {event.category}
        </span>
                {event.badge && (
                    <span
                        style={{
                            background: 'rgba(255,255,255,0.3)',
                            color: '#fff',
                            fontSize: 9,
                            fontWeight: 700,
                            padding: '3px 8px',
                            borderRadius: 20,
                        }}
                    >
            {event.badge}
          </span>
                )}
            </div>

            {/* Card Body */}
            <div style={{ padding: '12px 14px' }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#171A1A', margin: '0 0 3px' }}>{event.title}</p>
                <p style={{ fontSize: 10, color: '#727876', margin: '0 0 10px' }}>
                    {event.date} · {event.time} · {event.location}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Club */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <div
                            style={{
                                width: 18,
                                height: 18,
                                background: event.accentBg,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 7,
                                fontWeight: 800,
                                color: event.accentText,
                            }}
                        >
                            {event.clubInitials}
                        </div>
                        <span style={{ fontSize: 10, color: '#727876' }}>{event.club}</span>
                    </div>

                    {/* Status / CTA */}
                    {isButton ? (
                        <button
                            style={{
                                background: event.status === 'few-spots' ? event.accentBg : '#171A1A',
                                border: 'none',
                                color: event.status === 'few-spots' ? event.accentText : '#fff',
                                fontSize: 10,
                                fontWeight: 700,
                                padding: '4px 10px',
                                borderRadius: 20,
                                cursor: 'pointer',
                            }}
                        >
                            {status.label}
                        </button>
                    ) : (
                        <span
                            style={{
                                background: status.bg,
                                color: status.color,
                                fontSize: 10,
                                fontWeight: 700,
                                padding: '3px 8px',
                                borderRadius: 20,
                            }}
                        >
              {status.label}
            </span>
                    )}
                </div>

                {/* Attendees */}
                {event.attendees && (
                    <p style={{ fontSize: 10, color: '#a0aaa8', margin: '8px 0 0', textAlign: 'right' }}>
                        {event.attendees} going
                    </p>
                )}
            </div>
        </motion.div>
    )
}

function EventCardList({ event }: { event: Event }) {
    const status = statusConfig[event.status]
    const isButton = event.status === 'open' || event.status === 'few-spots'

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{
                background: 'rgba(255,255,255,0.85)',
                border: '0.5px solid rgba(79,219,200,0.22)',
                borderRadius: 14,
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                backdropFilter: 'blur(8px)',
                borderLeft: `3px solid ${event.accentColor}`,
            }}
        >
            {/* Color dot / time block */}
            <div
                style={{
                    background: event.accentBg,
                    borderRadius: 10,
                    padding: '8px 10px',
                    textAlign: 'center',
                    minWidth: 46,
                    flexShrink: 0,
                }}
            >
                <p style={{ fontSize: 11, fontWeight: 800, color: event.accentText, margin: 0 }}>
                    {event.time.split(':')[0]}
                </p>
                <p style={{ fontSize: 8, fontWeight: 700, color: event.accentColor, textTransform: 'uppercase', margin: 0 }}>
                    {event.time.includes('AM') ? 'AM' : 'PM'}
                </p>
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#171A1A', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {event.title}
                    </p>
                    {event.badge && (
                        <span style={{ background: event.accentBg, color: event.accentText, fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 10, flexShrink: 0 }}>
              {event.badge}
            </span>
                    )}
                </div>
                <p style={{ fontSize: 10, color: '#727876', margin: 0 }}>
                    {event.date} · {event.location} · {event.club}
                </p>
            </div>

            {/* Category pill */}
            <span style={{ background: '#f1f4f4', color: '#727876', fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>
        {event.category}
      </span>

            {/* Status */}
            {isButton ? (
                <button
                    style={{
                        background: event.status === 'few-spots' ? event.accentBg : '#171A1A',
                        border: 'none',
                        color: event.status === 'few-spots' ? event.accentText : '#fff',
                        fontSize: 10,
                        fontWeight: 700,
                        padding: '5px 12px',
                        borderRadius: 20,
                        cursor: 'pointer',
                        flexShrink: 0,
                    }}
                >
                    {status.label}
                </button>
            ) : (
                <span
                    style={{
                        background: status.bg,
                        color: status.color,
                        fontSize: 10,
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: 20,
                        flexShrink: 0,
                    }}
                >
          {status.label}
        </span>
            )}
        </motion.div>
    )
}

export default function BrowsePage() {
    const [activeCategory, setActiveCategory] = useState<Category>('All')
    const [viewMode, setViewMode] = useState<ViewMode>('grid')
    const [search, setSearch] = useState('')
    const [activeFilter, setActiveFilter] = useState<'today' | 'week' | null>(null)

    const filtered = EVENTS.filter((e) => {
        const matchCat = activeCategory === 'All' || e.category === activeCategory
        const matchSearch =
            search === '' ||
            e.title.toLowerCase().includes(search.toLowerCase()) ||
            e.club.toLowerCase().includes(search.toLowerCase()) ||
            e.location.toLowerCase().includes(search.toLowerCase())
        const matchDate =
            activeFilter === null ||
            (activeFilter === 'today' && e.date === 'Today') ||
            activeFilter === 'week'
        return matchCat && matchSearch && matchDate
    })

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(160deg, #e8f6f3 0%, #f0f7f5 50%, #edf5f0 100%)',
                fontFamily: "'Manrope', 'Inter', sans-serif",
            }}
        >
            {/* ── Page header ── */}
            <div style={{ padding: '2rem 2rem 1rem' }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#727876', textTransform: 'uppercase', letterSpacing: '0.18em', margin: '0 0 4px' }}>
                    Amivent · Browse
                </p>
                <h1 style={{ fontSize: 28, fontWeight: 800, color: '#171A1A', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
                    Browse events
                </h1>
                <p style={{ fontSize: 13, color: '#727876', margin: 0 }}>
                    Discover what's happening across campus
                </p>
            </div>

            {/* ── Search + filter bar ── */}
            <div style={{ padding: '0 2rem 1rem' }}>
                <div
                    style={{
                        background: 'rgba(255,255,255,0.8)',
                        border: '0.5px solid rgba(79,219,200,0.25)',
                        borderRadius: 16,
                        padding: '12px 16px',
                        backdropFilter: 'blur(12px)',
                        display: 'flex',
                        gap: 10,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Search input */}
                    <div
                        style={{
                            flex: 1,
                            minWidth: 200,
                            background: '#f1f4f4',
                            borderRadius: 100,
                            padding: '8px 14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                        }}
                    >
                        <SearchIcon />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name, club, or keyword..."
                            style={{
                                border: 'none',
                                background: 'transparent',
                                outline: 'none',
                                fontSize: 12,
                                color: '#171A1A',
                                width: '100%',
                                fontFamily: 'inherit',
                            }}
                        />
                    </div>

                    {/* Date filters */}
                    <div style={{ display: 'flex', gap: 6 }}>
                        {(['today', 'week'] as const).map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(activeFilter === f ? null : f)}
                                style={{
                                    background: activeFilter === f ? 'rgba(79,219,200,0.12)' : '#f1f4f4',
                                    border: activeFilter === f ? '1px solid rgba(79,219,200,0.35)' : '1px solid transparent',
                                    borderRadius: 100,
                                    padding: '7px 14px',
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: activeFilter === f ? '#00675B' : '#727876',
                                    cursor: 'pointer',
                                    fontFamily: 'inherit',
                                    transition: 'all 0.18s',
                                }}
                            >
                                {f === 'today' ? 'Today' : 'This week'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Categories + view toggle ── */}
            <div
                style={{
                    padding: '0 2rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                }}
            >
                {/* Scrollable category pills */}
                <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 2 }}>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                background: activeCategory === cat ? '#171A1A' : 'rgba(255,255,255,0.8)',
                                border: activeCategory === cat ? '1px solid transparent' : '0.5px solid rgba(79,219,200,0.2)',
                                color: activeCategory === cat ? '#fff' : '#727876',
                                borderRadius: 100,
                                padding: '6px 14px',
                                fontSize: 11,
                                fontWeight: 700,
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                fontFamily: 'inherit',
                                transition: 'all 0.18s',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* View toggle + count */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                    <p style={{ fontSize: 11, color: '#727876', fontWeight: 600, margin: 0, whiteSpace: 'nowrap' }}>
                        {filtered.length} events
                    </p>
                    <div style={{ display: 'flex', gap: 4 }}>
                        {(['grid', 'list'] as ViewMode[]).map((v) => (
                            <button
                                key={v}
                                onClick={() => setViewMode(v)}
                                style={{
                                    background: viewMode === v ? 'rgba(79,219,200,0.12)' : 'rgba(255,255,255,0.8)',
                                    border: viewMode === v ? '1px solid rgba(79,219,200,0.3)' : '0.5px solid rgba(79,219,200,0.2)',
                                    borderRadius: 8,
                                    padding: '5px 7px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {v === 'grid' ? <GridIcon active={viewMode === 'grid'} /> : <ListIcon active={viewMode === 'list'} />}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Event grid / list ── */}
            <div style={{ padding: '0 2rem 2rem' }}>
                <AnimatePresence mode="wait">
                    {filtered.length === 0 ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '3rem',
                                background: 'rgba(255,255,255,0.7)',
                                borderRadius: 16,
                                border: '0.5px dashed rgba(79,219,200,0.3)',
                            }}
                        >
                            <div
                                style={{
                                    width: 48,
                                    height: 48,
                                    background: 'rgba(79,219,200,0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 12,
                                }}
                            >
                                <SearchIcon />
                            </div>
                            <p style={{ fontSize: 14, fontWeight: 700, color: '#171A1A', margin: '0 0 4px' }}>No events found</p>
                            <p style={{ fontSize: 12, color: '#727876', margin: 0 }}>Try a different search or category</p>
                        </motion.div>
                    ) : viewMode === 'grid' ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                                gap: 10,
                            }}
                        >
                            <AnimatePresence>
                                {filtered.map((event) => (
                                    <EventCardGrid key={event.id} event={event} />
                                ))}
                                {/* Load more tile */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{
                                        background: 'rgba(255,255,255,0.55)',
                                        border: '0.5px dashed rgba(79,219,200,0.35)',
                                        borderRadius: 16,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: 180,
                                        cursor: 'pointer',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 36,
                                            height: 36,
                                            background: 'rgba(79,219,200,0.12)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: 8,
                                        }}
                                    >
                                        <svg width="16" height="16" fill="none" stroke="#4FDBC8" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </div>
                                    <p style={{ fontSize: 12, fontWeight: 700, color: '#4FDBC8', margin: '0 0 2px' }}>Load more</p>
                                    <p style={{ fontSize: 10, color: '#727876', margin: 0 }}>19 more available</p>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                        >
                            <AnimatePresence>
                                {filtered.map((event) => (
                                    <EventCardList key={event.id} event={event} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}