'use client';

import { useState, useEffect, useMemo } from 'react';
import Navbar from './Navbar';
import CategoryFilters from './CategoryFilters';
import ProductCard from './ProductCard';
import type { RentalItem, RentalCategory } from '@/dataForDetails/rental.types';

type CategoryFilter = RentalCategory | 'All';

export default function RentalsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [items, setItems] = useState<RentalItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch('/api/rentals');
        if (!res.ok) {
          throw new Error('Failed to fetch rentals');
        }

        const data: RentalItem[] = await res.json();
        setItems(data);
      } catch (err) {
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === 'All' || item.category === category)
    );
  }, [items, search, category]);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Navbar onSearch={setSearch} />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="mb-14 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              Explore <span className="text-[#5A80E9]">Rentals</span>
            </h1>
            <p className="text-[#C5C8D7]">
              Access premium gear from trusted owners.
            </p>
          </div>

          <CategoryFilters active={category} onSelect={setCategory} />

          {loading && (
            <p className="text-center text-[#C5C8D7] mt-10">
              Loading products...
            </p>
          )}

          {!loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))
              ) : (
                <p className="col-span-full text-center text-[#C5C8D7]">
                  No products found for "{search}"
                </p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
