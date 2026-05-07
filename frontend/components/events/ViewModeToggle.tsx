// components/events/ViewModeToggle.tsx
import { motion } from 'framer-motion';

export default function ViewModeToggle({ mode, onChange, count }: any) {
    return (
        <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
            {/* Left Side: Stats with cleaner typography */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#00F5D4]" />
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
                        Discovery Engine
                    </p>
                </div>
                <h2 className="text-l font-black text-[#171A1A]">
                    {count} <span className="text-zinc-300 font-medium ">Results</span>
                </h2>
            </div>

            {/* Right Side: Animated Toggle Switch */}
            <div className="flex gap-1 bg-zinc-50 p-1.5 rounded-2xl border border-zinc-100 relative shadow-inner">
                {['grid', 'list'].map((m) => {
                    const isActive = mode === m;
                    return (
                        <button
                            key={m}
                            onClick={() => onChange(m)}
                            className={`relative p-2.5 rounded-xl transition-colors duration-300 z-10 flex items-center justify-center ${
                                isActive ? 'text-[#171A1A]' : 'text-zinc-400 hover:text-zinc-600'
                            }`}
                        >
                            {/* Sliding Background */}
                            {isActive && (
                                <motion.div
                                    layoutId="toggleBackground"
                                    className="absolute inset-0 bg-white shadow-sm border border-zinc-100 rounded-xl z-[-1]"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}

                            <span
                                className="material-symbols-outlined !text-[20px]"
                                style={{
                                    fontVariationSettings: isActive ? "'FILL' 1, 'wght' 700" : "'FILL' 0, 'wght' 400"
                                }}
                            >
                                {m === 'grid' ? 'grid_view' : 'view_headline'}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}