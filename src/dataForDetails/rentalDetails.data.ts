import { RentalItem } from '@/dataForDetails/rental.types';

export const MOCK_ITEMS: RentalItem[] = [
  // --- CAMERAS (1-10) ---
  {
    id: '1',
    title: 'Sony Alpha a7 IV Mirrorless Camera',
    category: 'Cameras',
    pricePerDay: 2500,
    securityDeposit: 15000,
    rating: 4.9,
    reviews: 128,
    location: 'Bandra West, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The Sony a7 IV is the ultimate hybrid camera, perfect for professional photography and cinematic videography.`,
    features: ['33MP Full-Frame Sensor', '4K 60p Video', 'Included 24-70mm f/2.8 Lens'],
    owner: { id: 'owner1', name: 'Prateek Sharma', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=1', joined: '2022', responseTime: '< 2 hours' }
  },
  {
    id: '2',
    title: 'Fujifilm X-T5 Mirrorless',
    category: 'Cameras',
    pricePerDay: 1800,
    securityDeposit: 10000,
    rating: 4.8,
    reviews: 56,
    location: 'Colaba, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1590250753491-0e8696803734?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1621252003738-99996d93467f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1614066265731-016462996d41?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Classic styling with modern tech. 40MP sensor and incredible film simulations.`,
    features: ['40.2MP X-Trans Sensor', '6.2K Video', 'Vintage Aesthetic Dials'],
    owner: { id: 'owner4', name: 'Arjun Das', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=4', joined: '2023', responseTime: '< 1 hour' }
  },
  {
    id: '3',
    title: 'GoPro Hero 12 Black',
    category: 'Cameras',
    pricePerDay: 800,
    securityDeposit: 3000,
    rating: 4.7,
    reviews: 210,
    location: 'Goa',
    images: [
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1469395446868-ff6a048d54c4?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Rugged, waterproof, and perfect for action shots on land or sea.`,
    features: ['5.3K Video', 'HyperSmooth 6.0', 'Includes 3 Mounts'],
    owner: { id: 'owner5', name: 'Sanjay V.', level: 'Novice', avatar: 'https://i.pravatar.cc/150?u=5', joined: '2024', responseTime: '< 4 hours' }
  },
  {
    id: '4',
    title: 'Canon EOS R5',
    category: 'Cameras',
    pricePerDay: 3500,
    securityDeposit: 25000,
    rating: 4.9,
    reviews: 84,
    location: 'GK 1, Delhi',
    images: [
      'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1617005081973-22f307849e88?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1617005083168-12e0300f898a?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The 8K resolution powerhouse for the most demanding commercial shoots.`,
    features: ['45MP Sensor', '8K RAW Video', 'In-body Stabilization'],
    owner: { id: 'owner6', name: 'Delhi Studios', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=6', joined: '2021', responseTime: 'Instant' }
  },
  {
    id: '5',
    title: 'Nikon Z9 Flagship',
    category: 'Cameras',
    pricePerDay: 4000,
    securityDeposit: 30000,
    rating: 5.0,
    reviews: 12,
    location: 'Whitefield, Bangalore',
    images: [
      'https://images.unsplash.com/photo-1632765351291-a1286c757c23?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1635843237142-b673297a7d45?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1635843237177-3363dfd71485?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Professional speed for sports and wildlife photography. No mechanical shutter.`,
    features: ['45.7MP Sensor', '20fps Burst Mode', 'Built-in GPS'],
    owner: { id: 'owner7', name: 'Vikram Mehta', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=7', joined: '2022', responseTime: '< 3 hours' }
  },
  {
    id: '6',
    title: 'Panasonic GH6 Vlogger Kit',
    category: 'Cameras',
    pricePerDay: 1900,
    securityDeposit: 12000,
    rating: 4.6,
    reviews: 45,
    location: 'Salt Lake, Kolkata',
    images: [
      'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The micro four thirds king of unlimited recording. Great for YouTube content.`,
    features: ['5.7K 10-bit Video', 'Unlimited Recording Time', 'Leica 12-60mm Lens'],
    owner: { id: 'owner8', name: 'Creative Hub', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=8', joined: '2023', responseTime: '< 1 hour' }
  },
  {
    id: '7',
    title: 'Sony ZV-E10 II',
    category: 'Cameras',
    pricePerDay: 1200,
    securityDeposit: 7000,
    rating: 4.5,
    reviews: 33,
    location: 'Pune',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1614066265731-016462996d41?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Lightweight and perfect for travel vlogging and streaming.`,
    features: ['4K Video', 'Product Showcase Mode', 'Small Rig Cage Included'],
    owner: { id: 'owner9', name: 'Rohan P.', level: 'Novice', avatar: 'https://i.pravatar.cc/150?u=9', joined: '2024', responseTime: '< 6 hours' }
  },
  {
    id: '8',
    title: 'DJI Ronin 4D 6K',
    category: 'Cameras',
    pricePerDay: 6000,
    securityDeposit: 50000,
    rating: 5.0,
    reviews: 5,
    location: 'Film City, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1584839083234-8c01340b10ec?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1584839083313-057b542861c2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1584839083321-c42e5842861c2?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Professional cinema camera with integrated 4-axis gimbal.`,
    features: ['6K Raw Recording', 'ActiveTrack Pro', 'Lidar Focus System'],
    owner: { id: 'owner10', name: 'Production House', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=10', joined: '2020', responseTime: 'Instant' }
  },
  {
    id: '9',
    title: 'Blackmagic Pocket 6K Pro',
    category: 'Cameras',
    pricePerDay: 3000,
    securityDeposit: 18000,
    rating: 4.8,
    reviews: 29,
    location: 'HSR Layout, Bangalore',
    images: [
      'https://images.unsplash.com/photo-1596708147259-dec3a759162d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590250753491-0e8696803734?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The best color science for indie filmmakers. Internal ND filters included.`,
    features: ['6K BRAW recording', 'Dual Native ISO', 'Internal ND Filters'],
    owner: { id: 'owner11', name: 'Cinema Gear', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=11', joined: '2022', responseTime: '< 1 hour' }
  },
  {
    id: '10',
    title: 'Sony FX3 Cinema Camera',
    category: 'Cameras',
    pricePerDay: 4500,
    securityDeposit: 30000,
    rating: 4.9,
    reviews: 41,
    location: 'Andheri East, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1635843237142-b673297a7d45?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1632765351291-a1286c757c23?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Compact cinema line camera. Great for run-and-gun documentary style.`,
    features: ['S-Cinetone', '4K 120p', 'XLR Handle Included'],
    owner: { id: 'owner12', name: 'Lens Queen', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=12', joined: '2021', responseTime: '< 2 hours' }
  },

  // --- BIKES (11-20) ---
  {
    id: '11',
    title: 'Specialized Stumpjumper EVO',
    category: 'Bikes',
    pricePerDay: 1800,
    securityDeposit: 8000,
    rating: 4.8,
    reviews: 42,
    location: 'Indiranagar, Bengaluru',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1576435728678-68d0194ea7d5?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57e3080?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `High-performance full-suspension mountain bike for rough trails.`,
    features: ['Carbon Fiber Frame', 'FOX Float Shock', 'SRAM GX Drivetrain'],
    owner: { id: 'owner2', name: 'Sarah Jenkins', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=2', joined: '2023', responseTime: '< 30 mins' }
  },
  {
    id: '12',
    title: 'Trek Emonda SL 6 Pro',
    category: 'Bikes',
    pricePerDay: 2200,
    securityDeposit: 12000,
    rating: 4.9,
    reviews: 18,
    location: 'Koramangala, Bangalore',
    images: [
      'https://images.unsplash.com/photo-1502744691472-dc077b10053a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57e3080?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Lightweight road bike for distance and climbing enthusiasts.`,
    features: ['Shimano Ultegra Di2', 'Carbon Wheels', 'Weight: 7.2kg'],
    owner: { id: 'owner13', name: 'Pedal Power', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=13', joined: '2023', responseTime: '< 1 hour' }
  },
  {
    id: '13',
    title: 'Royal Enfield Classic 350',
    category: 'Bikes',
    pricePerDay: 1200,
    securityDeposit: 5000,
    rating: 4.6,
    reviews: 145,
    location: 'Lonavala',
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517406858237-4acf5539eb8c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Iconic retro motorcycle, perfect for cruising the scenic western ghats.`,
    features: ['Dual Channel ABS', 'Comfortable Seat', 'Fuel Efficient'],
    owner: { id: 'owner14', name: 'Roadies Rent', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=14', joined: '2022', responseTime: '< 2 hours' }
  },
  {
    id: '14',
    title: 'Ducati Panigale V4',
    category: 'Bikes',
    pricePerDay: 12000,
    securityDeposit: 80000,
    rating: 5.0,
    reviews: 4,
    location: 'Gachibowli, Hyderabad',
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Superbike performance for experienced riders only. Track days or luxury shoots.`,
    features: ['214 Horsepower', 'Brembo Brakes', 'Quick Shifter'],
    owner: { id: 'owner15', name: 'Superbike Club', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=15', joined: '2020', responseTime: 'Instant' }
  },
  {
    id: '15',
    title: 'BMW R1250 GS',
    category: 'Bikes',
    pricePerDay: 5500,
    securityDeposit: 40000,
    rating: 4.9,
    reviews: 23,
    location: 'Chandigarh',
    images: [
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517406858237-4acf5539eb8c?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The ultimate adventure touring bike for your Ladakh road trip.`,
    features: ['Heated Grips', 'Cruise Control', 'Panniers Included'],
    owner: { id: 'owner16', name: 'Leh Adventurer', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=16', joined: '2021', responseTime: '< 1 hour' }
  },
  {
    id: '16',
    title: 'Giant Propel Advanced',
    category: 'Bikes',
    pricePerDay: 2000,
    securityDeposit: 15000,
    rating: 4.8,
    reviews: 9,
    location: 'Gurugram',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1502744691472-dc077b10053a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57e3080?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Aero road bike for those looking for pure speed on flat roads.`,
    features: ['Aero Carbon Frame', 'SRAM Rival eTap', 'Disc Brakes'],
    owner: { id: 'owner17', name: 'Speed Cycles', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=17', joined: '2023', responseTime: '< 2 hours' }
  },
  {
    id: '17',
    title: 'Brompton Folding Bike',
    category: 'Bikes',
    pricePerDay: 700,
    securityDeposit: 5000,
    rating: 4.7,
    reviews: 31,
    location: 'South Delhi',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57e3080?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1502744691472-dc077b10053a?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Premium folding bike, perfect for commuters taking the metro.`,
    features: ['Ultra Compact Fold', 'Steel Frame', 'Weight: 11kg'],
    owner: { id: 'owner18', name: 'Metro Ride', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=18', joined: '2022', responseTime: '< 3 hours' }
  },
  {
    id: '18',
    title: 'Surly Long Haul Trucker',
    category: 'Bikes',
    pricePerDay: 1100,
    securityDeposit: 6000,
    rating: 4.8,
    reviews: 14,
    location: 'Mysore',
    images: [
      'https://images.unsplash.com/photo-1532298229144-0ec0c57e3080?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1502744691472-dc077b10053a?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The legendary touring bike for cross-country cycling trips.`,
    features: ['Steel Frame', 'Fenders & Racks', 'Triple Chainring'],
    owner: { id: 'owner19', name: 'Touring Co', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=19', joined: '2023', responseTime: '< 1 hour' }
  },
  {
    id: '19',
    title: 'Canyon Grail CF SL',
    category: 'Bikes',
    pricePerDay: 1600,
    securityDeposit: 9000,
    rating: 4.9,
    reviews: 7,
    location: 'Vasant Vihar, Delhi',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1532298229144-0ec0c57e3080?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1502744691472-dc077b10053a?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Gravel bike with unique hover bar. Perfect for mixed road/dirt paths.`,
    features: ['Hover Bar System', 'Wide Tires', 'Electronic Shifting'],
    owner: { id: 'owner20', name: 'Gravel King', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=20', joined: '2022', responseTime: 'Instant' }
  },
  {
    id: '20',
    title: 'Hero Lectro C5 Electric',
    category: 'Bikes',
    pricePerDay: 500,
    securityDeposit: 2500,
    rating: 4.4,
    reviews: 51,
    location: 'Chandni Chowk, Delhi',
    images: [
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517406858237-4acf5539eb8c?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Eco-friendly electric bicycle. Makes city commuting sweat-free.`,
    features: ['30km Range', 'Pedal Assist', 'Quick Charge'],
    owner: { id: 'owner21', name: 'Eco Cycle', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=21', joined: '2023', responseTime: '< 2 hours' }
  },

  // --- LAPTOPS (21-30) ---
  {
    id: '21',
    title: 'MacBook Pro 16" M3 Max',
    category: 'Laptops',
    pricePerDay: 4500,
    securityDeposit: 25000,
    rating: 5.0,
    reviews: 15,
    location: 'Cyber City, Gurugram',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1531297461136-82lw9b291530?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Ultimate power for creative professionals. Pre-loaded with Adobe Creative Suite.`,
    features: ['M3 Max Chip', '64GB RAM', '2TB SSD'],
    owner: { id: 'owner3', name: 'TechRentals Corp', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=3', joined: '2021', responseTime: 'Instant' }
  },
  {
    id: '22',
    title: 'ASUS ROG Zephyrus G14',
    category: 'Laptops',
    pricePerDay: 2500,
    securityDeposit: 15000,
    rating: 4.8,
    reviews: 22,
    location: 'Noida',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Compact gaming beast. Great for travel and high-end esports.`,
    features: ['RTX 4070 GPU', 'Ryzen 9', '120Hz Display'],
    owner: { id: 'owner22', name: 'Gaming Zone', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=22', joined: '2023', responseTime: '< 1 hour' }
  },
  {
    id: '23',
    title: 'Dell XPS 15',
    category: 'Laptops',
    pricePerDay: 2200,
    securityDeposit: 12000,
    rating: 4.7,
    reviews: 38,
    location: 'Worli, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The best Windows laptop for designers. InfinityEdge display.`,
    features: ['OLED 4K Display', 'Intel i9', 'CNC Aluminum Body'],
    owner: { id: 'owner23', name: 'Premium PC', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=23', joined: '2022', responseTime: '< 2 hours' }
  },
  {
    id: '24',
    title: 'MacBook Air M2',
    category: 'Laptops',
    pricePerDay: 1500,
    securityDeposit: 8000,
    rating: 4.9,
    reviews: 95,
    location: 'Jubilee Hills, Hyderabad',
    images: [
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Thin, light, and powerful. Perfect for students and writers.`,
    features: ['M2 Chip', '18hr Battery', 'Silent Fanless Design'],
    owner: { id: 'owner24', name: 'Kushal Tech', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=24', joined: '2023', responseTime: '< 4 hours' }
  },
  {
    id: '25',
    title: 'Razer Blade 15',
    category: 'Laptops',
    pricePerDay: 3000,
    securityDeposit: 18000,
    rating: 4.8,
    reviews: 14,
    location: 'Banjara Hills, Hyderabad',
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Premium gaming laptop. Sleek and incredibly fast.`,
    features: ['RTX 4080', '240Hz Display', 'RGB Keyboard'],
    owner: { id: 'owner25', name: 'Elite Gamer', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=25', joined: '2022', responseTime: '< 2 hours' }
  },
  {
    id: '26',
    title: 'Lenovo ThinkPad X1 Carbon',
    category: 'Laptops',
    pricePerDay: 1800,
    securityDeposit: 10000,
    rating: 4.7,
    reviews: 62,
    location: 'Nariman Point, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1531297461136-82lw9b291530?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The professional choice for business travel and productivity.`,
    features: ['Intel vPro', 'Carbon Fiber Chassis', 'Best-in-class Keyboard'],
    owner: { id: 'owner26', name: 'Corporate Rentals', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=26', joined: '2021', responseTime: '< 1 hour' }
  },
  {
    id: '27',
    title: 'Microsoft Surface Pro 9',
    category: 'Laptops',
    pricePerDay: 1400,
    securityDeposit: 7000,
    rating: 4.6,
    reviews: 29,
    location: 'Vashi, Navi Mumbai',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Tablet portability with laptop power. Great for digital artists.`,
    features: ['Touchscreen', 'Slim Pen 2 Included', 'Kickstand Design'],
    owner: { id: 'owner27', name: 'Artisan Hub', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=27', joined: '2023', responseTime: '< 3 hours' }
  },
  {
    id: '28',
    title: 'HP Spectre x360',
    category: 'Laptops',
    pricePerDay: 1700,
    securityDeposit: 9000,
    rating: 4.8,
    reviews: 41,
    location: 'Salt Lake, Kolkata',
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Convertible 2-in-1 laptop. Use as a tablet or laptop.`,
    features: ['OLED Touch Display', 'Gem Cut Design', 'Tilt Pen Included'],
    owner: { id: 'owner28', name: 'Kolkata Tech', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=28', joined: '2022', responseTime: '< 2 hours' }
  },
  {
    id: '29',
    title: 'Alienware m18 R2',
    category: 'Laptops',
    pricePerDay: 4000,
    securityDeposit: 25000,
    rating: 4.9,
    reviews: 6,
    location: 'Chandigarh',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Massive 18-inch gaming powerhouse. Desktop replacement.`,
    features: ['RTX 4090', '64GB RAM', 'Mechanical Keyboard'],
    owner: { id: 'owner29', name: 'Monster Tech', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=29', joined: '2024', responseTime: '< 1 hour' }
  },
  {
    id: '30',
    title: 'Samsung Galaxy Book3 Ultra',
    category: 'Laptops',
    pricePerDay: 2300,
    securityDeposit: 13000,
    rating: 4.7,
    reviews: 13,
    location: 'Vasant Kunj, Delhi',
    images: [
      'https://images.unsplash.com/photo-1531297461136-82lw9b291530?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The best integration for Samsung users. Incredible OLED screen.`,
    features: ['Dynamic AMOLED 2X', 'Ultra Thin', 'Galaxy Eco Sync'],
    owner: { id: 'owner30', name: 'Delhi Digital', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=30', joined: '2023', responseTime: '< 2 hours' }
  },

  // --- EQUIPMENT (31-40) ---
  {
    id: '31',
    title: 'DJI Mavic 3 Pro Cine Premium',
    category: 'Equipment',
    pricePerDay: 3200,
    securityDeposit: 20000,
    rating: 4.7,
    reviews: 89,
    location: 'Koramangala, Bengaluru',
    images: [
      'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The world's first triple-camera flagship drone for high-end cinematic shoots.`,
    features: ['Hasselblad Camera', '43 Min Flight Time', 'Apple ProRes Support'],
    owner: { id: 'owner1', name: 'Prateek Sharma', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=1', joined: '2022', responseTime: '< 2 hours' }
  },
  {
    id: '32',
    title: 'Godox SL60W Studio Light',
    category: 'Equipment',
    pricePerDay: 500,
    securityDeposit: 2000,
    rating: 4.6,
    reviews: 112,
    location: 'Chennai',
    images: [
      'https://images.unsplash.com/photo-1533035350251-aa8b8c208d95?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1540206395-6880f94903af?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Constant LED light for video. Includes softbox and stand.`,
    features: ['Daylight Balanced', 'Bowens Mount', 'Quiet Fan'],
    owner: { id: 'owner31', name: 'Lighting Lab', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=31', joined: '2022', responseTime: '< 1 hour' }
  },
  {
    id: '33',
    title: 'DJI Ronin RS3 Gimbal',
    category: 'Equipment',
    pricePerDay: 1000,
    securityDeposit: 6000,
    rating: 4.8,
    reviews: 67,
    location: 'Navi Mumbai',
    images: [
      'https://images.unsplash.com/photo-1584839083234-8c01340b10ec?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1512418490979-92798ccc9340?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1596708147259-dec3a759162d?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Professional stabilizer for mirrorless cameras. One-handed operation.`,
    features: ['Automated Axis Locks', '3kg Payload', 'Bluetooth Shutter'],
    owner: { id: 'owner32', name: 'Stabilize Pro', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=32', joined: '2021', responseTime: 'Instant' }
  },
  {
    id: '34',
    title: 'Aputure LS 600d Pro',
    category: 'Equipment',
    pricePerDay: 3500,
    securityDeposit: 20000,
    rating: 5.0,
    reviews: 14,
    location: 'Versova, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1540206395-6880f94903af?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1533035350251-aa8b8c208d95?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Extremely bright daylight COB LED. Industry standard for film.`,
    features: ['Weather Resistant', '0-100% Control', 'Wireless DMX'],
    owner: { id: 'owner10', name: 'Production House', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=10', joined: '2020', responseTime: 'Instant' }
  },
  {
    id: '35',
    title: 'Rode NTG5 Boom Kit',
    category: 'Equipment',
    pricePerDay: 1200,
    securityDeposit: 5000,
    rating: 4.8,
    reviews: 30,
    location: 'Bandra, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590602846989-e9750415a631?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Shotgun microphone kit with blimp and boom pole.`,
    features: ['Broadcast Sound', 'Ultra Lightweight', 'Includes DeadCat'],
    owner: { id: 'owner11', name: 'Cinema Gear', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=11', joined: '2022', responseTime: '< 1 hour' }
  },
  {
    id: '36',
    title: 'Hollyland Mars 400S Pro',
    category: 'Equipment',
    pricePerDay: 1500,
    securityDeposit: 8000,
    rating: 4.7,
    reviews: 21,
    location: 'Ahmedabad',
    images: [
      'https://images.unsplash.com/photo-1512418490979-92798ccc9340?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1596708147259-dec3a759162d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1540206395-6880f94903af?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Wireless video transmission system. Monitor your shot from 400ft.`,
    features: ['SDI & HDMI Support', '0.1s Latency', 'App Monitoring'],
    owner: { id: 'owner33', name: 'Techie Gear', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=33', joined: '2023', responseTime: '< 2 hours' }
  },
  {
    id: '37',
    title: 'Manfrotto Video Tripod',
    category: 'Equipment',
    pricePerDay: 600,
    securityDeposit: 2500,
    rating: 4.5,
    reviews: 90,
    location: 'Coimbatore',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1533035350251-aa8b8c208d95?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Fluid head tripod for smooth pans and tilts.`,
    features: ['Counterbalance System', 'Extendable Legs', 'Quick Release Plate'],
    owner: { id: 'owner34', name: 'Rigging Masters', level: 'Novice', avatar: 'https://i.pravatar.cc/150?u=34', joined: '2024', responseTime: '< 4 hours' }
  },
  {
    id: '38',
    title: 'Atomos Ninja V+ Monitor',
    category: 'Equipment',
    pricePerDay: 1300,
    securityDeposit: 7000,
    rating: 4.9,
    reviews: 32,
    location: 'Juhu, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1596708147259-dec3a759162d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1512418490979-92798ccc9340?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `5-inch 4K HDMI recording monitor. Perfect for ProRes RAW.`,
    features: ['1000 Nits Brightness', 'SSD Recording', 'HDR Preview'],
    owner: { id: 'owner12', name: 'Lens Queen', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=12', joined: '2021', responseTime: '< 2 hours' }
  },
  {
    id: '39',
    title: 'Sennheiser G4 Wireless Lapel',
    category: 'Equipment',
    pricePerDay: 900,
    securityDeposit: 4000,
    rating: 4.7,
    reviews: 55,
    location: 'Kochi',
    images: [
      'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590602846989-e9750415a631?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Industry standard wireless mic for interviews and film.`,
    features: ['UHF Frequency', 'Robust Metal Body', '8hr Battery'],
    owner: { id: 'owner35', name: 'Sound Waves', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=35', joined: '2023', responseTime: '< 1 hour' }
  },
  {
    id: '40',
    title: 'Teradek Bolt 500 XT',
    category: 'Equipment',
    pricePerDay: 2500,
    securityDeposit: 15000,
    rating: 4.8,
    reviews: 8,
    location: 'Film City, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1596708147259-dec3a759162d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1512418490979-92798ccc9340?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1540206395-6880f94903af?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Zero-delay wireless video for directors and pull-focus.`,
    features: ['SDI/HDMI Loop', '3D LUT Support', '500ft Range'],
    owner: { id: 'owner10', name: 'Production House', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=10', joined: '2020', responseTime: 'Instant' }
  },

  // --- AUDIO (41-45) ---
  {
    id: '41',
    title: 'Marshall Stanmore III',
    category: 'Audio',
    pricePerDay: 700,
    securityDeposit: 3000,
    rating: 4.8,
    reviews: 74,
    location: 'Indiranagar, Bangalore',
    images: [
      'https://images.unsplash.com/photo-1545459720-aac3e5c22128?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Vintage look, modern sound. Perfect for home parties or events.`,
    features: ['Bluetooth 5.2', 'Deep Bass', 'Iconic Design'],
    owner: { id: 'owner36', name: 'Audio Guru', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=36', joined: '2022', responseTime: '< 2 hours' }
  },
  {
    id: '42',
    title: 'Bose QuietComfort Ultra',
    category: 'Audio',
    pricePerDay: 500,
    securityDeposit: 2500,
    rating: 4.9,
    reviews: 142,
    location: 'Airport Road, Delhi',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `World-class noise cancellation. Ideal for long flights.`,
    features: ['Spatial Audio', '24hr Battery', 'CustomTune Tech'],
    owner: { id: 'owner37', name: 'Travel Tech', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=37', joined: '2023', responseTime: '< 1 hour' }
  },
  {
    id: '43',
    title: 'JBL PartyBox 310',
    category: 'Audio',
    pricePerDay: 1500,
    securityDeposit: 7000,
    rating: 4.7,
    reviews: 88,
    location: 'Pune',
    images: [
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1545459720-aac3e5c22128?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Massive sound with dynamic light show. Portable with wheels.`,
    features: ['240W Output', 'IPX4 Splashproof', 'Karaoke Input'],
    owner: { id: 'owner38', name: 'Event Gear', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=38', joined: '2022', responseTime: 'Instant' }
  },
  {
    id: '44',
    title: 'Focusrite Scarlett 2i2',
    category: 'Audio',
    pricePerDay: 400,
    securityDeposit: 1500,
    rating: 4.8,
    reviews: 205,
    location: 'Thane, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The go-to audio interface for home recording and podcasts.`,
    features: ['Air Mode', 'Two Preamps', 'USB-C Powered'],
    owner: { id: 'owner39', name: 'Studio One', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=39', joined: '2023', responseTime: '< 2 hours' }
  },
  {
    id: '45',
    title: 'Shure SM7B Microphone',
    category: 'Audio',
    pricePerDay: 800,
    securityDeposit: 3500,
    rating: 5.0,
    reviews: 132,
    location: 'Kandivali, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `The legendary podcast and vocal mic. Requires cloudlifter (included).`,
    features: ['Flat Response', 'Internal Shock Mount', 'Pop Filter Included'],
    owner: { id: 'owner40', name: 'Podcast Lab', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=40', joined: '2021', responseTime: 'Instant' }
  },

  // --- TOOLS (46-50) ---
  {
    id: '46',
    title: 'Bosch Professional Drill',
    category: 'Tools',
    pricePerDay: 300,
    securityDeposit: 1000,
    rating: 4.6,
    reviews: 320,
    location: 'Andheri West, Mumbai',
    images: [
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Heavy duty hammer drill for concrete and wood.`,
    features: ['Cordless', 'Two Batteries', 'Case Included'],
    owner: { id: 'owner41', name: 'Manish T.', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=41', joined: '2022', responseTime: '< 3 hours' }
  },
  {
    id: '47',
    title: 'Karcher K5 Pressure Washer',
    category: 'Tools',
    pricePerDay: 900,
    securityDeposit: 4000,
    rating: 4.7,
    reviews: 45,
    location: 'Saket, Delhi',
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Perfect for deep cleaning cars, patios, and outdoor furniture.`,
    features: ['145 Bar Pressure', 'Plug \'n\' Clean', 'Long Hose'],
    owner: { id: 'owner42', name: 'Clean Tech', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=42', joined: '2023', responseTime: '< 2 hours' }
  },
  {
    id: '48',
    title: 'Makita Mitre Saw',
    category: 'Tools',
    pricePerDay: 1200,
    securityDeposit: 6000,
    rating: 4.8,
    reviews: 19,
    location: 'Surat',
    images: [
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Precision cutting for woodworking projects. Powerful motor.`,
    features: ['Laser Guide', 'Dust Bag', 'Bevel Cutting'],
    owner: { id: 'owner43', name: 'Woodwork Shop', level: 'Elite Owner', avatar: 'https://i.pravatar.cc/150?u=43', joined: '2021', responseTime: '< 1 hour' }
  },
  {
    id: '49',
    title: 'Dremel 4000 Rotary Tool',
    category: 'Tools',
    pricePerDay: 400,
    securityDeposit: 1500,
    rating: 4.5,
    reviews: 156,
    location: 'Nagpur',
    images: [
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Versatile tool for carving, engraving, routing, and sanding.`,
    features: ['50 Accessories', 'Variable Speed', 'Flex Shaft'],
    owner: { id: 'owner44', name: 'Crafty Corner', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=44', joined: '2023', responseTime: '< 4 hours' }
  },
  {
    id: '50',
    title: 'Aluminum Extension Ladder',
    category: 'Tools',
    pricePerDay: 250,
    securityDeposit: 1000,
    rating: 4.4,
    reviews: 63,
    location: 'Vijayawada',
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `24ft extension ladder, lightweight and strong.`,
    features: ['Safety Grips', 'Locking Mechanism', 'Rust Proof'],
    owner: { id: 'owner45', name: 'Daily Hire', level: 'Verified', avatar: 'https://i.pravatar.cc/150?u=45', joined: '2022', responseTime: '< 2 hours' }
  }
];