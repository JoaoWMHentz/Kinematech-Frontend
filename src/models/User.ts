import { Customer } from "./Customer";

export interface User {
  id: string;
  email: string;
  password?: string;
  salt?: string;
  active: boolean;
  emailVerificationToken?: string;
  tokenExpiration?: number;
  customer?: Customer | null;
}
