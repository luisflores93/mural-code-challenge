import { CurrencyCode } from "./currencies";
import { CustomerDetails } from "./customer";

export type AccountType = "CHECKING" | "SAVINGS" | string;
export type PixAccountType =
  | "PHONE"
  | "EMAIL"
  | "DOCUMENT"
  | "BANK_ACCOUNT"
  | string;
export type DocumentType_ =
  | "NATIONAL_ID"
  | "PASSPORT"
  | "RESIDENT_ID"
  | "RUC"
  | string;
export type BankAccountNumberType = "CVU" | "CBU" | "ALIAS" | string;

export type BlockchainType = "ETHEREUM" | "POLYGON" | "BASE" | "CELO" | string;

export type DepositAccountStatus = "ACTIVATED" | "DEACTIVATED" | string;

export interface Balance {
  balance: number;
  tokenSymbol: string;
}

export interface CreateAccountDetails {
  name: string;
  description?: string;
  organizationCustomerId?: string;
}

export interface DepositAccount {
  id: string;
  status: DepositAccountStatus;
  currency: CurrencyCode;
  bankBeneficiaryName: string;
  bankBeneficiaryAddress: string;
  bankName: string;
  bankAddress: string;
  bankRoutingNumber: string;
  bankAccountNumber: string;
  paymentRails: string[];
}

export interface AccountDetails {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  blockchain: BlockchainType;
  address: string;
  balance: Balance;
  isApiEnabled: boolean;
  isPending: boolean;
  customer?: CustomerDetails;
  depositAccount?: DepositAccount;
}
