import { Seat } from "../../types/seat";
import { getStringInterval } from "../../utils/getMinMaxValue";

export const SeatCard: React.FC<Seat> = ({
  imageUrl,
  category,
  brand,
  model,
  size,
}) => {
  const weightList = size.map((s) => s.weight);
  const heightList = size.reduce((acc, s) => {
    acc.push(s.height.min);
    acc.push(s.height.max);
    return acc;
  }, []);

  return (
    <div className="shadow  max-w-md  rounded">
      <img
        className="shadow-sm square"
        src={imageUrl}
        alt={`${brand} ${model}`}
      />
      <div className="p-5 flex flex-col space-y-2">
        <p className="text-sm text-blue-500">{category}</p>
        <p className="text-lg font-bold">
          {brand} {model}
        </p>

        <p className="text-lg">
          poid pilote: {getStringInterval(weightList, "kg")}
        </p>

        <p className="text-lg">
          taille pilote: {getStringInterval(heightList, "cm")}
        </p>
      </div>
    </div>
  );
};

export default SeatCard;
