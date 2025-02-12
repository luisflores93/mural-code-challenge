import { ReactNode, useEffect, useReducer, useState } from "react";
import { AppContext } from "./appContext";
import { reducer } from "./reducer";
import { AccountDetails } from "../types/accounts";
import { Transfer } from "../types/transfers";
import { CustomerDetails } from "../types/customer";
import { getAccounts, getCustomers, getTransfers } from "../helpers/api";

export interface AppStateProps {
  customerDetails: CustomerDetails | null;
  accounts: AccountDetails[];
  transfers: Transfer[];
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {
    accounts: [],
    customerDetails: null,
    transfers: [],
  });
  const [render, setRender] = useState(false);

  console.log("AppContext :: ", state);

  useEffect(() => {
    (async () => {
      setRender(false);
      const customer = localStorage.getItem("customer");
      if (customer) {
        const parsedCustomer: CustomerDetails = JSON.parse(customer);

        const customerRes = await getCustomers(parsedCustomer.id);

        if (customerRes.customer) {
          dispatch({
            type: "SET_CUSTOMER",
            payload: customerRes.customer,
          });

          const [accountsRes, transfersRes] = await Promise.all([
            getAccounts(),
            getTransfers(),
          ]);

          if (accountsRes.accounts)
            dispatch({
              type: "SET_ACCOUNTS",
              payload: accountsRes.accounts,
            });

          if (transfersRes.transfers) {
            dispatch({
              type: "SET_TRANSFERS",
              payload: transfersRes.transfers,
            });
          }
        }
      } else {
        dispatch({
          type: "CLEAR_CUSTOMER",
        });
      }
      setRender(true);
    })();
  }, []);

  if (!render) {
    return <span>Loading...</span>;
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
