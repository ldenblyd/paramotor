import { useState } from "react";

export type TypeInput = "text" | "number";

export interface Bind {
  value: any;
  onChange: any;
}

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
};
