export type PurchaseModel = {
  productId: number;
  customerId: number;
  quantity: number;
  date: string; // ISO date string
};

export type PurchaseFrequencyModel = {
  range: string;
  count: number;
};
