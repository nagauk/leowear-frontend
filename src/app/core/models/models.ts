export interface User {
  id: number;
  username: string;
  email: string;
  phone?: string;
  fullName?: string;
  role: 'CUSTOMER' | 'EMPLOYEE' | 'ADMIN';
  emailVerified?: boolean;
  phoneVerified?: boolean;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  parentId?: number;
  parentName?: string;
  sizeGuide?: string;
  children?: Category[];
}

export interface ProductImage {
  id?: number;
  url: string;
  primary: boolean;
  sortOrder: number;
  color?: string | null;
  size?: string | null;
}

export interface ProductVariant {
  id?: number;
  size: string;
  color: string;
  stock: number;
  price?: number | null;
  sku?: string;
  active?: boolean;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  stock: number;
  brand?: string;
  material?: string;
  features?: string;
  parentCategoryId?: number;
  parentCategoryName?: string;
  sizeGuide?: string;
  color?: string;
  size?: string;
  imageUrl?: string;
  images?: ProductImage[];
  imageUrls?: string[];
  primaryImageIndex?: number;
  variants?: ProductVariant[];
  availableSizes?: string[];
  availableColors?: string[];
  categoryId?: number;
  categoryName?: string;
  active?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  variantId?: number;
  size?: string;
  color?: string;
  /** Image for selected color */
  imageUrl?: string;
  unitPrice?: number;
}

export interface OrderItem {
  id?: number;
  productId: number;
  variantId?: number;
  productName?: string;
  productImage?: string;
  size?: string;
  color?: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface Order {
  id: number;
  orderNumber: string;
  userId: number;
  username: string;
  items: OrderItem[];
  totalAmount: number;
  status: string;
  paymentMethod?: string;
  paymentStatus?: string;
  paymentRef?: string;
  needsPayment?: boolean;
  shippingAddress?: string;
  phone?: string;
  notes?: string;
  /** Staff-only courier / tracking details. Empty on the customer view. */
  shippingDetails?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface ReturnRequest {
  id: number;
  orderId: number;
  orderNumber?: string;
  userId?: number;
  username?: string;
  orderItemId?: number;
  productName?: string;
  size?: string;
  color?: string;
  quantity?: number;
  reason: string;
  status: string;
  adminNotes?: string;
  refundTransactionId?: string;
  refundStatus?: string;
  orderPaymentMethod?: string;
  orderPaymentStatus?: string;
  orderPaymentRef?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DashboardStats {
  totalProducts: number;
  lowStockProducts: number;
  totalOrders: number;
  pendingOrders: number;
  deliveredOrders: number;
  cancelledOrders: number;
  returnedOrders: number;
  pendingReturns: number;
  totalSales: number;
  deliveredSales: number;
  totalCustomers: number;
  recentOrders: any[];
  lowStockItems: any[];
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

/**
 * Response of `POST /api/admin/uploads/image`. Includes both the final
 * Cloudinary asset metadata and the original source dimensions so the admin
 * can see "resized 2.4 MB → 940 KB, 4032×3024 → 1600×1200".
 */
export interface CloudinaryUploadResponse {
  url: string;
  publicId: string;
  bytes: number;
  width: number;
  height: number;
  originalBytes: number;
  originalWidth: number;
  originalHeight: number;
  format: string;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
