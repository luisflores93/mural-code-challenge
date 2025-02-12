import { AccountDetails } from "./accounts";
import { CurrenciesInfo } from "./currencies";

export type CustomerTypes = "BUSINESS" | "INDIVIDUAL";
export type CustomerStatus =
  | "INACTIVE"
  | "PENDING"
  | "COMPLETE"
  | "ERROR"
  | "REJECTED";

export interface CreateCustomerDetails {
  name: string;
  organizationType: CustomerTypes;
}

export interface CustomerDetails
  extends Omit<CreateCustomerDetails, "organizationType"> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customerType: CustomerTypes;
  status: CustomerStatus;
  accountId?: string;
  account?: AccountDetails;
  currenciesInfo: CurrenciesInfo[];
}
