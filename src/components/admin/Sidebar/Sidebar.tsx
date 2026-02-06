'use client';

import {
  LayoutDashboard,
  Package,
  Calendar,
  Heart,
  MessageSquare,
} from 'lucide-react';

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const items = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'My Gear', icon: Package },
  { label: 'Bookings', icon: Calendar },
  { label: 'Favourites', icon: Heart },
  { label: 'Messages', icon: MessageSquare },
];

export default function Sidebar({ activeTab, setActiveTab }: Props) {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#12131C] border-r border-white/5">
      <div className="p-8 font-bold text-xl">Rentora</div>

      <nav className="px-4 space-y-1">
        {items.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${
              activeTab === label
                ? 'bg-[#5A80E9] text-white'
                : 'text-[#C5C8D7] hover:bg-white/5'
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
