// components/events/CategoryBar.tsx
import { motion } from 'framer-motion';

const CATEGORIES = [
    { name: 'All', icon: 'grid_view', bg: '#F1F4F4' },
    { name: 'Study', icon: 'auto_stories', bg: '#E0F2FE' },
    { name: 'Club', icon: 'groups', bg: '#DCFCE7' },
    { name: 'Lecture', icon: 'record_voice_over', bg: '#F3E8FF' },
    { name: 'Hiring', icon: 'badge', bg: '#FEF3C7' },
    { name: 'Networking', icon: 'hub', bg: '#DCFCE7' },
    { name: 'Workshop', icon: 'handyman', bg: '#FFEDD5' },
    { name: 'Pitch', icon: 'rocket_launch', bg: '#E0F2FE' },
    { name: 'Panel', icon: 'co_present', bg: '#FCE7F3' },
    { name: 'Social', icon: 'local_pizza', bg: '#FEF3C7' },
    { name: 'Sports', icon: 'fitness_center', bg: '#DCFCE7' },
    { name: 'Games', icon: 'sports_esports', bg: '#F3E8FF' },
    { name: 'Wellness', icon: 'self_improvement', bg: '#FCE7F3' },
    { name: 'Gallery', icon: 'palette', bg: '#E0F2FE' },
    { name: 'Campus', icon: 'school', bg: '#F3E8FF' },
] as const;

export default function CategoryBar({ active, onChange }: { active: string, onChange: (val: any) => void }) {
    return (
        <div className="w-full overflow-x-auto no-scrollbar border-b border-zinc-100 bg-white sticky top-0 z-30 mb-8">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-12 min-w-max">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => onChange(cat.name)}
                        className="group flex flex-col items-center gap-2 outline-none border-none bg-transparent cursor-pointer"
                    >
                        {/* No background box: Just the icon */}
                        <span
                            className="material-symbols-outlined !text-[28px] transition-all duration-300 group-hover:scale-110"
                            style={{
                                color: active === cat.name ? '#171A1A' : '#727876',
                                fontWeight: active === cat.name ? '700' : '400'
                            }}
                        >
                            {cat.icon}
                        </span>

                        {/* Simple text label */}
                        <span className={`text-[11px] font-bold tracking-tight transition-colors ${
                            active === cat.name ? 'text-[#171A1A]' : 'text-[#727876]'
                        }`}>
                            {cat.name}
                        </span>

                        {/* Optional: Subtle underline for active state */}
                        {active === cat.name && (
                            <motion.div
                                layoutId="activeIndicator"
                                className="h-[2px] w-4 bg-[#171A1A] rounded-full mt-1"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}