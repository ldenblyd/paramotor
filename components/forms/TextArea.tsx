import { UseInput } from "hooks/useInputs";

type Props = UseInput & {
  placeHolder?: string;
};

const Textaera: React.FC<Props> = ({ placeHolder, onChange }) => {
  return (
    <textarea
      className="w-full"
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};

export default Textaera;
