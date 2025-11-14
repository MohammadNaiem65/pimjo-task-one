export interface CustomerData {
  dealId: string;
  customer: string;
  email: string;
  product: string;
  dealValue: string;
  closeDate: Date;
  status: "Pending" | "Complete";
  avatar: string;
}
