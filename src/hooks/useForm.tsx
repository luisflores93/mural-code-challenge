import { ChangeEvent, useState } from "react";

export interface FormValues {
  [key: string]: unknown;
}

export const useForm = <T extends FormValues>(initialValue: T) => {
  const [formData, setFormData] = useState<T>(initialValue);

  const reset = () => {
    setFormData(initialValue);
  };

  const handleChange = (
    { target }: ChangeEvent<HTMLInputElement>,
    transformValue: (value: string) => string = (value) => value
  ) => {
    const value = transformValue(target.value);
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const onSingleChange = <K extends keyof T>(key: K, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const addToArray = <K extends keyof T>(key: K, newItem: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [key]: [...(prev[key] as unknown[]), newItem],
    }));
  };

  const removeFromArray = <K extends keyof T>(key: K, index: number) => {
    setFormData((prev) => ({
      ...prev,
      [key]: (prev[key] as unknown[]).filter((_, i) => i !== index),
    }));
  };

  const updateArrayItem = <K extends keyof T>(
    key: K,
    index: number,
    field: string,
    value: unknown
  ) => {
    const hasInnerObject = field.includes(".");

    const splittedField: string[] = field.split(".");

    const has3rdLevel = splittedField.length === 3;

    const [field1, field2, field3] = splittedField;

    setFormData((prev) => ({
      ...prev,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key]: (prev[key] as Record<any, any>[]).map((item, i) =>
        i === index
          ? hasInnerObject
            ? has3rdLevel
              ? {
                  ...item,
                  [field1]: {
                    ...item[field1],
                    [field2]: {
                      ...item[field1][field2],
                      [field3]: value,
                    },
                  },
                }
              : {
                  ...item,
                  [field1]: {
                    ...item[field1],
                    [field2]: value,
                  },
                }
            : { ...item, [field]: value }
          : item
      ),
    }));
  };

  return {
    formData,
    handleChange,
    reset,
    onSingleChange,
    setFormData,
    addToArray,
    removeFromArray,
    updateArrayItem,
  };
};
