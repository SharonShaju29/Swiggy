import React from "react";
import back from "../Assets/back.svg";
import next from "../Assets/next.svg";

const Carousel = (props) => {
  return (
    <div className="mt-2 flex flex-col lg:w-[1200px] w-[100vw]">
      <div className="flex items-center lg:w-[1200px] w-[100vw]  justify-between">
        <h2 className="text-[24px] font-bold">{props.header}</h2>
        <div className="flex">
          <button>
            <img
              src={back}
              className="h-[28px] bg-[#E2E2E7] rounded-full mr-2"
            />
          </button>
          <button>
            <img
              src={next}
              className="h-[28px] bg-[#E2E2E7] rounded-full mr-2"
            />
          </button>
        </div>
      </div>
      <div className="lg:w-[1200px] w-[100vw] overflow-x-hidden justify-center flex">
        {props.children}
      </div>
    </div>
  );
};

export default Carousel;
