import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../common/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { CreateAccountForm } from "../Accounts/CreateAccountForm";
import { useAppContext } from "../../hooks/useAppContext";
import { Account } from "../Accounts/Account";
import { Transfers } from "../Transfers/Transfers";

export const Accounts = () => {
  const { state } = useAppContext();
  const [showForm, setShowForm] = useState(false);
  const [showTransfers, setShowTransfers] = useState(false);

  return (
    <div className="flex flex-col max-w-[680px] w-full gap-4">
      <div className="flex gap-4">
        {!showForm && (
          <Button onClick={() => setShowForm(!showForm)}>
            <FontAwesomeIcon icon={faPlus} />
            Create account
          </Button>
        )}
        {state.transfers.length > 0 && (
          <Button
            type="button"
            onClick={() => setShowTransfers(!showTransfers)}
          >
            {showTransfers ? "Accounts" : "Transfers"}
          </Button>
        )}
      </div>

      {showTransfers ? (
        <Transfers />
      ) : (
        <>
          {showForm && <CreateAccountForm setShowForm={setShowForm} />}
          <div className="flex flex-col gap-4 mt-6">
            {state.accounts.length > 0 ? (
              state.accounts.map((account, idx) => (
                <Account key={account.id} index={idx} {...account} />
              ))
            ) : (
              <span>You don't have any accounts yet...</span>
            )}
          </div>
        </>
      )}
    </div>
  );
};
