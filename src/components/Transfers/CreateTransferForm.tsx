import { FormEvent, useState } from "react";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "../../hooks/useForm";
import {
  faMoneyBillTransfer,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Select } from "../common/Select";
import { useAppContext } from "../../hooks/useAppContext";
import { BankDetailsFormExtension } from "./BankDetailsFormExtension";
import { defaultRecipientInfo } from "./constants";
import { WalletDetailsFormExtension } from "./WalletDetailsFormExtension";
import { createTransferRequest } from "../../helpers/api";

export const CreateTransferForm = ({
  setShowCreateTransfer,
}: {
  setShowCreateTransfer: (val: boolean) => void;
}) => {
  const { setTransfer } = useAppContext();
  const {
    formData,
    handleChange,
    updateArrayItem,
    addToArray,
    removeFromArray,
  } = useForm({
    memo: "",
    payoutAccountId: "",
    recipientsInfo: [defaultRecipientInfo],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setIsLoading(true);
    setError("");

    const transferRequest = await createTransferRequest(formData);

    if (transferRequest.transfer && !transferRequest.error) {
      setShowCreateTransfer(false);
      setTransfer(transferRequest.transfer);
    } else {
      setError("Error");
    }

    setIsLoading(false);
  };

  const onAddRecipient = () => {
    addToArray("recipientsInfo", defaultRecipientInfo);
  };

  const options = [
    { value: "BUSINESS", label: "BUSINESS" },
    { value: "INDIVIDUAL", label: "INDIVIDUAL" },
  ];
  const optionsTransferType = [
    { value: "FIAT", label: "FIAT" },
    { value: "BLOCKCHAIN", label: "BLOCKCHAIN" },
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="pb-3 flex flex-col gap-3 w-full">
        <Input
          type="text"
          name="payoutAccountId"
          placeholder="Payout account ID"
          value={formData.payoutAccountId}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
        <div className="flex items-center gap-2">
          <Input
            className="w-full"
            type="text"
            name="memo"
            placeholder="Memo"
            value={formData.memo}
            onChange={handleChange}
            disabled={isLoading}
          />
          <span>(Optional)</span>
        </div>
        <div>
          <h4>Recipients Info:</h4>
        </div>
        <div className="flex flex-col ml-4 gap-2">
          {formData.recipientsInfo.map((recipient, index) => (
            <div
              className="flex flex-col gap-1"
              key={`recipient-info-${index + 1}`}
            >
              {index !== 0 && (
                <div className="w-full h-[1px] bg-neutral-400 my-3" />
              )}
              <Input
                type="text"
                value={recipient.name}
                placeholder="Name"
                onChange={(e) =>
                  updateArrayItem(
                    "recipientsInfo",
                    index,
                    "name",
                    e.target.value
                  )
                }
                disabled={isLoading}
                required
              />
              <div className="flex w-full gap-2">
                <Input
                  type="number"
                  className="w-full"
                  placeholder="Token amount"
                  value={recipient.tokenAmount}
                  onChange={(e) =>
                    updateArrayItem(
                      "recipientsInfo",
                      index,
                      "tokenAmount",
                      e.target.value
                    )
                  }
                  disabled={isLoading}
                  required
                />
                <Input
                  type="text"
                  className="w-full"
                  placeholder="Email"
                  value={recipient.email}
                  onChange={(e) =>
                    updateArrayItem(
                      "recipientsInfo",
                      index,
                      "email",
                      e.target.value
                    )
                  }
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="flex items-center gap-2 w-full">
                <Select
                  className="w-full"
                  options={options}
                  value={recipient.recipientType}
                  disabled={isLoading}
                  onChange={(e) => {
                    updateArrayItem(
                      "recipientsInfo",
                      index,
                      "recipientType",
                      e.target.value
                    );
                  }}
                  required
                />
                <span className="text-nowrap">Recipient type</span>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Select
                  className="w-full"
                  options={optionsTransferType}
                  value={recipient.recipientTransferType}
                  disabled={isLoading}
                  onChange={(e) => {
                    updateArrayItem(
                      "recipientsInfo",
                      index,
                      "recipientTransferType",
                      e.target.value
                    );
                  }}
                  required
                />
                <span className="text-nowrap">Recipient transfer type</span>
              </div>
              <div className="flex gap-2 items-end w-full">
                <div className="flex gap-2 flex-col w-full">
                  <span>Date of Birth:</span>
                  <Input
                    type="date"
                    value={recipient.dateOfBirth}
                    disabled={isLoading}
                    onChange={(e) => {
                      const formattedDate = new Date(e.target.value)
                        .toISOString()
                        .split("T")[0];

                      updateArrayItem(
                        "recipientsInfo",
                        index,
                        "dateOfBirth",
                        formattedDate
                      );
                    }}
                    required
                  />
                </div>
                {/* API only allows US numbers */}
                <Input
                  type="text"
                  placeholder="Phone number"
                  value={recipient.phoneNumber}
                  disabled={isLoading}
                  onChange={(e) => {
                    updateArrayItem(
                      "recipientsInfo",
                      index,
                      "phoneNumber",
                      e.target.value
                    );
                  }}
                  required
                  className="h-10 w-full"
                />
              </div>

              {recipient.recipientTransferType === "BLOCKCHAIN" ? (
                <WalletDetailsFormExtension
                  {...recipient}
                  index={index}
                  isLoading={isLoading}
                  updateArrayItem={updateArrayItem}
                />
              ) : (
                <BankDetailsFormExtension
                  {...recipient}
                  index={index}
                  isLoading={isLoading}
                  updateArrayItem={updateArrayItem}
                />
              )}

              {formData.recipientsInfo.length > 1 && (
                <span
                  className="cursor-pointer mt-2 bg-red-500 hover:bg-red-300 rounded-2xl text-sm p-1 w-fit"
                  onClick={() => removeFromArray("recipientsInfo", index)}
                >
                  Remove
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <Button
          type="submit"
          disabled={formData.payoutAccountId.length === 0 && isLoading}
        >
          {isLoading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin"
              size={"2xl"}
            />
          ) : (
            <>
              Create transfer
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
            </>
          )}
        </Button>
        <Button type="button" onClick={onAddRecipient}>
          Add recipient
        </Button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};
