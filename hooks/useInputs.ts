import { useState } from "react";

export type TypeInput = "text" | "number";

export type UseInput = {
  value: string | number;
  inputType: TypeInput;
  reset?: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const useInput = (
  inputType: TypeInput,
  initialValue: string | number = ""
): UseInput => {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    inputType,
    reset,
    onChange,
  };
};

export type UseArrayInput = {
  values: string[] | number[];
  inputType: TypeInput;
  reset?: () => void;
  add: () => void;
  remove: (i) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => void;
};

export const useArrayInput = (inputType: TypeInput): UseArrayInput => {
  const [values, setValues] = useState([""]);

  const reset = () => {
    setValues([]);
  };

  const add = () => {
    const newValues = [...values, ""];
    setValues(newValues);
  };

  const remove = (i) => {
    if (values.length <= 1) return;
    const newValues = [...values];
    newValues.splice(i, 1);
    setValues(newValues);
  };

  const onChange = (event, i) => {
    const newValues = [...values];
    newValues.splice(i, 1, event.target.value);
    setValues(newValues);
  };

  return {
    values,
    inputType,
    reset,
    add,
    remove,
    onChange,
  };
};
