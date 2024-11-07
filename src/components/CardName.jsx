import React from "react";

const CardName = ({ name, className }) => {
  return (
    <div className="flex items-center justify-between px-4 pt-4 w-[339px] ml-5 mt-10 bg-slate-200 py-8">
      <h2 className="text-[20px] font-popins text-gray-700 font-bold relative pl-6">
        {name}
        <span
          className={`absolute left-[-4px] top-1/2 -translate-y-1/2 w-[20px] h-[25px] rounded-l-full ${className}`}
        ></span>
      </h2>
      <span className="text-[15px] font-popins text-gray-700 font-bold bg-gray-300 px-2 py-1 rounded-[5px]">
        0
      </span>
    </div>
  );
};

export default CardName;
