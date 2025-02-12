import { useState } from "react";
import { AccountDetails } from "../../types/accounts";
import clsx from "clsx";
import { AccountItem } from "./AccountItem";
import { CreateTransferForm } from "../Transfers/CreateTransferForm";

export const Account = ({
  index,
  ...account
}: { index: number } & AccountDetails) => {
  const [showAccount, setShowAccount] = useState(index === 0);
  const [showCreateTransfer, setShowCreateTransfer] = useState(false);

  const { name, address, balance, depositAccount, id, blockchain } = account;

  return (
    <div className="flex flex-col gap-3 w-full border border-[#6366F1] rounded-2xl">
      <div
        onClick={() => setShowAccount(!showAccount)}
        className={clsx(
          "flex items-center cursor-pointer justify-between bg-[#6366F1] p-2",
          {
            "rounded-t-2xl": showAccount,
            "rounded-2xl": !showAccount,
          }
        )}
      >
        <h4 className="text-lg font-bold ">Account: {name}</h4>
        {!showAccount && (
          <span className="font-light text-sm">
            {balance.balance} {balance.tokenSymbol}
          </span>
        )}
      </div>
      {showAccount && (
        <div className="flex flex-col gap-2 p-2">
          <AccountItem
            label="Balance"
            value={`${balance.balance} ${balance.tokenSymbol}`}
          />
          <AccountItem label="ID" value={`${id}`} />
          <AccountItem label="Wallet address" value={address} />
          <AccountItem label="Blockchain" value={blockchain} />
          {depositAccount && (
            <div className="flex flex-col">
              <span className="font-bold">
                Virtual (deposit) Bank account details:
              </span>
              <div className="flex flex-col gap-2 pl-2">
                <AccountItem
                  label="Bank name"
                  value={depositAccount.bankName}
                />
                <AccountItem
                  label="Address"
                  value={depositAccount.bankAddress}
                />
                <AccountItem
                  label="Bank beneficiary name"
                  value={depositAccount.bankBeneficiaryName}
                />
                <AccountItem label="Status" value={depositAccount.status} />
              </div>
            </div>
          )}

          <div className="flex flex-col border-t">
            <span
              onClick={() => setShowCreateTransfer(!showCreateTransfer)}
              className={clsx(
                "w-full text-center hover:bg-[#6366F1] border transition-colors border-[#6366F1] text-lg cursor-pointer rounded-2xl font-semibold my-2",
                {
                  "bg-[#6366F1]": showCreateTransfer,
                }
              )}
            >
              Create Transfer
            </span>
            {showCreateTransfer && (
              <CreateTransferForm
                setShowCreateTransfer={setShowCreateTransfer}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
