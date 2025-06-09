import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Skip } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const calculateTotalPrice = (skip: Skip) => {
  return Math.round(skip.price_before_vat * (1 + skip.vat / 100));
};

export const formatHirePeriod = (days: number) => {
  return `${days} day hire period`;
};