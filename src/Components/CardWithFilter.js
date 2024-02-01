import React from "react";

const CardWithFilter = (props) => {
  return (
    <div className="mt-2 flex flex-col lg:w-[1200px] w-[100vw]">
      <div className="flex items-center lg:w-[1200px] w-[100vw] justify-between">
        <h2 className="text-[24px] font-bold">{props.header}</h2>
      </div>
    </div>
  );
};

export default CardWithFilter;
