import React from "react";

const SelectCard = ({ bg, text }) => {
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={bg} alt="/" />
      <div className="absolute bg-gray-900/30 top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-xl font-bold text-white absolute">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SelectCard;
