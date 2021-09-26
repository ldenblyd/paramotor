import React from "react";
import { getStringInterval } from "../../utils/getMinMaxValue";

export const EngineCard = ({
  imageUrl,
  category,
  description,
  starter,
  brand,
  model,
  power,
  id,
  cc,
}) => {
  const weightList = starter.map((s) => s.weight);
  return (
    <div key={id} className="shadow  max-w-md  rounded">
      <img className="shadow-sm square" src={imageUrl} />
      <div className="p-5 flex flex-col space-y-2">
        <p className="text-sm text-blue-500">{category}</p>
        <p className="text-lg font-bold">
          {brand} {model}
        </p>
        <p className="text-lg">cilindrée: {cc} cc</p>
        <p className="text-lg">
          puissance: {power.hp} Cv at {power.rpm} rpm
        </p>
        <p className="text-lg">poid: {getStringInterval(weightList, "kg")}</p>
      </div>
    </div>
  );
};
