// src/data/salesMockData.ts

export interface SaleRecord {
  date: string;
  item: string;
  quantity: number;
  total: number;
}

export const salesData: SaleRecord[] = [
  { date: "2025-06-01", item: "Coffee", quantity: 10, total: 300 },
  { date: "2025-06-01", item: "Tea", quantity: 5, total: 100 },
  { date: "2025-06-02", item: "Smoothie", quantity: 3, total: 150 },
];