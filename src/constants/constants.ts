export interface IProduct {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images: string[];
  count?: number;
}

export type MySearchProps = Record<string, never>;
