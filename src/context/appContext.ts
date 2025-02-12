import { createContext, Dispatch } from "react";
import { AppStateProps } from "./Provider";
import { AppProviderAction } from "./reducer";

export interface UserDetailsContextProps {
  state: AppStateProps;
  dispatch: Dispatch<AppProviderAction>;
}
export const AppContext = createContext({} as UserDetailsContextProps);
