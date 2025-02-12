import { RecipientsInfoDetails } from "../../types/transfers";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import {
  accountTypeOptions,
  bankAccountNumberTypeOptions,
  currencyCodeOptions,
  documentTypeOptions,
  pixAccountTypeOptions,
} from "./constants";

interface BankDetailsFormExtensionProps extends RecipientsInfoDetails {
  updateArrayItem: <K extends "recipientsInfo" | "memo" | "payoutAccountId">(
    key: K,
    index: number,
    field: string,
    value: unknown
  ) => void;
  index: number;
  isLoading: boolean;
}

export const BankDetailsFormExtension = ({
  updateArrayItem,
  index,
  isLoading,
  ...recipient
}: BankDetailsFormExtensionProps) => {
  return (
    <div className="flex flex-col gap-2 ml-4">
      <h4>Bank details:</h4>
      <Input
        type="text"
        className="w-full"
        placeholder="Bank name"
        value={recipient.bankDetails!.bankName}
        onChange={(e) =>
          updateArrayItem(
            "recipientsInfo",
            index,
            "bankDetails.bankName",
            e.target.value
          )
        }
        disabled={isLoading}
        required
      />
      <Input
        type="text"
        className="w-full"
        placeholder="Bank account owner name"
        value={recipient.bankDetails!.bankAccountOwnerName}
        onChange={(e) =>
          updateArrayItem(
            "recipientsInfo",
            index,
            "bankDetails.bankAccountOwnerName",
            e.target.value
          )
        }
        disabled={isLoading}
        required
      />
      <div className="flex items-center gap-2">
        <div className="w-full flex flex-col gap-1">
          <span>Account type:</span>
          <Select
            className="w-full"
            options={accountTypeOptions}
            value={recipient.bankDetails!.accountType}
            disabled={isLoading}
            onChange={(e) => {
              updateArrayItem(
                "recipientsInfo",
                index,
                "bankDetails.accountType",
                e.target.value
              );
            }}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <span>Pix account type:</span>
          <Select
            className="w-full"
            options={pixAccountTypeOptions}
            value={recipient.bankDetails!.pixAccountType}
            disabled={isLoading}
            onChange={(e) => {
              updateArrayItem(
                "recipientsInfo",
                index,
                "bankDetails.pixAccountType",
                e.target.value
              );
            }}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="email"
          className="w-full"
          placeholder="Pix email"
          value={recipient.bankDetails!.pixEmail}
          onChange={(e) =>
            updateArrayItem(
              "recipientsInfo",
              index,
              "bankDetails.pixEmail",
              e.target.value
            )
          }
          disabled={isLoading}
        />
        <Input
          type="text"
          className="w-full"
          placeholder="Pix phone"
          value={recipient.bankDetails!.pixPhone}
          onChange={(e) =>
            updateArrayItem(
              "recipientsInfo",
              index,
              "bankDetails.pixPhone",
              e.target.value
            )
          }
          disabled={isLoading}
        />
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          className="w-full"
          placeholder="Bank account number"
          value={recipient.bankDetails!.bankAccountNumber}
          onChange={(e) =>
            updateArrayItem(
              "recipientsInfo",
              index,
              "bankDetails.bankAccountNumber",
              e.target.value
            )
          }
          disabled={isLoading}
        />
        <Input
          type="text"
          className="w-full"
          placeholder="Bank routing number"
          value={recipient.bankDetails!.bankRoutingNumber}
          onChange={(e) =>
            updateArrayItem(
              "recipientsInfo",
              index,
              "bankDetails.bankRoutingNumber",
              e.target.value
            )
          }
          disabled={isLoading}
        />
      </div>
      <Input
        type="text"
        className="w-full"
        placeholder="iban"
        value={recipient.bankDetails!.iban}
        onChange={(e) =>
          updateArrayItem(
            "recipientsInfo",
            index,
            "bankDetails.iban",
            e.target.value
          )
        }
        disabled={isLoading}
      />
      <Input
        type="text"
        className="w-full"
        placeholder="Swift Bic"
        value={recipient.bankDetails!.swiftBic}
        onChange={(e) =>
          updateArrayItem(
            "recipientsInfo",
            index,
            "bankDetails.swiftBic",
            e.target.value
          )
        }
        disabled={isLoading}
      />
      <div className="flex items-center gap-2">
        <Input
          type="text"
          className="w-full"
          placeholder="Branch Code"
          value={recipient.bankDetails!.branchCode}
          onChange={(e) =>
            updateArrayItem(
              "recipientsInfo",
              index,
              "bankDetails.branchCode",
              e.target.value
            )
          }
          disabled={isLoading}
        />
        <Input
          type="text"
          className="w-full"
          placeholder="Document number"
          value={recipient.bankDetails!.documentNumber}
          onChange={(e) =>
            updateArrayItem(
              "recipientsInfo",
              index,
              "bankDetails.documentNumber",
              e.target.value
            )
          }
          disabled={isLoading}
        />
      </div>
      <div className="flex gap-2 items-end">
        <div className="w-full flex flex-col gap-1">
          <span>Document type:</span>
          <Select
            className="w-full"
            options={documentTypeOptions}
            value={recipient.bankDetails!.documentType}
            disabled={isLoading}
            onChange={(e) => {
              updateArrayItem(
                "recipientsInfo",
                index,
                "bankDetails.documentType",
                e.target.value
              );
            }}
          />
        </div>
        <Input
          type="text"
          className="w-full h-10"
          placeholder="Country"
          value={recipient.bankDetails!.country}
          onChange={(e) =>
            updateArrayItem(
              "recipientsInfo",
              index,
              "bankDetails.country",
              e.target.value
            )
          }
          disabled={isLoading}
        />
      </div>
      <div className="flex gap-2 items-end">
        <div className="w-full flex flex-col gap-1">
          <span>Bank account number Type:</span>
          <Select
            className="w-full"
            options={bankAccountNumberTypeOptions}
            value={recipient.bankDetails!.bankAccountNumberType}
            disabled={isLoading}
            onChange={(e) => {
              updateArrayItem(
                "recipientsInfo",
                index,
                "bankDetails.bankAccountNumberType",
                e.target.value
              );
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 ml-4">
        <h4>Physical Address:</h4>
        <div className="flex gap-1">
          <Input
            type="text"
            className="w-full h-10"
            placeholder="Address 1"
            value={recipient.bankDetails!.physicalAddress.address1}
            onChange={(e) =>
              updateArrayItem(
                "recipientsInfo",
                index,
                "bankDetails.physicalAddress.address1",
                e.target.value
              )
            }
            disabled={isLoading}
            required
          />
          <Input
            type="text"
            className="w-full h-10"
            placeholder="Address 2"
            value={recipient.bankDetails!.physicalAddress.address2}
            onChange={(e) =>
              updateArrayItem(
                "recipientsInfo",
                index,
                "bankDetails.physicalAddress.address2",
                e.target.value
              )
            }
            disabled={isLoading}
          />
        </div>
        <div className="flex gap-1">
          <Input
            type="text"
            className="w-full h-10"
            placeholder="Country"
            value={recipient.bankDetails!.physicalAddress.country}
            onChange={(e) =>
              updateArrayItem(
                "recipientsInfo",
                index,
                "bankDetails.physicalAddress.country",
                e.target.value
              )
            }
            disabled={isLoading}
            required
          />
          <Input
            type="text"
            className="w-full h-10"
            placeholder="State"
            value={recipient.bankDetails!.physicalAddress.state}
            onChange={(e) =>
              updateArrayItem(
                "recipientsInfo",
                index,
                "bankDetails.physicalAddress.state",
                e.target.value
              )
            }
            disabled={isLoading}
          />
        </div>
        <div className="flex gap-1">
          <Input
            type="text"
            className="w-full h-10"
            placeholder="City"
            value={recipient.bankDetails!.physicalAddress.city}
            onChange={(e) =>
              updateArrayItem(
                "recipientsInfo",
                index,
                "bankDetails.physicalAddress.city",
                e.target.value
              )
            }
            disabled={isLoading}
            required
          />
          <Input
            type="text"
            className="w-full h-10"
            placeholder="Zip"
            value={recipient.bankDetails!.physicalAddress.zip}
            onChange={(e) =>
              updateArrayItem(
                "recipientsInfo",
                index,
                "bankDetails.physicalAddress.zip",
                e.target.value
              )
            }
            disabled={isLoading}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <span>Currency code:</span>
        <Select
          className="w-full"
          options={currencyCodeOptions}
          value={recipient.bankDetails!.currencyCode}
          disabled={isLoading}
          onChange={(e) => {
            updateArrayItem(
              "recipientsInfo",
              index,
              "bankDetails.currencyCode",
              e.target.value
            );
          }}
        />
      </div>
    </div>
  );
};
