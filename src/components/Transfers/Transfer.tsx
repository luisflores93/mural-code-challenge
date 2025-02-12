import { AccountItem } from "../Accounts/AccountItem";
import { Transfer as TransferType } from "../../types/transfers";
import clsx from "clsx";
import { Button } from "../common/Button";
import { useState } from "react";
import { executeTransfer } from "../../helpers/api";
import { useAppContext } from "../../hooks/useAppContext";

interface Props {
  transfer: TransferType;
  setActiveTransfer: (val: string) => void;
  activeTransfer: string;
  index: number;
}

export const TransferComponent = ({
  transfer,
  setActiveTransfer,
  activeTransfer,
  index,
}: Props) => {
  const { setTransfer } = useAppContext();
  const isActiveTransfer = activeTransfer === transfer.id;
  const [loading, setLoading] = useState(false);

  const handleExecute = async () => {
    setLoading(true);
    const executedTransferRes = await executeTransfer(transfer.id);
    if (executedTransferRes.transfer) {
      setTransfer(executedTransferRes.transfer);
    } else {
      alert(executedTransferRes.error);
    }
    setLoading(false);
  };

  return (
    <div
      className="flex flex-col border border-[#6366F1] rounded-xl"
      key={transfer.id}
    >
      <div
        className={clsx(
          "bg-[#6366F1] cursor-pointer flex justify-between p-2",
          {
            "rounded-t-xl": isActiveTransfer,
            "rounded-xl": !isActiveTransfer,
          }
        )}
        onClick={() =>
          setActiveTransfer(activeTransfer !== transfer.id ? transfer.id : "")
        }
      >
        <span>Transfer:</span>
        {!isActiveTransfer && <span>{transfer.id}</span>}
      </div>

      {isActiveTransfer ||
        (index === 0 && (
          <div className="flex flex-col gap-2 p-2">
            <AccountItem label="ID" value={transfer.id} />
            <AccountItem label="Status" value={transfer.status} />
            <AccountItem label="Created At" value={transfer.createdAt} />
            {transfer.transactionHash && (
              <AccountItem
                label="Transaction hash"
                value={transfer.transactionHash}
              />
            )}
            {transfer.memo && (
              <AccountItem label="Memo" value={transfer.memo} />
            )}
            <span className="font-bold">Recipients info:</span>
            <div className="ml-4 flex flex-col">
              {transfer.recipientsInfo.map((recipient) => (
                <div className="flex flex-col gap-2" key={recipient.id}>
                  <AccountItem label="ID" value={`${recipient.id}`} />
                  <AccountItem
                    label="Token amount"
                    value={`${recipient.tokenAmount}`}
                  />
                  <AccountItem
                    label="Tranfer type"
                    value={`${recipient.recipientTransferType}`}
                  />
                </div>
              ))}
            </div>
            {transfer.status !== "EXECUTED" && (
              <Button type="button" onClick={handleExecute} disabled={loading}>
                Execute transfer
              </Button>
            )}
          </div>
        ))}
    </div>
  );
};
