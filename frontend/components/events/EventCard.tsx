import { motion } from 'framer-motion';

export default function EventCard({ event, viewMode }: any) {
    const isList = viewMode === 'list';

    return (
        <motion.div
            layout // Standard layout for the card shell
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 33, // High damping is key to stop the 'jiggle'
                layout: { duration: 0.35 }
            }}
            whileHover={{ scale: 1.005, borderColor: '#00D1B2' }}
            className={`group relative bg-white border border-zinc-100 overflow-hidden transition-colors duration-300
                ${isList ? 'flex flex-row items-center p-4 rounded-2xl gap-6' : 'flex flex-col h-full rounded-[2rem] p-6 shadow-sm'}`}
        >
            {/* CRITICAL FIX: Use layout="position" on internal wrappers.
                This prevents the 'shaking' text effect.
            */}
            <motion.div
                layout="position"
                className={`flex ${isList ? 'flex-row items-center gap-6 flex-1' : 'flex-col flex-1'}`}
            >
                {/* Live Indicator */}
                <motion.div layout="position" className={`flex items-center gap-3 ${isList ? 'min-w-[100px]' : 'mb-4 justify-between w-full'}`}>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping-red absolute inline-flex h-full w-full rounded-full bg-[#FF4D4D] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4D4D]"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase text-[#FF4D4D] tracking-tighter">Live</span>
                    </div>
                    {!isList && (
                        <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{event.category}</span>
                    )}
                </motion.div>

                {/* Title and Club: min-h prevents height snapping */}
                <motion.div layout="position" className={`${isList ? 'flex-1' : 'mb-4 min-h-[60px]'}`}>
                    <h3 className={`${isList ? 'text-sm' : 'text-lg'} font-bold text-[#171A1A] leading-tight group-hover:text-[#518077] transition-colors line-clamp-2`}>
                        {event.title}
                    </h3>
                    <p className="text-[10px] font-black text-[#00D1B2] uppercase tracking-tight mt-0.5">
                        @{event.club}
                    </p>
                </motion.div>

                {/* Metadata: Fixed width/height icons prevent layout shifting */}
                <motion.div layout="position" className={`flex ${isList ? 'hidden md:flex items-center gap-4' : 'flex-col gap-2 mt-auto pb-2'}`}>
                    <div className="flex items-center gap-2 text-zinc-400 min-w-[80px]">
                        <span className="material-symbols-outlined !text-[16px] shrink-0">schedule</span>
                        <span className="text-[11px] font-bold whitespace-nowrap">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                        <span className="material-symbols-outlined !text-[16px] shrink-0">location_on</span>
                        <span className="text-[11px] font-bold truncate max-w-[150px]">{event.location}</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Action Section */}
            <motion.div layout="position" className={`flex items-center gap-4 ${isList ? 'ml-auto' : 'mt-4 pt-4 border-t border-zinc-50 justify-between w-full'}`}>
                <div className={`${isList ? 'hidden sm:block' : 'flex flex-col'}`}>
                    <span className="text-[9px] font-black text-zinc-300 uppercase block leading-none">Capacity</span>
                    <span className="text-[11px] font-bold text-zinc-900">{event.attendees} going</span>
                </div>

                <button className="h-9 px-5 bg-[#171A1A] hover:bg-[#00D1B2] text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shrink-0">
                    {isList ? 'Join' : 'Register'}
                    <span className="material-symbols-outlined !text-[14px]">bolt</span>
                </button>
            </motion.div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#00D1B2] group-hover:w-1/3 transition-all duration-500 rounded-full" />
        </motion.div>
    );
}