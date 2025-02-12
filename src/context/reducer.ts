import { AccountDetails } from "../types/accounts";
import { CustomerDetails } from "../types/customer";
import { Transfer } from "../types/transfers";
import { AppStateProps } from "./Provider";

export type AppProviderAction =
  | {
      type: "SET_CUSTOMER";
      payload: CustomerDetails;
    }
  | {
      type: "CLEAR_CUSTOMER";
    }
  | {
      type: "SET_ACCOUNT";
      payload: AccountDetails;
    }
  | {
      type: "SET_ACCOUNTS";
      payload: AccountDetails[];
    }
  | {
      type: "SET_TRANSFERS";
      payload: Transfer[];
    }
  | {
      type: "SET_TRANSFER";
      payload: Transfer;
    }
  | {
      type: "UPDATE_TRANSFER";
      payload: Transfer;
    };

export type AppReducerType = (
  state: AppStateProps,
  action: AppProviderAction
) => AppStateProps;

export const reducer: AppReducerType = (state, action) => {
  switch (action.type) {
    case "CLEAR_CUSTOMER":
      return state;
    case "SET_CUSTOMER":
      return {
        ...state,
        customerDetails: action.payload,
      };
    case "SET_ACCOUNT":
      return { ...state, accounts: [...state.accounts, action.payload] };
    case "SET_ACCOUNTS":
      return { ...state, accounts: action.payload };
    case "SET_TRANSFERS":
      return { ...state, transfers: action.payload };
    case "SET_TRANSFER":
      return {
        ...state,
        transfers: state.transfers.some(
          (transfer) => transfer.id === action.payload.id
        )
          ? state.transfers.map((transfer) =>
              transfer.id === action.payload.id
                ? {
                    ...transfer,
                    ...action.payload,
                  }
                : transfer
            )
          : [...state.transfers, action.payload],
      };
    case "UPDATE_TRANSFER":
      return {
        ...state,
        transfers: state.transfers.map((transfer) =>
          transfer.id === action.payload.id ? action.payload : transfer
        ),
      };
    default:
      return state;
  }
};
