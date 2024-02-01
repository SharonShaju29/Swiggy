import React from "react";
import logo from "../Assets/logo.svg";
import dropdown from "../Assets/dropdown.svg";
import { NavigationOptions } from "../Config";

const NavigationBar = () => {
  return (
    <div className="h-[80px] fixed w-full shadow-md items-center flex justify-center z-[1000] bg-white">
      <div className="max-w-[1200px] items-center flex">
        <img
          src={logo}
          className="h-[48px] w-[48px] hover:h-[52px] transition-all"
        />
        <div
          id="location"
          className="text-[14px] flex ml-10 cursor-pointer items-center py-4"
        >
          <b className="border-b-2 pb-0.5 border-black hover:text-[#fc8019] hover:border-[#fc8019]">
            J. P. Nagar
          </b>
          <span className="text-[#686b78] pl-2">
            1st Phase, J. P. Nagar, Bengaluru...
          </span>
          <img src={dropdown} className="h-[24px] w-[24px] ml-1.5 mt-1" />
        </div>
        <div className="ml-[150px] hidden lg:flex">
          {NavigationOptions.map((item, index) => (
            <div>
            <div
              className="flex ml-[45px] cursor-pointer hover:text-[#fc8019]"
              onMouseOver={() => (
                (document.getElementById(index).src = item.hoverIcon),
                (document.getElementById(`${index}-span`).style.color =
                  "#fc8019")
              )}
              onMouseLeave={() => (
                (document.getElementById(index).src = item.icon),
                (document.getElementById(`${index}-span`).style.color =
                  "#3d4152")
              )}
            >
              <img
                src={item.icon}
                id={index}
                className="h-[24px] hover:text-[#fc8019]"
              />

              <span
                id={`${index}-span`}
                className="ml-2 text-[#3d4152] hover:text-[#fc8019]"
              >
                {item.name}
              </span>
           
            </div>
            <span className="text-[10px] text-[#ffa700] absolute top-[24px] ml-[54px] font-bold">
                {item.badgeName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
