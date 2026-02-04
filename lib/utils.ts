import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import slugify from "slugify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function slugifiedString(input: string) {
  return slugify(input, {
    replacement: "-",
    remove: undefined,
    lower: true,
    locale: "en",
    trim: true,
  });
}

export function timeFromNow(time: string) {
  return dayjs(time).fromNow();
}

export function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    trailingZeroDisplay: "stripIfInteger",
  }).format(value);
}
