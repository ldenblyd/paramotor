type DataTable = {
  label: string;
  value: string;
};

interface Props {
  data: DataTable[];
}

const Grid: React.FC<Props> = ({ data }) => {
  return (
    <ul>
      {data.map(({ label, value }) => (
        <li
          key={label}
          className="flex justify-between border-b-2 last:border-0"
        >
          <span className="font-thin capitalize">{label}</span>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default Grid;
