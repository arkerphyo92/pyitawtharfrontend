export interface ProductImage {
  image: string;
}

export interface ProductDiscount {
  retail_discount_percentage: number | null;
  wholesale_discount_percentage: number | null;
  start_date: string | null;
  end_date: string | null;
}

export interface ProductPrice {
  retail_price: number | null;
  wholesale_price?: number | null;
  retail_price_with_discount?: number | null;
  wholesale_price_with_discount?: number | null;
  retail_pay_type: string | null;
  wholesale_pay_type?: string | null;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  stock: number;
  stock_type?: string;
  weight: number | null;
  weight_type: string | null;
  status: string;
  in_stock: boolean;
  prices: ProductPrice;
  discounts?: ProductDiscount;
  images: ProductImage[];
}

export interface apiResponse {
  items: Product[];
  count: number;
}
