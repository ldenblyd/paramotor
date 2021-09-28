import { Bind } from "../../hooks/useInput";

interface Props {
  placeHolder: string;
  bind: Bind;
}

const Textaera: React.FC<Props> = ({ placeHolder, bind }) => {
  return <textarea className="m-2" {...bind} placeholder={placeHolder} />;
};

Textaera.defaultProps = {
  placeHolder: "",
};

export default Textaera;
