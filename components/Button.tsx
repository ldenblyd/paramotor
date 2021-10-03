type Props = {
  label: string;
};

const Home: React.FC<Props> = ({ label }) => {
  return (
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-1 rounded">
      {label}
    </button>
  );
};

export default Home;
