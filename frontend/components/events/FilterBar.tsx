// components/events/FilterBar.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterDropdown from './FilterDropdown';

export default function FilterBar({
                                      search, setSearch,
                                      dateFilter, setDateFilter,
                                      typeFilter, setTypeFilter,
                                      distanceFilter, setDistanceFilter
                                  }: any) {

    // 1. Logic to check if ANY filter is currently active
    const hasActiveFilters =
        search !== '' ||
        dateFilter !== 'Any day' ||
        typeFilter !== 'Any mode' ||
        distanceFilter !== 30;

    // 2. The Reset Function
    const handleClearFilters = () => {
        setSearch('');
        setDateFilter('Any day');
        setTypeFilter('Any mode');
        setDistanceFilter(30);
    };

    return (
        <div className="sticky top-20 z-40 w-full bg-white/60 backdrop-blur-xl border-b border-zinc-100 overflow-visible">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 overflow-visible">
                <div className="flex items-center gap-3 w-full overflow-visible">

                    {/* Search Bar */}
                    <div className="relative flex-1 min-w-[120px] group">
                        <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-3 text-zinc-400 !text-[18px]">search</span>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                className="w-full bg-zinc-100/50 rounded-xl py-2 pl-9 pr-3 text-sm font-bold outline-none border border-transparent focus:bg-white focus:border-zinc-200 transition-all"
                            />
                        </div>
                    </div>

                    {/* Filter Dropdowns */}
                    <div className="flex items-center gap-2 shrink-0">
                        <FilterDropdown
                            label="Day"
                            currentValue={dateFilter}
                            options={['Any day', 'Today', 'Tomorrow', 'This week']}
                            icon="calendar_today"
                            onSelect={setDateFilter}
                        />

                        <FilterDropdown
                            label="Type"
                            currentValue={typeFilter}
                            options={['Any mode', 'Online', 'In person', 'Hybrid']}
                            icon="videocam"
                            onSelect={setTypeFilter}
                        />

                        <FilterDropdown
                            label="Dist"
                            currentValue={distanceFilter === 30 ? null : `${distanceFilter} KM`}
                            options={['5 KM', '10 KM', '25 KM', '50 KM']}
                            icon="map"
                            onSelect={(val: string) => setDistanceFilter(parseInt(val.replace(/\D/g, '')))}
                        />
                    </div>

                    {/* 3. Conditional Reset Button with Animation */}
                    <AnimatePresence>
                        {hasActiveFilters && (
                            <motion.button
                                initial={{ opacity: 0, width: 0, scale: 0.8 }}
                                animate={{ opacity: 1, width: 'auto', scale: 1 }}
                                exit={{ opacity: 0, width: 0, scale: 0.8 }}
                                onClick={handleClearFilters}
                                className="h-10 px-4 rounded-xl bg-red-50 text-red-600 shrink-0 flex items-center gap-1.5 hover:bg-red-100 transition-colors overflow-hidden whitespace-nowrap"
                            >
                                <span className="material-symbols-outlined !text-[16px]">close</span>
                                <span className="text-[11px] font-black uppercase tracking-wider">Clear</span>
                            </motion.button>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
}