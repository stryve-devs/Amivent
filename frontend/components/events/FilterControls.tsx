import FilterDropdown from './FilterDropdown';

export default function FilterControls({
                                           search, setSearch,
                                           dateFilter, setDateFilter,
                                           typeFilter, setTypeFilter,
                                           distanceFilter, setDistanceFilter
                                       }: any) {
    return (
        <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-row items-center gap-4">

            {/* Search Input - flex-1 makes it take available space while shrinking */}
            <div className="relative group flex-1">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 !text-[20px] group-focus-within:text-[#4FDBC8] transition-colors">
          search
        </span>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search events..."
                    className="w-full bg-zinc-100 rounded-2xl py-2.5 pl-11 pr-4 text-sm font-bold outline-none border-2 border-transparent focus:border-[#4FDBC8]/20 focus:bg-white transition-all shadow-inner"
                />
            </div>

            {/* Filters Row - Placed to the right of the search bar[cite: 5, 6] */}
            <div className="flex items-center gap-2 shrink-0">

                <FilterDropdown
                    label="Any day"
                    currentValue={dateFilter}
                    options={['Any day', 'Today', 'Tomorrow', 'This week']}
                    icon="schedule"
                    onSelect={setDateFilter}
                />

                <FilterDropdown
                    label="Any type"
                    currentValue={typeFilter}
                    options={['Any mode', 'Online', 'In person', 'Hybrid']}
                    icon="videocam"
                    onSelect={setTypeFilter}
                />

                <FilterDropdown
                    label="Distance"
                    currentValue={`Within ${distanceFilter} km`}
                    options={['5 km', '10 km', '25 km', '50 km']}
                    icon="map"
                    onSelect={(val: string) => setDistanceFilter(parseInt(val))}
                />

                <button
                    onClick={() => {
                        setSearch('');
                        setDateFilter('Any day');
                        setTypeFilter('Any type');
                        setDistanceFilter(30);
                    }}
                    className="text-[#4FDBC8] font-semibold text-sm px-1.5 translate-y-2 hover:underline transition-all"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}