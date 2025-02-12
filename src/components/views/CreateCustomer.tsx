import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../common/Button";
import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../../hooks/useForm";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { FormEvent, useState } from "react";
import { createCustomer } from "../../helpers/api";
import { CreateCustomerDetails } from "../../types/customer";
import { useAppContext } from "../../hooks/useAppContext";

export const CreateCustomer = () => {
  const { setCustomer } = useAppContext();
  const { formData, handleChange, onSingleChange } = useForm({
    name: "",
    organizationType: "INDIVIDUAL",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const options = [
    { value: "BUSINESS", label: "BUSINESS" },
    { value: "INDIVIDUAL", label: "INDIVIDUAL" },
  ];

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setIsLoading(true);
    setError("");

    const res = await createCustomer(formData as CreateCustomerDetails);

    if (res.customer && !res.error) {
      localStorage.setItem("customer", JSON.stringify(res.customer));

      setCustomer(res.customer);
    } else {
      setError("Error");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="pb-3 flex flex-col gap-3 w-fit">
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Select
          options={options}
          value={formData.organizationType}
          disabled={isLoading}
          onChange={(ev) => {
            onSingleChange("organizationType", ev.target.value);
          }}
        />
      </div>
      <Button type="submit" disabled={formData.name.length === 0 && isLoading}>
        {isLoading ? (
          <FontAwesomeIcon icon={faSpinner} className="fa-spin" size={"2xl"} />
        ) : (
          <>
            <FontAwesomeIcon icon={faPlus} />
            Create
          </>
        )}
      </Button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};
