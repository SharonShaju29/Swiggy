import React from "react";
import { filterHome, TopRestaurantChainList } from "../Config";
import CardGrid from "./CardGrid";

const CardWithFilter = (props) => {
  return (
    <div className="mt-2 flex flex-col lg:w-[1200px] w-[100vw]">
      <div className="flex flex-col  ml-5 lg:ml-0 lg:w-[1200px] w-[100vw] text-left">
        <h2 className="text-[20px] lg:text-[24px] font-bold ">
          {props.header}
        </h2>
        <div className="text-[16px] block lg:hidden">{props.subHeader}</div>
        <div id="filter-items" className="hidden lg:flex mt-4">
          <div className="flex w-full overflow-x-scroll no-scrollbar pb-4">
            {filterHome.map((item) => (
              <div className="whitespace-nowrap">
                <div
                  style={{ "box-shadow": "rgba(0, 0, 0, 0.15) 0px 5px 10px" }}
                  className="mr-2 flex items-center rounded-[18px] hover:shadow-xl px-3 py-2 text-[14px] cursor-pointer text-[#02060cbf]"
                >
                  <div className="">{item.name}</div>
                  <img src={item.icon} className=" ml-1 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <CardGrid src={TopRestaurantChainList} />
        </div>
      </div>
    </div>
  );
};

export default CardWithFilter;
