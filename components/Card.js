import React from "react";

const Card = () => {
  return (
    <div className="bg-white rounded-md w-1/3 shadow-xl m-4 flex flex-row items-center">
      <div className="flex-none">
        <img
          src="https://picsum.photos/300/300"
          className="w-40 rounded rounded-r-none"
        />
      </div>
      <div className="p-3">
        <p className="font-bold text-lg text-blue-500">John Snow</p>
        <span className="font-normal text-base text-gray-700 italic">
          Lorem ipsum dolor sit amet, consectetuj szqpe yuqw a ui.
        </span>
      </div>
    </div>
  );
};

export default Card;
