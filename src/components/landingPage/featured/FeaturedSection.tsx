import { MOCK_ITEMS } from '@/data/mockItems';
import FeaturedCard from './FeaturedCard';

const FeaturedSection = () => (
  <section className="py-24 px-12">
    <h2 className="text-5xl font-black mb-12">
      FEATURED <span className="text-[#5A80E9]">RENTALS</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {MOCK_ITEMS.map((item, index) => (
        <FeaturedCard
          key={item.id}
          item={item}
          index={index}
        />
      ))}
    </div>
  </section>
);

export default FeaturedSection;
