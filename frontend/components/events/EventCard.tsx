// components/events/EventCard.tsx

interface EventProps {
    title: string;
    organizer: string; // Add this line
    category: string;
    date: string;
    location: string;
}

export default function EventCard({ title, organizer, category, date, location }: EventProps) {
    return (
        <div className="group relative bg-white rounded-[2rem] p-6 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-[#F1F4F4] text-[#4FDBC8] text-[10px] font-black uppercase tracking-wider">
                    {category}
                </span>
                <span className="text-sm font-bold text-[#727876]">{date}</span>
            </div>

            <h3 className="text-xl font-black text-[#171A1A] mb-1 leading-tight group-hover:text-[#4FDBC8] transition-colors">
                {title}
            </h3>

            <p className="text-xs font-bold text-[#4FDBC8] mb-4 uppercase tracking-tight">
                by {organizer}
            </p>

            <div className="flex items-center gap-1 text-[#727876]">
                <span className="material-symbols-outlined !text-[16px]">location_on</span>
                <span className="text-xs font-bold">{location}</span>
            </div>
        </div>
    );
}