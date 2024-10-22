export interface MapItem {
  title: string;
  avgRating?: number;
  reviewsCount?: number;
  address: string;
  description: string;
  website: string;
  category: string;
  time: string;
  phone: string;
  features: string[];
  latitude: string;
  longitude: string;
  dataId: string;
  isAccessible: boolean;
  image?: string;
  mapLink: string;
}
