import CreatableSelect from "react-select/creatable";
import { useState } from "react";
import { UseSelect } from "hooks/useSelect";

type Props = UseSelect & {
  createAction: (value) => void;
};

const SelectComponent: React.FC<Props> = ({
  options,
  createAction,
  onChange,
}) => {
  const [loading, setLoading] = useState(false);

  const handleCreate = async (value) => {
    setLoading(true);
    await createAction(value);
    setLoading(false);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 42,
      minHeight: 42,
    }),
  };

  const customTheme = (theme) => ({
    ...theme,
    borderRadius: 0,
  });

  return (
    <CreatableSelect
      id="select"
      instanceId="select"
      isDisabled={loading}
      isLoading={loading}
      onCreateOption={handleCreate}
      options={options}
      isClearable
      styles={customStyles}
      theme={customTheme}
      onChange={onChange}
    />
  );
};

SelectComponent.defaultProps = {
  options: [],
};

export default SelectComponent;
