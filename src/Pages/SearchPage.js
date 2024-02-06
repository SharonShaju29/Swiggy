import React from "react";
import search from "../Assets/search.svg";
import Carousel from "../Components/Carousel";
import { DishesHomePage } from "../Config";

const SearchPage = () => {
  return (
    <div className="mt-[60px] flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="w-[1000px] flex justify-center items-center">
          <div className="flex items-center">
            <input
              className="w-[850px] text-[#282c3f] border-[#D3D3D3] border p-2 rounded-[4px]"
              autoFocus
              placeholder="Search for restaurants and food"
            />
            <img src={search} className="h-[24px] w-[24px] ml-[-35px]" />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center">
        <Carousel
          header="Popular Cuisines"
          size={90}
          length={DishesHomePage.length}
          uid="carousel-items"
          width={"w-[25%]"}
          progressBar={false}
          numberOfElements={5}
          showArrows={false}
          lengthOfHeader={"900px"}
          additionalStyles={"pl-[150px]"}
        >
          <div className="overflow-x-scroll no-scrollbar my-4 w-[900px]">
            <div className="flex transition-all" id="carousel-items">
              {DishesHomePage.map((dish, index) => (
                <img
                  src={dish}
                  key={index}
                  className="h-[128px] w-[90px] cursor-pointer mr-[24px] object-cover"
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SearchPage;
