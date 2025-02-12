import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { TransferComponent } from "./Transfer";

export const Transfers = () => {
  const { state } = useAppContext();
  const [activeTransfer, setActiveTransfer] = useState("");
  const { transfers } = state;
  return (
    <div className="flex flex-col gap-4">
      {transfers.map((transfer, index) => (
        <TransferComponent
          key={transfer.id}
          transfer={transfer}
          setActiveTransfer={setActiveTransfer}
          activeTransfer={activeTransfer}
          index={index}
        />
      ))}
    </div>
  );
};
