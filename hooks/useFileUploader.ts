// TODO: implement pdf upload

import { useState } from "react";
import toast from "react-hot-toast";

export type FileType = "image"; // | "pdf";

export type OnChangeProps = {
  formData?: FormData;
  url: string;
};

export type UseFileUploader = {
  value: string;
  fileType: FileType;
  onChange: (props: OnChangeProps) => void;
  onError: () => void;
  reset: () => void;
};

export const useFileUploader = (fileType: FileType): UseFileUploader => {
  const [value, setFileValue] = useState("");

  const reset = () => {
    setFileValue("");
  };

  const onError = () => {
    reset();
    toast.error(`fail to load ${fileType}.`);
  };

  const onChange = ({ url }) => {
    setFileValue(url);
  };

  return {
    value,
    fileType,
    onError,
    onChange,
    reset,
  };
};
