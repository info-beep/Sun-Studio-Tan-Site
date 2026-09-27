export type Page = 'home' | 'tanning' | 'services' | 'care' | 'portal' | 'about' | 'faq' | 'contact' | 'whitening' | 'wellness' | 'pricing' | 'weddings' | 'book' | 'video';

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  category: 'tanning' | 'whitening';
}

export interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  rating: number;
  imageUrl: string;
  bio: string;
}

export interface Appointment {
  id: string;
  service: Service;
  addons: Addon[];
  specialist: Specialist;
  date: string;
  time: string;
  clientNotes: {
    skinType: string;
    desiredIntensity: string;
    sensitivity: boolean;
  };
  totalPrice: number;
  createdAt: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  membership: 'none' | 'base' | 'build' | 'bronzed';
  loyaltyPoints: number;
  visitsCount: number;
}
