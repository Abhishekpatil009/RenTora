'use client';

import { GearItem } from '../types';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialData: GearItem | null;
};

export default function ProductModal({ isOpen, onClose, initialData }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50">
      <div className="bg-[#12131C] p-8 rounded-3xl w-full max-w-lg">
        <h3 className="text-xl font-bold mb-6">
          {initialData ? 'Edit Item' : 'Add New Gear'}
        </h3>

        <form className="space-y-4">
          <input
            className="w-full bg-[#0D1117] border border-white/10 rounded-xl p-3"
            placeholder="Title"
            defaultValue={initialData?.title}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              className="bg-[#0D1117] border border-white/10 rounded-xl p-3"
              placeholder="Price"
              defaultValue={initialData?.price}
            />

            <select className="bg-[#0D1117] border border-white/10 rounded-xl p-3">
              <option>Cameras</option>
              <option>Drones</option>
              <option>Bikes</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-white/5 py-3 rounded-xl"
            >
              Cancel
            </button>
            <button className="flex-1 bg-[#5A80E9] py-3 rounded-xl text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
