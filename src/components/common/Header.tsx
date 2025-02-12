import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-2xl font-semibold tracking-tight">{children}</h1>;
};
