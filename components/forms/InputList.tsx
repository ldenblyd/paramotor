import Input from "components/forms/Input";
import Image from "next/image";
import { UseArrayInput } from "../../hooks/useInputs";

const InputList: React.FC<UseArrayInput> = ({
  values,
  inputType,
  onChange,
  add,
  remove,
}) => {
  return (
    <>
      {values.map((value, i) => (
        <div key={i} className="flex mt-2">
          <div className="w-20 mr-2">
            <Input
              inputType={inputType}
              value={value}
              onChange={(e) => onChange(e, i)}
            />
          </div>
          {values.length > 1 && (
            <Image
              className="cursor-pointer"
              src="/icons/less.svg"
              alt="more"
              width={32}
              height={32}
              onClick={() => remove(i)}
            />
          )}
        </div>
      ))}
      <div className="mt-2">
        <Image
          className="cursor-pointer"
          src="/icons/plus.svg"
          alt="more"
          width={32}
          height={32}
          onClick={add}
        />
      </div>
    </>
  );
};

export default InputList;
