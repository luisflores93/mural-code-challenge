import { BlockchainType } from "./accounts";

export interface WalletDetailsForm {
  walletAddress: string;
  blockchain: BlockchainType;
}
