import type { Room, Experience, MenuItem, GalleryItem } from '../types/resort';

export const RESORT_ROOMS: Room[] = [
  {
    id: 'ocean-suite',
    name: 'Ocean View Suite',
    tagline: 'Wake up to breathtaking ocean views every single dawn.',
    size: '1,450 sq.ft (135 m²)',
    guests: 'Up to 3 Guests',
    pricePerNight: 1250,
    view: 'Panoramic Coastal Horizon',
    bed: 'Handcrafted Emperor King',
    image: '/images/04_room_bedroom.jpg',
    balconyImage: '/images/05_room_balcony.jpg',
    description: 'Floor-to-ceiling retractable glass opens onto a vast teak terrace with uninterrupted views of the Arabian Sea. Features natural limestone bathroom with deep soaking tub overlooking the water.',
    amenities: ['Private Sunrise Terrace', 'Bespoke Butler Service', 'Outdoor Rain Shower', 'Complimentary Champagne on Arrival', 'Diptyque Amenities']
  },
  {
    id: 'cliffside-villa',
    name: 'Cliffside Plunge Villa',
    tagline: 'Carved directly into the rock face with total seclusion.',
    size: '2,200 sq.ft (205 m²)',
    guests: 'Up to 4 Guests',
    pricePerNight: 2100,
    view: '180° Private Cliff Edge',
    bed: 'Master King + Twin Suite',
    image: '/images/room_stay_ref.jpg',
    balconyImage: '/images/05_room_balcony.jpg',
    description: 'Perched dramatically above the surf, this standalone villa features a private heated saltwater plunge pool, outdoor dining pavilion, and direct private trail to the secluded cove.',
    amenities: ['Private Infinity Plunge Pool', 'Dedicated Villa Host 24/7', 'Private Sun Deck & Daybed', 'In-Villa Spa Treatments', 'Sub-Zero Wine Cellar']
  },
  {
    id: 'royal-penthouse',
    name: 'The Aurora Royal Penthouse',
    tagline: 'The pinnacle of architectural grandeur and coastal luxury.',
    size: '3,800 sq.ft (350 m²)',
    guests: 'Up to 6 Guests',
    pricePerNight: 3800,
    view: '360° Unrivaled Coastal & Mountain',
    bed: 'Two Master Suites + Salon',
    image: '/images/10_night_resort.jpg',
    balconyImage: '/images/05_room_balcony.jpg',
    description: 'Encompassing the entire top tier of the resort. Includes private elevator access, wrapping sky terrace, private outdoor fireplace, grand dining hall, and dedicated private chef on request.',
    amenities: ['Private Rooftop Sky Deck', 'Full Private Chef Service', 'Dedicated Chauffeur & Yacht Access', 'Steinway Grand Piano', 'Helipad Concierge Transfer']
  }
];

export const RESORT_EXPERIENCES: Experience[] = [
  {
    id: 'infinity-pool',
    title: 'Cliffside Infinity Pool',
    category: 'Aquatics & Leisure',
    tagline: 'Where crystalline water merges with the twilight horizon.',
    description: 'Suspended 120 feet above the ocean surf, our heated saltwater infinity pool creates the illusion of floating directly into the sunset. Surrounded by shaded private cabanas and handcrafted teak loungers.',
    image: '/images/infinity_pool.jpg',
    highlights: ['Heated Saltwater Basin', 'Poolside Mixology Service', 'Sunset Soundscapes', 'Private Daybed Reservation'],
    timing: '06:00 AM – 10:00 PM Daily'
  },
  {
    id: 'spa-wellness',
    title: 'Soma Holistic Spa',
    category: 'Holistic Sanctuary',
    tagline: 'Ancient Ayurvedic wisdom meets modern thermal therapies.',
    description: 'A subterranean wellness retreat carved into volcanic stone. Features natural mineral vitality pools, steam caverns, organic botanical herbal rituals, and ocean-facing sound meditation chambers.',
    image: '/images/08_spa_wellness.jpg',
    highlights: ['Thermal Vitality Caverns', 'Ayurvedic Marma Therapies', 'Aromatherapy Rain Gardens', 'Sunset Singing Bowl Sessions'],
    timing: '08:00 AM – 09:00 PM'
  },
  {
    id: 'private-beach',
    title: 'Secluded Azure Cove',
    category: 'Coastal Nature',
    tagline: 'Untouched white sands embraced by dramatic granite headlands.',
    description: 'Accessible only through the resort private funicular or water tender, Paradise Beach offers absolute serenity. Enjoy dedicated beach attendants, snorkeling gear, and sunset torchlit picnics.',
    image: '/images/09_beach.jpg',
    highlights: ['Protected Marine Reserve', 'Complimentary Water Sports', 'Private Beachside Cabanas', 'Tide Pool Guided Explorations'],
    timing: 'Sunrise to Sunset'
  },
  {
    id: 'nature-trails',
    title: 'Canopy & Coastal Trails',
    category: 'Active Discovery',
    tagline: 'Guided botanical walks along cliffs where sea eagles nest.',
    description: 'Explore four private nature trails weaving through coastal subtropical rainforests, hidden viewpoints, and ancient sea grottos led by our resident naturalist and botanist.',
    image: '/images/01_aerial_resort.jpg',
    highlights: ['Resident Naturalist Walks', 'Bird Watching Hideouts', 'Sunrise Yoga Platform', 'Secret Waterfall Clearing'],
    timing: 'Guided Treks at 07:00 AM & 04:30 PM'
  }
];

export const TASTING_MENU: MenuItem[] = [
  {
    name: 'Pan-Seared Hokkaido Diver Scallop',
    description: 'Caramelized cauliflower velouté, oscietra caviar, brown butter reduction, sea grape emulsion.',
    price: '$48',
    tag: 'Chef Signature'
  },
  {
    name: 'Wild-Caught Coral Reef Sea Bass',
    description: 'Slow-poached in saffron dashi broth, braised baby fennel, sea succulents, kaffir lime foam.',
    price: '$62',
    tag: 'Ocean Catch'
  },
  {
    name: 'A5 Wagyu Tenderloin on Binchotan',
    description: 'Smoked king oyster mushrooms, fermented black garlic jus, mountain wasabi, truffled pomme mousseline.',
    price: '$95',
    tag: 'Signature Grill'
  },
  {
    name: 'Madagascan Vanilla & Gold Leaf Spheres',
    description: 'Valrhona smoked dark chocolate ganache, passionfruit coulis, roasted hazelnut feuilletine.',
    price: '$32',
    tag: 'Dessert Art'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Aerial Sanctuary',
    category: 'Architecture',
    image: '/images/hero_aerial.jpg',
    caption: 'The dramatic coastal bluffs of The Aurora bathed in morning golden hour.'
  },
  {
    id: 'gal-2',
    title: 'The Grand Porte-Cochère',
    category: 'Arrival',
    image: '/images/resort_entrance.jpg',
    caption: 'Reflecting pools and monumental illuminated stone pillars welcoming guests at twilight.'
  },
  {
    id: 'gal-3',
    title: 'Cathedral Lobby Atrium',
    category: 'Interiors',
    image: '/images/grand_lobby.jpg',
    caption: 'Soaring hand-carved teak roof trusses opening to panoramic ocean winds.'
  },
  {
    id: 'gal-4',
    title: 'Ocean Horizon Pool',
    category: 'Experiences',
    image: '/images/infinity_pool.jpg',
    caption: 'Evening swims where warm water meets vibrant crimson and gold skies.'
  },
  {
    id: 'gal-5',
    title: 'Gastronomy by the Sea',
    category: 'Culinary',
    image: '/images/fine_dining.jpg',
    caption: 'Artisanal dishes prepared with daily catches and organically grown botanical herbs.'
  },
  {
    id: 'gal-6',
    title: 'Thermal Vitality Sanctuary',
    category: 'Wellness',
    image: '/images/08_spa_wellness.jpg',
    caption: 'Quiet contemplation in the natural stone vitality baths at Soma Spa.'
  }
];
