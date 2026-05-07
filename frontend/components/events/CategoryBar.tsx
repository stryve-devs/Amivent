// components/events/CategoryBar.tsx
import { motion } from 'framer-motion';
import { AnimatePresence} from "framer-motion";
import { useRef, useState, useEffect } from 'react';


const CATEGORIES = [
    { name: 'All events', icon: 'grid_view' },
    { name: 'Study', icon: 'auto_stories' },
    { name: 'Club', icon: 'groups' },
    { name: 'Lecture', icon: 'record_voice_over' },
    { name: 'Hiring', icon: 'badge' },
    { name: 'Networking', icon: 'hub' },
    { name: 'Workshop', icon: 'handyman' },
    { name: 'Pitch', icon: 'rocket_launch' },
    { name: 'Panel', icon: 'co_present' },
    { name: 'Social', icon: 'local_pizza' },
    { name: 'Sports', icon: 'fitness_center' },
    { name: 'Games', icon: 'sports_esports' },
    { name: 'Wellness', icon: 'self_improvement' },
    { name: 'Gallery', icon: 'palette' },
    { name: 'Campus', icon: 'school' },
] as const;

export default function CategoryBar({ active, onChange }: { active: string, onChange: (val: any) => void }) {

    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative group w-full border-b border-zinc-100 bg-white sticky top-0 z-30 mb-8">

            {/* Left Arrow */}
            <AnimatePresence>
                {showLeftArrow && (
                    <motion.button
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-0 bottom-0 z-40 px-4 bg-gradient-to-r from-white via-white to-transparent"
                    >
                        <span className="material-symbols-outlined text-zinc-400 hover:text-zinc-900 transition-colors">chevron_left</span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="w-full overflow-x-auto no-scrollbar"
            >
                <div className="max-w-7xl mx-auto flex flex-row items-center px-8 py-4 gap-12 min-w-max">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => onChange(cat.name)}
                            className="group flex flex-col items-center gap-2 outline-none border-none bg-transparent cursor-pointer shrink-0"
                        >
                            <motion.span
                                className="material-symbols-outlined"
                                animate={{
                                    // Spring up by 4 pixels when active
                                    y: active === cat.name ? -4 : 0,
                                    scale: active === cat.name ? 1.15 : 1
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10, // Lower damping = more "bounce"
                                    mass: 1
                                }}
                                style={{
                                    fontSize: '20px',
                                    background: active === cat.name
                                        ? 'linear-gradient(135deg, #00F5D4 0%, #00BBF9 100%)'
                                        : 'none',
                                    WebkitBackgroundClip: active === cat.name ? 'text' : 'unset',
                                    WebkitTextFillColor: active === cat.name ? 'transparent' : 'unset',
                                    color: active === cat.name ? 'transparent' : '#7e7e86',
                                    fontWeight: active === cat.name ? '600' : '400',
                                    opacity: active === cat.name ? 1 : 0.4,
                                    filter: active === cat.name ? 'drop-shadow(0 0 8px rgba(0, 245, 212, 0.4))' : 'none'
                                }}
                            >
                                {cat.icon}
                            </motion.span>
                            <span className={`text-[9px] uppercase tracking-[0.1em] transition-all duration-300 font-bold ${
                                active === cat.name ? 'text-zinc-900' : 'text-zinc-300'
                            }`}>
                                {cat.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            <AnimatePresence>
                {showRightArrow && (
                    <motion.button
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-0 bottom-0 z-40 px-4 bg-gradient-to-l from-white via-white to-transparent text-right"
                    >
                        <span className="material-symbols-outlined text-zinc-400 hover:text-zinc-900 transition-colors">chevron_right</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}