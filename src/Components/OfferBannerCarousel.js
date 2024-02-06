import React from "react";

const OfferBannerCarousel = (props) => {
  return (
    <div className="flex w-[100vw] overflow-x-scroll no-scrollbar pl-1 pr-10">
      {props.src.map((item) => (
        <img
          src={item.link}
          className={`h-[220px] w-[268px] cursor-pointer mr-${props.margin}`}
        />
      ))}
    </div>
  );
};

export default OfferBannerCarousel;
