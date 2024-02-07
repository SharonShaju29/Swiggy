import React, { useState } from "react";
import search from "../Assets/search.svg";
import Carousel from "../Components/Carousel";
import { DishesHomePage, restaurantsAndDishesSearch } from "../Config";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="mt-[60px] flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="w-[1000px] flex justify-center items-center">
          <div className="flex items-center">
            <input
              className="w-[850px] text-[#282c3f] border-[#D3D3D3] border p-2 rounded-[4px] focus:outline-none"
              autoFocus
              placeholder="Search for restaurants and food"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={search} className="h-[24px] w-[24px] ml-[-35px]" />
          </div>
        </div>
      </div>
      {searchQuery === "" ? (
        <div className="hidden lg:flex justify-center my-4">
          <Carousel
            header="Popular Cuisines"
            size={90}
            length={DishesHomePage.length}
            uid="carousel-items"
            width={"w-[25%]"}
            progressBar={false}
            numberOfElements={5}
            showArrows={false}
            lengthOfHeader={900}
            additionalStyles="pl-[190px] lg:text-[22px]"
          >
            <div className="overflow-x-scroll no-scrollbar my-4 mr-4 w-[800px]">
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
      ) : (
        <div className="w-[850px] bg-white">
          {restaurantsAndDishesSearch.map((item) => (
            <div className="pr-[32px] lg:w-[273px] mb-10 lg:my-4 lg:mx-2 lg:hover:scale-95 transition-transform cursor-pointer lg:block flex overflow-x-hidden">
              <div className="flex h-[96px] w-[88px] lg:h-[182px] lg:w-[273px] relative lg:card-shadow overflow-x-hidden">
                <img
                  src={item.link}
                  className="object-cover h-[96px] w-[88px] lg:h-[182px] lg:w-[273px] max-w-[273px] rounded-[16px]"
                />
              </div>
              <div className="text-left pl-4 mt-2 overflow-x-hidden">
                <div className="flex justify-between w-[56vw] items-center">
                  <h2 className="font-semibold lg:text-[18px] text-[#3e4152]">
                    {item.title}
                  </h2>
                </div>
                <div className="flex text-[13px] lg:text-[16px]">
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
        </div>
      )}
    </div>
  );
};

export default SearchPage;
