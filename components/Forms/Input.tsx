import { Bind, TypeInput } from "hooks/useInput";

interface Props {
  placeHolder: string;
  bind: Bind;
  type: TypeInput;
}

const Input: React.FC<Props> = ({ placeHolder, bind, type }) => {
  return (
    <input type={type} className="m-2" {...bind} placeholder={placeHolder} />
  );
};

Input.defaultProps = {
  placeHolder: "",
  type: "text",
};

export default Input;
