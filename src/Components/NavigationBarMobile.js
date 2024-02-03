import React from "react";
import { navigationBarMobileItems } from "../Config";

const NavigationBarMobile = () => {
  return (
    <div className="flex fixed w-[100vw]  h-[56px] bottom-0 left-0 right-0 bg-white border-t-2 justify-center items-center">
      <div className="flex w-[85vw] justify-between">
        {navigationBarMobileItems.map((item) => (
          <div className="flex-col w-8 justify-center cursor-pointer">
            <div className="flex justify-center">
              <img src={item.icon} className="h-[24px] w-[24px]" />
            </div>
            <div className="flex justify-center text-[10px] ">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBarMobile;
