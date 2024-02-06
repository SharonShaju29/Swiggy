import React from "react";
import rating from "../Assets/rating.svg";
import "./css/Card.css";

const Card = (props) => {
  return (
    <div className="overflow-x-scroll transition-all no-scrollbar mt-4 ml-2 lg:mr-0 mr-2">
      <div className="flex transition-all" id="carousel-card-items">
        {props.src.map((item) => (
          <div className="mr-[8px] lg:mr-[32px] w-[273px] lg:hover:scale-95 transition-transform cursor-pointer">
            <div className="flex h-[80px] w-[80px] lg:h-[182px] lg:w-[273px] relative card-shadow">
              <img
                src={item.link}
                className="object-cover max-w-[273px] rounded-[16px] lg:h-[182px] h-[80px] w-[80px] lg:w-[273px] "
              />
            </div>
            <div className="text-left lg:ml-4 mt-2 ml-1">
              <h2 className="lg:font-semibold lg:text-[18px] text-[14px] text-[#282c3f]">
                {item.title}
              </h2>
              <div className="flex text-left lg:text-center">
                <img
                  className="lg:block hidden"
                  src={rating}
                  height="18px"
                  width="18px"
                />

                <span className=" lg:block hidden lg:font-semibold ml-1">
                  {item.rating}
                </span>
                <span className="text-[14px] lg:font-semibold lg:ml-1 text-[#282c3f] opacity-50">
                  {item.deliveryTime}
                </span>
              </div>
              <h2 className="lg:block hidden">{item.foodStyle}</h2>
              <span className="lg:block hidden">{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
