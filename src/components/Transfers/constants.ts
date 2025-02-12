import { RecipientsInfoDetails } from "../../types/transfers";

export const accountTypeOptions = [
  {
    label: "CHECKING",
    value: "CHECKING",
  },
  {
    label: "SAVINGS",
    value: "SAVINGS",
  },
];

export const pixAccountTypeOptions = [
  {
    label: "PHONE",
    value: "PHONE",
  },
  {
    label: "EMAIL",
    value: "EMAIL",
  },
  {
    label: "DOCUMENT",
    value: "DOCUMENT",
  },
  {
    label: "BANK_ACCOUNT",
    value: "BANK_ACCOUNT",
  },
];

export const documentTypeOptions = [
  {
    label: "NATIONAL_ID",
    value: "NATIONAL_ID",
  },
  {
    label: "PASSPORT",
    value: "PASSPORT",
  },
  {
    label: "RESIDENT_ID",
    value: "RESIDENT_ID",
  },
  {
    label: "RUC",
    value: "RUC",
  },
];

export const bankAccountNumberTypeOptions = [
  {
    label: "CVU",
    value: "CVU",
  },
  {
    label: "CBU",
    value: "CBU",
  },
  {
    label: "ALIAS",
    value: "ALIAS",
  },
];

export const currencyCodeOptions = [
  {
    label: "USD",
    value: "USD",
  },
  {
    label: "COP",
    value: "COP",
  },
  {
    label: "ARS",
    value: "ARS",
  },
  {
    label: "EUR",
    value: "EUR",
  },
  {
    label: "MXN",
    value: "MXN",
  },
  {
    label: "BRL",
    value: "BRL",
  },
  {
    label: "CLP",
    value: "CLP",
  },
  {
    label: "PEN",
    value: "PEN",
  },
  {
    label: "BOB",
    value: "BOB",
  },
  {
    label: "CRC",
    value: "CRC",
  },
  {
    label: "ZAR",
    value: "ZAR",
  },
];

export const blockchainOptions = [
  {
    label: "ETHEREUM",
    value: "ETHEREUM",
  },
  {
    label: "POLYGON",
    value: "POLYGON",
  },
  {
    label: "BASE",
    value: "BASE",
  },
  {
    label: "CELO",
    value: "CELO",
  },
];

export const defaultRecipientInfo: RecipientsInfoDetails = {
  name: "",
  tokenAmount: "",
  email: "",
  recipientType: "INDIVIDUAL",
  recipientTransferType: "BLOCKCHAIN",
  dateOfBirth: "1993-12-10",
  // only allow US numbers
  phoneNumber: "+1",
  bankDetails: {
    bankName: "",
    bankAccountOwnerName: "",
    accountType: "CHECKING",
    pixAccountType: "PHONE",
    pixEmail: "",
    pixPhone: "",
    bankAccountNumber: "",
    bankRoutingNumber: "",
    iban: "",
    swiftBic: "",
    branchCode: "",
    documentNumber: "",
    documentType: "PASSPORT",
    country: "",
    bankAccountNumberType: "CVU",
    currencyCode: "USD",
    physicalAddress: {
      address1: "",
      city: "",
      country: "",
      state: "",
      zip: "",
      address2: "",
    },
  },
  walletDetails: {
    walletAddress: "",
    blockchain: "ETHEREUM",
  },
};
