import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FilterDropdown({ label, currentValue, options, icon, onSelect }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-x-2 px-3 py-2 rounded-xl border transition-all shrink-0 shadow-sm
                    ${isOpen ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-100 bg-white hover:border-zinc-400'}`}
            >
                <span className="material-symbols-outlined !text-[16px] text-zinc-900">{icon}</span>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#171A1A] whitespace-nowrap">
                    {currentValue || label}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="material-symbols-outlined !text-[16px] text-zinc-400"
                >
                    expand_more
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-[calc(100%+12px)] left-0 w-48 bg-white border border-zinc-100 rounded-2xl shadow-2xl z-[100] p-2 flex flex-col gap-1"
                    >

                        {options.map((opt: any) => {
                            // 1. The Standard Match: Checks exact text (Handles Day and Type perfectly)
                            const isExactMatch = currentValue === opt;

                            // 2. The Number Match: ONLY runs if the option actually contains a digit (Handles "KM")
                            const hasDigits = /\d/.test(opt);
                            const isDistanceMatch =
                                hasDigits &&
                                currentValue !== null &&
                                currentValue?.toString().replace(/\D/g, '') === opt.toString().replace(/\D/g, '');

                            // 3. The Final Check: True if either condition is met
                            const isSelected = isExactMatch || isDistanceMatch;

                            return (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => {
                                        onSelect(opt);
                                        setIsOpen(false);
                                    }}
                                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl w-full text-left transition-all
                ${isSelected
                                        ? 'bg-[#518077] text-white shadow-md' // Active state
                                        : 'hover:bg-zinc-50 text-zinc-900'    // Inactive state
                                    }`}
                                >
                                    <span className="font-black text-[10px] uppercase tracking-tight">{opt}</span>
                                    {isSelected && <span className="material-symbols-outlined !text-[14px]">check</span>}
                                </button>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}