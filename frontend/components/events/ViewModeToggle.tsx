// components/events/ViewModeToggle.tsx
export default function ViewModeToggle({ mode, onChange, count }: any) {
    return (
        <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-between items-center">
            <p className="text-[10px] font-black text-[#727876] uppercase tracking-[0.1em]">
                {count} Events Found
            </p>
            <div className="flex gap-1 bg-zinc-100 p-1 rounded-xl">
                {['grid', 'list'].map((m) => (
                    <button
                        key={m}
                        onClick={() => onChange(m)}
                        className={`p-2 rounded-lg transition-all ${mode === m ? 'bg-white shadow-sm' : 'opacity-40 hover:opacity-100'}`}
                    >
                        <span className="material-symbols-outlined !text-[20px]">{m === 'grid' ? 'grid_view' : 'view_list'}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}