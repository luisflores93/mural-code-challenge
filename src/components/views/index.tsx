import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { Header } from "../common/Header";
import { CreateCustomer } from "./CreateCustomer";
import { Accounts } from "./Accounts";

export const HomeScreen = () => {
  const { state } = useAppContext();
  const [isLoading, setIsLoading] = useState<null | boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, [state.customerDetails]);

  const customerExists = !!state.customerDetails;

  return (
    <div className="max-w-[1280px] w-full flex flex-col justify-start p-6 m-0 gap-8">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header>{customerExists ? "Account" : "Create customer"}</Header>
          {!customerExists ? <CreateCustomer /> : <Accounts />}
        </>
      )}
    </div>
  );
};
