import { Customer } from "./Customer";

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  customer?: Customer | null;
}
