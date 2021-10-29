import Select from "react-select";

type Suggestion = {
  label: string;
  value: string;
};

interface Props {
  title: string;
  suggestions: Suggestion[];
}

const SelectComponent: React.FC<Props> = ({ suggestions, title }) => {
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
    <>
      <p className="capitalize">{title}</p>
      <Select
        id={`${title}-select`}
        instanceId={`${title}-select`}
        onChange={() => ""}
        options={suggestions}
        isClearable
        styles={customStyles}
        theme={customTheme}
      />
    </>
  );
};

SelectComponent.defaultProps = {
  title: "",
  suggestions: [],
};

export default SelectComponent;
