import { PropertyProps } from "../interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "cozy-cottage",
    rating: 4.8,
    address: { city: "Portland", country: "USA" },
    image: "https://images.unsplash.com/photo-1505691723518-36a2b4a1b0b8?w=1200&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505691723518-36a2b4a1b0b8?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=1200&q=80&auto=format&fit=crop",
    ],
    description:
      "A cozy cottage tucked away in a quiet neighborhood. Perfect for small families or couples looking for a weekend getaway. Includes a fully equipped kitchen, WiFi, and a lovely backyard.",
    category: ["WiFi", "Kitchen", "Free parking", "Washer", "Dryer", "Heating"],
    price: 120,
    reviews: [
      {
        name: "Aisha",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        comment: "Lovely stay  host was very responsive and the place was spotless.",
        date: "2024-07-10",
      },
      {
        name: "Marco",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 4,
        comment: "Great location and comfortable bed. Would book again.",
        date: "2024-08-03",
      },
    ],
    host: { name: "Jane Host", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  },
];

export default PROPERTYLISTINGSAMPLE;
