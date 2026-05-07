// components/events/DiscoveryHeader.tsx
export default function DiscoveryHeader() {
    return (
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
            <p className="text-[#518077] font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                Amivent · Discovery
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-[#171A1A] tracking-tighter leading-[0.9] mb-4">
                Events near <span className="text-[#4FDBC8]">Dubai, AE</span>
            </h1>
            <p className="text-[#727876] text-sm font-bold max-w-md">
                Discover what's happening across campus and your local community.
            </p>
        </div>
    );
}