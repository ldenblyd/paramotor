type Props = {
  label: string;
};

const EngineDetails: React.FC<Props> = ({ label }) => {
  return (
    <div className="border bg-gray-50 inline-block p-1 mr-2 rounded-lg text-xs">
      {label}
    </div>
  );
};

export default EngineDetails;
