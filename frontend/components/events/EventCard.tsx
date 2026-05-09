import {AnimatePresence, motion} from 'framer-motion';
import { useState } from 'react'; // Added State Hook

const CATEGORIES_MAP = [
    { name: 'All events', color: '#00F5D4' },
    { name: 'Study', color: '#3B82F6' },
    { name: 'Club', color: '#8B5CF6' },
    { name: 'Lecture', color: '#F43F5E' },
    { name: 'Volunteer', color: '#F59E0B' },
    { name: 'Networking', color: '#10B981' },
    { name: 'Workshop', color: '#EC4899' },
    { name: 'Pitch', color: '#06B6D4' },
    { name: 'Panel', color: '#6366F1' },
    { name: 'Social', color: '#F97316' },
    { name: 'Sports', color: '#84CC16' },
    { name: 'Games', color: '#A855F7' },
    { name: 'Wellness', color: '#14B8A6' },
    { name: 'Gallery', color: '#EF4444' },
    { name: 'Campus', color: '#475569' },
];

export default function EventCard({ event, viewMode }: any) {
    const isList = viewMode === 'list';
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const catStyle = CATEGORIES_MAP.find(c => c.name === event.category) || CATEGORIES_MAP[0];
    const themeColor = catStyle.color;

    const handleJoin = async () => {
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <motion.div
            layout // Standard shell layout
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 35, // Higher damping stops the "shake"
                layout: { duration: 0.3 }
            }}
            whileHover={{ scale: 1.002, borderColor: themeColor }}
            className={`group relative bg-white border border-zinc-100 overflow-hidden transition-colors duration-300
                ${isList ? 'flex flex-row items-center p-4 rounded-2xl gap-6' : 'flex flex-col h-full rounded-4xl p-6 shadow-sm'}`}
        >
            {/* Corner Triangle */}
            {!isList && (
                <div className="absolute top-0 right-0 w-12 h-12 z-20 pointer-events-none transition-transform duration-500 group-hover:scale-110"
                     style={{ backgroundColor: themeColor, clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />
            )}

            {/* CONTENT WRAPPER: Use layout="position" to prevent text jitter */}
            <motion.div layout="position" className={`flex ${isList ? 'flex-row items-center gap-6 flex-1' : 'flex-col flex-1'}`}>

                <motion.div layout="position" className="flex items-center gap-3 mb-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping-red absolute h-full w-full rounded-full bg-[#FF4D4D] opacity-75"></span>
                        <span className="relative rounded-full h-2 w-2 bg-[#FF4D4D]"></span>
                    </span>
                    <span className="text-[10px] font-black text-[#FF4D4D] uppercase">Live</span>
                </motion.div>

                <motion.div layout="position" className="flex-1 min-h-[50px]">
                    <h3 className="font-bold text-[#171A1A] leading-tight group-hover:text-zinc-500 transition-colors line-clamp-2">
                        {event.title}
                    </h3>
                    <p className="text-[10px] font-black uppercase mt-1" style={{ color: themeColor }}>
                        @{event.club}
                    </p>
                </motion.div>
            </motion.div>

            {/* FOOTER WRAPPER: Stabilized with layout="position" */}
            <motion.div
                layout="position"
                className={`flex items-center ${isList ? 'ml-auto gap-8' : 'mt-4 pt-4 border-t border-zinc-50 justify-between'}`}
            >
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-zinc-300 uppercase leading-none mb-1">Status</span>
                    <span className="text-[11px] font-bold text-zinc-900">{event.attendees} going</span>
                </div>

                <button
                    onClick={handleJoin}
                    disabled={status !== 'idle'}
                    className="h-9 px-5 rounded-xl text-[10px] font-black uppercase transition-all duration-500 flex items-center justify-center gap-2 shrink-0 overflow-hidden"
                    style={{
                        // Lock the width when not idle to prevent layout shifting
                        width: status === 'idle' ? 'auto' : '110px',
                        backgroundColor: status === 'success' ? themeColor : '#18181b',
                        color: 'white'
                    }}
                >
                    <AnimatePresence mode="wait">
                        {status === 'idle' && (
                            <motion.span key="idle" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
                                Join
                            </motion.span>
                        )}
                        {status === 'loading' && (
                            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <div className="h-3 w-3 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            </motion.span>
                        )}
                        {status === 'success' && (
                            <motion.span key="success" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-1">
                                <span className="material-symbols-outlined !text-[16px]">check</span>
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </motion.div>
        </motion.div>
    );
}