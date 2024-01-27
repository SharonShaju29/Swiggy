import React from "react";
import Carousel from "../Components/Carousel";
import { DishesHomePage } from "../Config";

const HomePage = () => {
  return (
    <div className="flex justify-center sm:pl-2">
      <Carousel header="What's on your mind?">
        <div className="flex">
          {DishesHomePage.map((dish, index) => (
            <img src={dish} key={index} className="h-[180px] w-[144px] cursor-pointer pr-[24px] object-cover" />
          ))}
        </div>
      </Carousel>
      {/* <img src={DishesHomePage[0]} /> */}
    </div>
  );
};

export default HomePage;
