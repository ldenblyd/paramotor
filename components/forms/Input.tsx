import { TypeInput, UseInput } from "hooks/useInputs";

type Props = UseInput & {
  inputType?: TypeInput;
  placeHolder?: string;
};

const Input: React.FC<Props> = ({
  value,
  placeHolder,
  inputType,
  onChange,
}) => {
  return (
    <input
      className="w-full"
      onChange={onChange}
      value={value}
      type={inputType}
      placeholder={placeHolder}
    />
  );
};

Input.defaultProps = {
  inputType: "text",
};

export default Input;
