import React from "react";
import { filterHome, TopRestaurantChainList } from "../Config";
import CardGrid from "./CardGrid";
import restaurants from "../Assets/restaurants.avif";
import liveForFood from "../Assets/liveForFood.avif";

const CardWithFilter = (props) => {
  return (
    <div className="mt-2 flex flex-col lg:w-[1200px] w-[100vw] overflow-x-hidden">
      <div className="flex flex-col mt-8 lg:mt-0 pl-5 lg:pl-0 lg:w-[1200px] w-[100vw] text-left">
        <div className="flex items-center">
          <img src={restaurants} className="h-[20px] w-[20px] lg:hidden mr-2" />
          <h2 className="text-[24px] lg:block hidden font-bold">
            {props.header}
          </h2>
          <h2 className="text-[20px] font-bold lg:hidden">{props.mobHeader}</h2>
        </div>
        <div className="text-[16px] block lg:hidden text-[#686b78] mb-2">
          {props.subHeader}
        </div>
        <div id="filter-items" className="hidden lg:flex mt-4">
          <div className="flex w-full overflow-x-scroll no-scrollbar pb-4">
            {filterHome.map((item) => (
              <div className="whitespace-nowrap">
                <div
                  style={{ "box-shadow": "rgba(0, 0, 0, 0.15) 0px 5px 10px" }}
                  className="mr-2 flex items-center rounded-[18px] hover:shadow-xl px-3 py-2 text-[14px] cursor-pointer text-[#02060cbf]"
                >
                  <div className="">{item.name}</div>
                  <img src={item.icon} className="ml-1 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-x-hidden">
          <CardGrid src={TopRestaurantChainList} />
        </div>
      </div>
      <div className="lg:hidden">
        <img src={liveForFood} />
      </div>
    </div>
  );
};

export default CardWithFilter;
