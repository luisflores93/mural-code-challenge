import { AccountDetails, CreateAccountDetails } from "../types/accounts";
import { APIUrls } from "../types/api";
import { CreateCustomerDetails, CustomerDetails } from "../types/customer";
import {
  CreateTransferDetails,
  Transfer,
  TransferForm,
} from "../types/transfers";
import { API, API_BASE } from "./const";

export const apiRequest = async (
  path: APIUrls,
  { options, query }: { options?: RequestInit; query?: string }
) => {
  try {
    const response = await fetch(
      `${API_BASE}/${API[path]}${query ? query : ""}`,
      {
        ...options,
        headers: {
          ...options?.headers,
          accept: "application/json",
          "content-type": "application/json",
          authorization:
            "Bearer d1b60c6890f68578753c106e:4a46718dbed384c51ab80153b29d99f29f3b76b3cba85151d6c60a59985cd9ad4b200483:5f82aa48a3ffeb9b7b691345cbbf0c62.da121edd5cec10065805f55eca5eef1bb996e07c84d9c50824c116b96cacf5ed",
        },
      }
    );
    const data = await response.json();

    if (data.error || data.statusCode === 401) {
      throw new Error(data.message);
    }

    return { data };
  } catch (error) {
    console.log(error);

    return { error, data: null };
  }
};

export const createCustomer = async (
  customerDetails: CreateCustomerDetails
): Promise<{ customer: CustomerDetails | null; error?: unknown }> => {
  try {
    const res = await apiRequest("CUSTOMER", {
      options: {
        method: "POST",
        body: JSON.stringify(customerDetails),
      },
    });

    return { customer: res.data };
  } catch (error) {
    return { error, customer: null };
  }
};

export const getCustomers = async (
  customerId?: string
): Promise<{
  customer?: CustomerDetails | null;
  customers?: CustomerDetails[] | null;
  error?: unknown;
}> => {
  try {
    const res = await apiRequest("CUSTOMER", {
      query: customerId ? `/${customerId}` : undefined,
    });

    if (customerId) {
      return { customer: res.data };
    } else {
      return { customers: res.data };
    }
  } catch (error) {
    return customerId ? { error, customer: null } : { error, customers: null };
  }
};

export const createAccount = async (
  accountDetails: CreateAccountDetails
): Promise<{ account: AccountDetails | null; error?: unknown }> => {
  try {
    const objCopy = accountDetails;

    if (!accountDetails.description) delete objCopy.description;
    if (!accountDetails.organizationCustomerId)
      delete objCopy.organizationCustomerId;

    const res = await apiRequest("ACCOUNTS", {
      options: {
        method: "POST",
        body: JSON.stringify(objCopy),
      },
    });

    console.log(res);

    return { account: res.data };
  } catch (error) {
    return { error, account: null };
  }
};

export const getAccounts = async (
  accountId?: string
): Promise<{
  account?: AccountDetails | null;
  accounts?: AccountDetails[] | null;
  error?: unknown;
}> => {
  try {
    const res = await apiRequest("ACCOUNTS", {
      query: accountId ? `/${accountId}` : undefined,
    });

    if (accountId) {
      return { account: res.data };
    } else {
      return { accounts: res.data };
    }
  } catch (error) {
    return accountId ? { error, account: null } : { error, accounts: null };
  }
};

export const createTransferRequest = async (
  transferDetails: CreateTransferDetails
): Promise<{ transfer: TransferForm | null; error?: unknown }> => {
  try {
    const objCopy: CreateTransferDetails = {
      ...transferDetails,
      recipientsInfo: transferDetails.recipientsInfo.filter(
        (item) => !!item.name || !!item.tokenAmount || !!item.email
      ),
    };

    const updatedPayload: CreateTransferDetails = {
      ...objCopy,
      recipientsInfo: objCopy.recipientsInfo.map((recipient) => {
        const updatedRecipient = { ...recipient };

        if (updatedRecipient.recipientTransferType === "FIAT") {
          delete updatedRecipient.walletDetails;
        } else {
          delete updatedRecipient.bankDetails;
        }

        return updatedRecipient;
      }),
    };

    const res = await apiRequest("TRANSFER_REQUESTS", {
      options: {
        method: "POST",
        body: JSON.stringify(updatedPayload),
      },
    });

    return { transfer: res.data };
  } catch (error) {
    return { error, transfer: null };
  }
};

export const getTransfers = async (
  transferId?: string
): Promise<{
  transfer?: Transfer | null;
  transfers?: Transfer[] | null;
  error?: unknown;
}> => {
  try {
    const res = await apiRequest("TRANSFER_REQUESTS", {
      query: transferId ? `/${transferId}` : undefined,
    });

    if (transferId) {
      return { transfer: res.data.results };
    } else {
      return { transfers: res.data.results };
    }
  } catch (error) {
    return transferId ? { error, transfer: null } : { error, transfers: null };
  }
};

export const executeTransfer = async (
  transferId?: string
): Promise<{
  transfer: Transfer | null;
  error?: unknown;
}> => {
  try {
    const res = await apiRequest("TRANSFER_REQUESTS", {
      query: "/execute",
      options: {
        method: "POST",
        body: JSON.stringify({ transferRequestId: transferId }),
        headers: {
          "mural-account-api-key":
            "57916d5e2e7ec842bc6f752a:80b6604e666434fd3db8586cb35df08b830219c7f45249cd74b2dd3852224ad0caf60fa4:f3f1f459817ba7f4fbb93fc0c3c1a967.3be4f0938b6374b38fef0404bd5cb956e9f7e6dd096fd231152020eaafcfa77c",
        },
      },
    });

    return { transfer: res.data };
  } catch (error) {
    return { error, transfer: null };
  }
};
