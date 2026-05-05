import { useState, useRef, useEffect } from 'react';

export default function FilterDropdown({ label, currentValue, options, icon, onSelect }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Closes the menu if you click anywhere else on the screen
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-full bg-white hover:bg-zinc-50 transition-all shadow-sm"
            >
                <span className="material-symbols-outlined !text-[20px] text-zinc-600">{icon}</span>
                <span className="text-sm font-bold text-[#171A1A]">{currentValue || label}</span>
                <span className={`material-symbols-outlined !text-[18px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
            </button>

            {isOpen && (
                <div className="absolute top-12 left-0 w-64 bg-white border border-zinc-100 rounded-[2rem] shadow-2xl z-50 p-4 flex flex-col gap-1">
                    {options.map((opt: any) => (
                        <button
                            key={opt}
                            className={`flex items-center justify-between py-3 px-4 hover:bg-zinc-50 rounded-2xl transition-all ${currentValue === opt ? 'text-[#8B5CF6]' : 'text-zinc-700'}`}
                            onClick={() => { onSelect(opt); setIsOpen(false); }}
                        >
                            <span className="font-bold text-sm">{opt}</span>
                            {currentValue === opt && <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}