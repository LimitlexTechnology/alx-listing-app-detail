export interface Address {
  city: string;
  country: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface Host {
  name: string;
  avatar?: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  image: string;
  images?: string[];
  description: string;
  category: string[];
  price: number;
  reviews: Review[];
  host?: Host;
}

export default PropertyProps;
