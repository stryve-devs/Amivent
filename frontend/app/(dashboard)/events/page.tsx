import React from 'react';

export default function EventsPage() {
    return (
        <div>
            <h2 className="text-2xl text-slate-400 font-bold mb-4">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* You'll build your Event Cards here next */}
                <div className="h-64 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
                    Event Card Placeholder
                </div>
            </div>
        </div>
    );
}