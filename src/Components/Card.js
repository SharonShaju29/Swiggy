import React from "react";
import rating from "../Assets/rating.svg";
import "./css/Card.css";

const Card = (props) => {
  return (
    <div className="overflow-x-scroll no-scrollbar mt-4 ml-2">
      <div className="flex transition-all" id="carousel-card-items">
        {props.src.map((item) => (
          <div className="mr-[32px] w-[273px] hover:scale-95 transition-transform cursor-pointer">
            <div className="flex h-[182px] w-[273px] relative card-shadow">
              <img
                src={item.link}
                height="182px"
                width="273px"
                className="object-cover max-w-[273px] rounded-[16px]"
              />
            </div>
            <div className="text-left ml-4 mt-2 ">
              <h2 className="font-semibold text-[18px]">{item.title}</h2>
              <div className="flex">
                <img src={rating} height="18px" width="18px" />

                <span className="font-semibold ml-1">{item.rating}</span>
                <span className="font-semibold ml-1">{item.deliveryTime}</span>
              </div>
              <h2>{item.foodStyle}</h2>
              <span>{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
