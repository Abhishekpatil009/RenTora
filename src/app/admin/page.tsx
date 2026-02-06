'use client';

import { useState } from 'react';
import Sidebar from "@/components/admin/Sidebar/Sidebar";
import ProductModal from '@/components/admin/ProductModal/ProductModal';
import StatCard from '@/components/admin/StatCard/StatCard';
import EmptyState from '@/components/admin/EmptyState/EmptyState';

import {
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Filter,
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex text-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="ml-64 p-10 w-full">
        <h1 className="text-3xl font-bold mb-10">{activeTab}</h1>

        {activeTab === 'Overview' && (
          <div className="grid grid-cols-4 gap-6">
            <StatCard
              title="Revenue"
              value="₹42,850"
              change="+12%"
              trend="up"
              icon={ArrowUpRight}
            />
            <StatCard
              title="Active"
              value="08"
              change="+2"
              trend="up"
              icon={Clock}
            />
            <StatCard
              title="Rating"
              value="4.9"
              change="0.0"
              trend="up"
              icon={CheckCircle2}
            />
            <StatCard
              title="Views"
              value="1,240"
              change="-3%"
              trend="down"
              icon={Filter}
            />
          </div>
        )}

        {(activeTab === 'Bookings' || activeTab === 'Favourites') && (
          <EmptyState label={activeTab} />
        )}
      </main>

      <ProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        initialData={null}
      />
    </div>
  );
}
