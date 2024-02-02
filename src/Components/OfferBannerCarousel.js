import React from "react";

const OfferBannerCarousel = (props) => {
  return (
    <div className="flex w-[100vw] overflow-x-scroll no-scrollbar ml-2 pr-10">
      {props.src.map((item) => (
        <img
          src={item.link}
          className={`h-[220px] w-[268px] cursor-pointer mx-${props.margin}`}
        />
      ))}
    </div>
  );
};

export default OfferBannerCarousel;
