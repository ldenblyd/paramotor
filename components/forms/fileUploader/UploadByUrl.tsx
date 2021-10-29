import { OnChangeProps } from "hooks/useFileUploader";
import { useState } from "react";

export interface Props {
  onChange: (props: OnChangeProps) => void;
}

const UploadByUrl: React.FC<Props> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="flex">
      <input
        className="w-full"
        type="text"
        placeholder="Use a URL"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        className="p-2 border"
        onClick={() => onChange({ url: inputValue })}
      >
        add
      </button>
    </div>
  );
};

export default UploadByUrl;
