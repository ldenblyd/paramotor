import React from "react";

export const WingCard = ({ imageUrl, category, brand, model }) => {
  return (
    <div className="shadow  max-w-md  rounded">
      <img
        className="shadow-sm square"
        src={imageUrl}
        alt={`${brand} ${model}`}
      />
      <div className="p-5 flex flex-col space-y-2">
        <p className="text-sm text-blue-500">{category}</p>
        <p className="text-lg font-medium">
          {brand} {model}
        </p>
      </div>
    </div>
  );
};
