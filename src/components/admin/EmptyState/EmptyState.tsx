import { ImageIcon } from 'lucide-react';

export default function EmptyState({ label }: { label: string }) {
  return (
    <div className="py-32 text-center opacity-60">
      <ImageIcon className="mx-auto mb-4" size={32} />
      <p className="uppercase text-sm font-bold">
        No entries found in {label}
      </p>
    </div>
  );
}
