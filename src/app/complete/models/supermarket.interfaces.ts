export interface Product {
  id: number;
  brand: string;
  productName: string;
  imageUrl: string;
  price: number;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  imageUrl: string; 
}

export interface ProductsResponse{
  products: Array<Product>
  maxPages: number;
  page: string;
  nextPage: string | null;
  prevPage: string | null;
}