import { iShoppingCart } from "@/types/data";
import {
  ArrowDownNarrowWide,
  ArrowUpWideNarrow,
  Flame,
  SortAsc,
  Sparkles,
  Star,
} from "lucide-react";

export const shoppingCartData: iShoppingCart[] = [
  {
    id: "3d2b9041-65f1-4790-9ad0-4235e12f685c",
    title: "Kagurabachi, Vol. 1",
    slug: "kagurabachi-vol-1",
    authors: ["Takeru Hokazono"],
    price: {
      originalPrice: 9.99,
      discountPrice: 7.99,
    },
    quantity: 1,
  },
  {
    id: "7b1029c4-8452-4e5b-90f3-1283746592a1",
    title: "One-Punch Man, Vol. 31",
    slug: "one-punch-man-vol-31",
    authors: ["ONE", "Yusuke Murata"],
    price: {
      originalPrice: 12.99,
      discountPrice: 10.49,
    },
    quantity: 1,
  },
  {
    id: "f339281a-0b2c-4d8e-bd3f-552211ccaa33",
    title: "Sakamoto Days, Vol. 18",
    slug: "sakamoto-days-vol-18",
    authors: ["Yuto Suzuki"],
    price: {
      originalPrice: 9.99,
      discountPrice: null,
    },
    quantity: 2,
  },
  {
    id: "0948b2c1-d4e5-4a5b-bcde-f1e2d3c4b5a6",
    title: "Dandadan, Vol. 15",
    slug: "dandadan-vol-15",
    authors: ["Yukinobu Tatsu"],
    price: {
      originalPrice: 11.99,
      discountPrice: 9.5,
    },
    quantity: 3,
  },
  {
    id: "e4d5c6b7-a890-4123-bcde-f1234567890a",
    title: "Gachiakuta, Vol. 10",
    slug: "gachiakuta-vol-10",
    authors: ["Kei Urana"],
    price: {
      originalPrice: 13.99,
      discountPrice: null,
    },
    quantity: 1,
  },
];

export const bookData = {
  genres: [
    { id: "GEN-1", name: "Action" },
    { id: "GEN-2", name: "Adventure" },
    { id: "GEN-3", name: "Biography" },
    { id: "GEN-4", name: "Autobiography" },
    { id: "GEN-5", name: "Classic" },
    { id: "GEN-6", name: "Contemporary Fiction" },
    { id: "GEN-7", name: "Crime" },
    { id: "GEN-8", name: "Mystery" },
    { id: "GEN-9", name: "Fantasy" },
    { id: "GEN-10", name: "Historical Fiction" },
    { id: "GEN-11", name: "Horror" },
    { id: "GEN-12", name: "Literary Fiction" },
    { id: "GEN-13", name: "Non-Fiction" },
    { id: "GEN-14", name: "Romance" },
    { id: "GEN-15", name: "Science Fiction" },
    { id: "GEN-16", name: "Self-Help" },
    { id: "GEN-17", name: "Thriller" },
    { id: "GEN-18", name: "Suspense" },
    { id: "GEN-19", name: "Young Adult" },
  ],
  language: [
    { id: "LANG-1", name: "English" },
    { id: "LANG-2", name: "Vietnamese" },
    { id: "LANG-3", name: "Japanese" },
  ],
  format: [
    { id: "FORM-1", name: "Hardcover" },
    { id: "FORM-2", name: "Paperback" },
    { id: "FORM-3", name: "Audiobook" },
    { id: "FORM-4", name: "E-book" },
  ],
  status: [
    { id: "STAT-1", name: "In stock" },
    { id: "STAT-2", name: "Out of stock" },
    { id: "STAT-3", name: "Pre-order" },
    { id: "STAT-4", name: "Coming soon" },
    { id: "STAT-5", name: "Ongoing" },
    { id: "STAT-6", name: "Completed" },
  ],
};

export const staticData = {
  navMenu: [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/shop", subMenu: bookData.genres },
    { label: "New Arrivals", href: "/shop?type=new" },
    { label: "Best Sellers", href: "/shop?type=hot" },
    { label: "Sale", href: "/shop?type=sale", isSale: true },
  ],
  notifications: [
    {
      id: "NOTIF-001",
      type: "order_update",
      priority: "high",
      title: "Package Out for Delivery",
      message:
        "Great news! Your order #BK-7702 (The Midnight Library) is with the courier and should arrive by 5:00 PM today.",
      timestamp: "2026-02-02T09:15:00Z",
      isRead: false,
    },
    {
      id: "NOTIF-002",
      type: "promotion",
      priority: "medium",
      title: "Early Valentine's Special",
      message:
        "Found your literary soulmate? Get 20% off all Hardcover Romance titles until Feb 14th. Use code: LOVEBOOKS.",
      timestamp: "2026-02-02T08:00:00Z",
      isRead: false,
    },
    {
      id: "NOTIF-003",
      type: "inventory",
      priority: "medium",
      title: "Back in Stock!",
      message:
        "The wait is over. 'Digital Fortress' by Dan Brown is finally back on our shelves. Grab your copy before it vanishes again!",
      timestamp: "2026-02-01T14:30:00Z",
      isRead: true,
    },
    {
      id: "NOTIF-004",
      type: "event",
      priority: "low",
      title: "Author Meet & Greet",
      message:
        "Reminder: Local Sci-Fi author Sarah Chen will be signing books at our Downtown branch this Saturday at 2:00 PM.",
      timestamp: "2026-01-31T11:00:00Z",
      isRead: true,
    },
    {
      id: "NOTIF-005",
      type: "account",
      priority: "high",
      title: "Security Alert",
      message:
        "A new login was detected from a Chrome browser on Windows. If this wasn't you, please reset your password immediately.",
      timestamp: "2026-02-02T13:45:00Z",
      isRead: false,
    },
  ],
  sortOptions: [
    {
      id: "SORT-1",
      name: "Newest Arrivals",
      value: "new",
      shoppingCartData,
      icon: Sparkles,
    },
    {
      id: "SORT-2",
      name: "Best Sellers",
      value: "hot",
      icon: Flame,
    },
    {
      id: "SORT-3",
      name: "Price: Low to High",
      value: "price-ascended",
      icon: ArrowDownNarrowWide,
    },
    {
      id: "SORT-4",
      name: "Price: High to Low",
      value: "price-descended",
      icon: ArrowUpWideNarrow,
    },
    {
      id: "SORT-5",
      name: "Top Rated",
      value: "top-rated",
      icon: Star,
    },
    {
      id: "SORT-6",
      name: "Alphabetical (A-Z)",
      value: "alphabetical",
      icon: SortAsc,
    },
  ],
};
