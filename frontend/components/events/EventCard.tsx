// components/events/EventCard.tsx
import { motion } from 'framer-motion';

export default function EventCard({ event, viewMode }: any) {
    const isList = viewMode === 'list';

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`group relative bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 
                ${isList ? 'flex items-center gap-6 p-4 rounded-2xl' : 'rounded-[2rem] p-6'}`}
        >
            {!isList && (
                <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#F1F4F4] text-[#4FDBC8] text-[10px] font-black uppercase">{event.category}</span>
                    <span className="text-sm font-bold text-[#727876]">{event.date}</span>
                </div>
            )}

            <div className="flex-1">
                <h3 className={`${isList ? 'text-lg' : 'text-xl'} font-black text-[#171A1A] mb-1 group-hover:text-[#4FDBC8] transition-colors`}>
                    {event.title}
                </h3>
                <p className="text-xs font-bold text-[#4FDBC8] mb-4 uppercase">by {event.club}</p>

                <div className="flex items-center gap-1 text-[#727876]">
                    <span className="material-symbols-outlined !text-[16px]">location_on</span>
                    <span className="text-xs font-bold">{event.location}</span>
                </div>
            </div>

            {isList && (
                <button className="bg-[#171A1A] text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase">
                    Register
                </button>
            )}
        </motion.div>
    );
}