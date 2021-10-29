import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

export type UseSelect = {
  value: string | number;
  options: Option[];
  setOptions: (opts: Option[]) => void;
  reset: () => void;
  onChange: (opt: Option) => void;
};

export const useSelect = (
  opts: Option[],
  initialValue?: string | number
): UseSelect => {
  const [value, setValue] = useState(initialValue);
  const [options, setOptions] = useState(opts);

  return {
    value,
    options,
    setOptions: (opts) => setOptions(opts),
    reset: () => setValue(undefined),
    onChange: async (brand) => {
      setValue(brand?.value);
    },
  };
};
