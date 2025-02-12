import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../hooks/useAppContext";
import { useForm } from "../../hooks/useForm";
import { FormEvent, useState } from "react";
import { createAccount } from "../../helpers/api";

interface CreateAccountFormProps {
  setShowForm: (value: boolean) => void;
}

export const CreateAccountForm = ({ setShowForm }: CreateAccountFormProps) => {
  const { setAccount } = useAppContext();
  const { formData, handleChange } = useForm({
    name: "",
    description: "",
    organizationCustomerId: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setIsLoading(true);
    setError("");

    const res = await createAccount(formData);

    if (res.account && !res.error) {
      setAccount(res.account);
    } else {
      setError("Error");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="pb-3 flex flex-col gap-3 w-full">
        <Input
          type="text"
          name="name"
          placeholder="Account name"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
        />
        <div className="flex gap-2 items-center">
          <Input
            type="text"
            name="description"
            className="w-full"
            placeholder="Account description"
            value={formData.description}
            onChange={handleChange}
            disabled={isLoading}
          />
          <span>(optional)</span>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-end w-full">
        <Button
          type="submit"
          disabled={formData.name.length === 0 && isLoading}
        >
          {isLoading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin"
              size={"2xl"}
            />
          ) : (
            <>
              <FontAwesomeIcon icon={faPlus} />
              Create
            </>
          )}
        </Button>
        <Button type="button" onClick={() => setShowForm(false)}>
          Cancel
        </Button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};
