export type CurrencyCode =
  | "USD"
  | "COP"
  | "ARS"
  | "EUR"
  | "MXN"
  | "BRL"
  | "CLP"
  | "PEN"
  | "BOB"
  | "CRC"
  | "ZAR"
  | string;

export type Stage = "TOS" | "AWAITING_KYC" | "COMPLETE" | "REJECTED" | string;

export interface CurrenciesInfo {
  currencyCode: CurrencyCode;
  stage: Stage;
  isRestricted?: boolean;
  message?: string;
}
