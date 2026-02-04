import { iShoppingCart } from "@/types/data";

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
