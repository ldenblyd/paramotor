interface Props {
  list: any;
  Component: React.FC;
}

const Grid: React.FC<Props> = ({ list, Component }) => {
  return (
    <div className="container mx-auto max-w-5xl my-20">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((list) => (
          <li key={list.id}>
            <Component {...list} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;
