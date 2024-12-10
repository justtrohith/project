export interface MenuItem {
  item_id: string;
  restaurant_id: string;
  name: string;
  category: string;
  price: number;
  is_vegetarian: boolean;
  is_available: boolean;
}

export interface Review {
  review_id: string;
  customer_id: string;
  restaurant_id: string;
  rating: number;
  review_text: string;
  review_date: string;
  likes: number;
  food_rating: number;
  service_rating: number;
  delivery_rating: number;
}

export interface Restaurant {
  restaurant_id: string;
  name: string;
  cuisine: string;
  address: string;
  opening_time: string;
  closing_time: string;
  rating: number;
  phone: string;
}

export interface Order {
  order_id: string;
  customer_id: string;
  restaurant_id: string;
  order_date: string;
  status: string;
  total_amount: number;
  delivery_fee: number;
  payment_method: string;
  delivery_address: string;
}

export interface Customer {
  customer_id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  registration_date: string;
}