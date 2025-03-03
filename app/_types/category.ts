export interface Category {
  id: number;
  name: string;
  description: string;
  cat_image: string;
  products_count: number;
}

export interface apiResponse {
  items: Category[];
  count: number;
}
