import { RecipientsInfoDetails } from "../../types/transfers";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { blockchainOptions } from "./constants";

interface WalletDetailsFormExtensionProps extends RecipientsInfoDetails {
  updateArrayItem: <K extends "recipientsInfo" | "memo" | "payoutAccountId">(
    key: K,
    index: number,
    field: string,
    value: unknown
  ) => void;
  index: number;
  isLoading: boolean;
}

export const WalletDetailsFormExtension = ({
  updateArrayItem,
  index,
  isLoading,
  ...recipient
}: WalletDetailsFormExtensionProps) => {
  return (
    <div className="flex flex-col gap-2 ml-4">
      <h4>Wallet details:</h4>
      <Input
        type="text"
        className="w-full"
        placeholder="Wallet Address"
        value={recipient.walletDetails!.walletAddress}
        onChange={(e) =>
          updateArrayItem(
            "recipientsInfo",
            index,
            "walletDetails.walletAddress",
            e.target.value
          )
        }
        disabled={isLoading}
        required
      />
      <div className="w-full flex flex-col gap-1">
        <span>Blockchain:</span>
        <Select
          className="w-full"
          options={blockchainOptions}
          value={recipient.walletDetails!.blockchain}
          disabled={isLoading}
          onChange={(e) => {
            updateArrayItem(
              "recipientsInfo",
              index,
              "walletDetails.blockchain",
              e.target.value
            );
          }}
        />
      </div>
    </div>
  );
};
