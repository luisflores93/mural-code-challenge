import { BankDetailsForm } from "./bank";
import { WalletDetailsForm } from "./wallet";

export type RecipientTransferType = "FIAT" | "BLOCKCHAIN" | string;
export type TransferStatusType =
  | "IN_REVIEW"
  | "CANCELLED"
  | "PENDING"
  | "EXECUTED"
  | "FAILED"
  | string;

export interface RecipientsInfoDetails {
  name: string;
  tokenAmount: string;
  email: string;
  recipientType: "INDIVIDUAL" | "BUSINESS" | string;
  dateOfBirth: string;
  phoneNumber?: string;
  recipientTransferType: RecipientTransferType;
  bankDetails?: BankDetailsForm;
  walletDetails?: WalletDetailsForm;
}

export interface CreateTransferDetails {
  payoutAccountId: string;
  memo?: string;
  recipientsInfo: RecipientsInfoDetails[];
}

export interface RecipientInfo {
  id: string;
  createdAt: string;
  updatedAt: string;
  recipientTransferType: RecipientTransferType;
  tokenAmount: number;
}

export interface TransferForm {
  id: string;
  createdAt: string;
  updatedAt: string;
  payoutAccountId?: string;
  transactionHash?: string;
  memo?: string;
  status: TransferStatusType;
  recipientsInfo: RecipientInfo[];
}

export interface FiatDetails {
  withdrawalRequestStatus: string;
  currencyCode?: string;
  fiatAmount?: number;
  transactionFee?: number;
  exchangeFeePercentage?: number;
  exchangeRate?: number;
  feeTotal?: number;
  initiatedAt?: string; // ISO date-time format
  completedAt?: string;
}

export interface Transfer {
  id: string;
  createdAt: string;
  updatedAt: string;
  payoutAccountId?: string;
  transactionHash?: string;
  memo?: string;
  status: TransferStatusType;
  recipientsInfo: RecipientInfo[];
}

// these types are from the docs
// export interface Transfer
//   extends Pick<TransferForm, "id" | "createdAt" | "updatedAt"> {
//   recipientTransferType: string;
//   transactionHash: string;
//   tokenAmount: number;
//   fiatDetails: FiatDetails;
//   blockchainDetails?: WalletDetailsForm;
//   status: TransferStatusType;
// }

export interface TransfersResponse {
  total: number;
  nextId: string;
  results: Transfer[];
}
