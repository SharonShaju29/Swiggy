import React from "react";
import logo from "../Assets/logo.svg";
import dropdown from "../Assets/dropdown.svg";
import { NavigationOptions } from "../Config";
import discount from "../Assets/discount.svg";
import location from "../Assets/location.svg";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="h-[58px] lg:h-[80px] border-b-2 fixed w-[100vw] lg:shadow-md items-center flex justify-center z-[1000] bg-white font-proxima">
      <div className="max-w-[1200px] lg:w-full w-[95vw] items-center flex justify-between">
        <Link to="/" className="hidden lg:block">
          <img
            src={logo}
            className="hidden lg:block h-[48px] w-[48px] hover:h-[52px] transition-all"
          />
        </Link>
        <div
          id="location"
          className="text-[12px] lg:text-[14px] flex-col  lg:flex-row lg:flex lg:ml-10 cursor-pointer items-center py-4 text-left lg:text-center"
        >
          <div className="flex">
            <img src={location} className="pr-2 lg:hidden block" />
            <b className="text-[16px] lg:border-b-2 pb-0.5 border-black hover:text-[#fc8019] hover:border-[#fc8019]">
              J. P. Nagar
            </b>
          </div>
          <div className="text-[#686b78] lg:pl-2">
            1st Phase, J. P. Nagar, Bengaluru...
          </div>
          <img
            src={dropdown}
            className="hidden lg:block h-[24px] w-[24px] pl-1.5 mt-1"
          />
        </div>
        <div className="lg:hidden flex pr-1 cursor-pointer">
          <img src={discount} className="h-6" />
          <div className="text-[12px] pl-1.5 font-medium items-center flex">
            Offers
          </div>
        </div>
        <div className="ml-[150px] hidden lg:flex">
          {NavigationOptions.map((item, index) => (
            <div>
              <Link to="/search">
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
              </Link>
              <span className="text-[10px] text-[#ffa700] absolute top-[20px] ml-[58px] font-bold">
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
