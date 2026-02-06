import { LucideIcon } from 'lucide-react';

type Props = {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
};

export default function StatCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
}: Props) {
  return (
    <div className="p-6 bg-[#12131C] border border-white/5 rounded-2xl flex justify-between">
      <div>
        <p className="text-xs text-[#C5C8D7] uppercase">{title}</p>
        <div className="flex gap-2 items-baseline">
          <p className="text-2xl font-bold text-white">{value}</p>
          <span
            className={`text-xs ${
              trend === 'up' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {change}
          </span>
        </div>
      </div>
      <div className="w-10 h-10 bg-[#5A80E9]/10 rounded-xl flex items-center justify-center text-[#5A80E9]">
        <Icon size={18} />
      </div>
    </div>
  );
}
