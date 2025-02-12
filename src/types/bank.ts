import {
  AccountType,
  BankAccountNumberType,
  DocumentType_,
  PixAccountType,
} from "./accounts";
import { CurrencyCode } from "./currencies";

interface PhysicalAddress {
  address1: string;
  address2?: string;
  country: string; // ISO 3166-1 alpha-2 country code
  state: string; // State or province
  city: string;
  zip: string;
}

export interface BankDetailsForm {
  bankName: string;
  bankAccountOwnerName: string;
  accountType?: AccountType; // Required for USD, COP, ARS, PEN, ZAR
  pixAccountType?: PixAccountType; // Required for BRL PIX payments
  pixEmail?: string; // Required for BRL PIX payments
  pixPhone?: string; // Required for BRL PIX payments
  bankAccountNumber?: string; // Required for USD, COP, ARS, ZAR
  bankRoutingNumber?: string; // Required for USD
  iban?: string; // Required for EUR and CRC
  swiftBic?: string; // Required for EUR
  branchCode?: string; // Required for BRL
  documentNumber?: string; // Required for COP, ARS, BRL, BOB, PEN, CRC
  documentType?: DocumentType_; // Required for COP, BOB, CLP, PEN, CRC
  country?: string; // Required for EUR
  bankAccountNumberType?: BankAccountNumberType; // Required for ARS
  physicalAddress: PhysicalAddress; // Required
  currencyCode: CurrencyCode;
}
