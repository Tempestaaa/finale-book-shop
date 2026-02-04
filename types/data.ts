export interface iNotification {
  id: string;
  type: string;
  priority: string;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

export interface iShoppingCart {
  id: string;
  title: string;
  slug: string;
  authors: string[];
  price: {
    originalPrice: number;
    discountPrice: number | null;
  };
  quantity: number;
}
