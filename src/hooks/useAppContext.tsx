import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { CustomerDetails } from "../types/customer";
import { AccountDetails } from "../types/accounts";
import { TransferForm } from "../types/transfers";

export const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext);

  const setCustomer = (customer: CustomerDetails) => {
    dispatch({ type: "SET_CUSTOMER", payload: customer });
  };

  const setAccount = (account: AccountDetails) => {
    dispatch({ type: "SET_ACCOUNT", payload: account });
  };

  const setTransfer = (transfer: TransferForm) => {
    dispatch({ type: "SET_TRANSFER", payload: transfer });
  };

  const updateTransfer = (transfer: TransferForm) => {
    dispatch({ type: "UPDATE_TRANSFER", payload: transfer });
  };

  return {
    state,
    dispatch,
    setCustomer,
    setAccount,
    setTransfer,
    updateTransfer,
  };
};
