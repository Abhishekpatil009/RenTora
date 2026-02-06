'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MOCK_ITEMS } from '@/dataForDetails/rentalDetails.data';
import type { RentalItem } from '@/dataForDetails/rental.types';

import Navbar from '@/components/landingPage/header/Header';
import HeaderSection from '@/components/RentalsDetails/HeaderSection/HeaderSection';
import ImageGallery from '@/components/RentalsDetails/ImageGallery/ImageGallery';
import OwnerSection from '@/components/RentalsDetails/OwnerSection/OwnerSection';
import DescriptionSection from '@/components/RentalsDetails/DescriptionSection/DescriptionSection';
import SpecsSection from '@/components/RentalsDetails/SpecsSection/SpecsSection';
import TrustSection from '@/components/RentalsDetails/TrustSection/TrustSection';
import BookingCard from '@/components/RentalsDetails/BookingCard/BookingCard';

export default function RentalDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<RentalItem | null>(null);

  useEffect(() => {
    const found = MOCK_ITEMS.find((i) => i.id === id);
    setItem(found ?? null);
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#0D1117] text-white flex items-center justify-center">
        Item not found
      </div>
    );
  }

  return (
    <div className="bg-[#0D1117] text-white min-h-screen">
      <Navbar />

      <main className="pt-28 px-6 max-w-[1900px] mx-auto space-y-20">
        <HeaderSection data={item} />
        <ImageGallery images={item.images} />

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-14">
            <OwnerSection owner={item.owner} />
            <DescriptionSection text={item.description} />
            <SpecsSection specs={item.features} />
            <TrustSection />
          </div>

          <BookingCard
            price={item.pricePerDay}
            deposit={item.securityDeposit}
          />
        </div>
      </main>
    </div>
  );
}
