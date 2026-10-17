export interface Room {
  id: string;
  name: string;
  tagline: string;
  size: string;
  guests: string;
  pricePerNight: number;
  view: string;
  bed: string;
  image: string;
  balconyImage: string;
  description: string;
  amenities: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  timing: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  suiteId: string;
  specialRequests?: string;
}
