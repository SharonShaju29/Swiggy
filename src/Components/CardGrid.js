import React from "react";
import rating from "../Assets/rating.svg";
import pureVeg from "../Assets/pureVeg.avif";

const CardGrid = (props) => {
  return (
    <div className="lg:grid lg:grid-cols-4 mt-4 lg:mt-0 overflow-x-hidden">
      {props.src.map((item) => (
        <div className="pr-[32px] lg:w-[273px] mb-10 lg:my-4 lg:mx-2 hover:scale-95 transition-transform cursor-pointer lg:block flex overflow-x-hidden">
          <div className="flex h-[96px] w-[88px] lg:h-[182px] lg:w-[273px] relative lg:card-shadow overflow-x-hidden">
            <img
              src={item.link}
              className="object-cover h-[96px] w-[88px] lg:h-[182px] lg:w-[273px] max-w-[273px] rounded-[16px]"
            />
          </div>
          <div className="text-left pl-4 mt-2 overflow-x-hidden">
            <div className="flex justify-between w-[65vw] items-center">
              <h2 className="font-semibold lg:text-[18px] text-[#3e4152]">
                {item.title}
              </h2>{" "}
              <img className="lg:hidden w-[60px] h-[16px]" src={pureVeg} />
            </div>
            <div className="flex text-[14px] lg:text-[16px]">
              <img src={rating} height="18px" width="18px" />

              <span className="font-semibold pl-1 text-[#696b79]">
                {item.rating}
              </span>
              <span className="font-semibold pl-1 text-[#696b79]">
                {item.deliveryTime}
              </span>
            </div>
            <div className="text-[14px] lg:text-[16px] text-[#93959f]">
              {item.foodStyle}
            </div>
            <span className="hidden lg:block text-[#93959f]">
              {item.location}
            </span>
          </div>
        </div>
      ))}
      <div className="lg:hidden text-[17px] flex items-center my-4 justify-center">
        <button className="h-[60px] w-[90vw] mt-4 bg-[#E46D47] text-white font-bold rounded-md ">
          See all restaurants
        </button>
      </div>
   
    </div>
  );
};

export default CardGrid;
