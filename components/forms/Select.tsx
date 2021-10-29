import { UseSelect } from "hooks/useSelect";
import Select from "react-select";

const SelectComponent: React.FC<UseSelect> = ({ options, onChange }) => {
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
    <Select
      id="select"
      instanceId="select"
      onChange={onChange}
      options={options}
      isClearable
      styles={customStyles}
      theme={customTheme}
    />
  );
};

SelectComponent.defaultProps = {
  options: [],
};

export default SelectComponent;
