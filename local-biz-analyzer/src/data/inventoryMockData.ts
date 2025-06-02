// src/data/inventoryMockData.ts

export interface InventoryItem {
  name: string;
  quantity: number;
  status: "In Stock" | "Low";
}

export const inventoryData: InventoryItem[] = [
  { name: "Coffee Beans", quantity: 20, status: "In Stock" },
  { name: "Milk", quantity: 5, status: "Low" },
  { name: "Cups", quantity: 50, status: "In Stock" },
];