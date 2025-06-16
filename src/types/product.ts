// Tipos baseados no modelo Product do Django
export interface Product {
  id: string;
  group: string;
  category: string;
  brand: string;
  model: string;
  compatible_brand: string;
  compatible_model: string;
  color: string;
  min_stock: number;
  max_stock: number;
  price: string; // Decimal field vem como string
  warranty_period: number;
  is_active: boolean;
  description: string;
  short_description: string;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  additional_info: ProductAdditionalInfo;
}

export interface ProductAdditionalInfo {
  description: string;
  group: string | null;
  category: string | null;
  brand: string | null;
  compatible_brand: string | null;
  model: string | null;
  compatible_model: string | null;
  color: string | null;
  created_by: string | null;
  total_stock_quantity: number;
  stock_details: StockDetail[];
  total_sold_quantity: number;
  total_sold_value: number;
  daily_sales_average_last_30_days: number;
}

export interface StockDetail {
  store_id: string;
  store_name: string;
  stock_quantity: number;
}

// Tipos para filtros e busca
export interface ProductFilters {
  search?: string;
  group?: string;
  category?: string;
  brand?: string;
  is_active?: boolean;
  min_price?: number;
  max_price?: number;
}

// Tipo para criação/edição de produto
export interface CreateProductData {
  group: string;
  category: string;
  brand: string;
  model: string;
  compatible_brand: string;
  compatible_model: string;
  color: string;
  min_stock: number;
  max_stock: number;
  price: string;
  warranty_period: number;
  is_active: boolean;
  description?: string;
}
