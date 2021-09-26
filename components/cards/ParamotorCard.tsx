import React from "react";

export const ParamotorCard = ({
  id,
  imageUrl,
  category,
  description,
  brand,
  model,
}) => {
  return (
    <div key={id} className="shadow  max-w-md  rounded">
      <img className="shadow-sm square" src={imageUrl} />
      <div className="p-5 flex flex-col space-y-2">
        <p className="text-sm text-blue-500">{category}</p>
        <p className="text-lg font-medium">
          {brand} {model}
        </p>
      </div>
    </div>
  );
};
