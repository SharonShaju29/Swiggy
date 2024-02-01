import React from "react";
import Carousel from "../Components/Carousel";
import { DishesHomePage, TopRestaurantChainList } from "../Config";
import Card from "../Components/Card";
import CardWithFilter from "../Components/CardWithFilter";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center sm:pl-2">
      <div className="flex justify-center">
        <Carousel
          header="What's on your mind?"
          size={168}
          length={DishesHomePage.length}
          uid="carousel-items"
          width={"w-[25%]"}
          progressBar={false}
          numberOfElements={5}
        >
          <div className="overflow-x-scroll no-scrollbar my-4">
            <div className="flex transition-all" id="carousel-items">
              {DishesHomePage.map((dish, index) => (
                <img
                  src={dish}
                  key={index}
                  className="h-[180px] w-[144px] cursor-pointer mr-[24px] object-cover"
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
      <div className="w-full justify-center flex my-9">
        <hr className="w-[90vw] max-w-[1200px]" />
      </div>
      <div className="flex justify-center">
        <Carousel
          header="Top restaurant chains in Bangalore"
          size={305}
          length={TopRestaurantChainList.length}
          uid="carousel-card-items"
          width={"w-[15%]"}
          gap={15}
          progressBar={true}
          numberOfElements={3}
        >
          <Card src={TopRestaurantChainList} />
        </Carousel>
      </div>
      <div className="w-full justify-center flex my-9">
        <hr className="w-[90vw] max-w-[1200px]" />
      </div>
      <div className="flex justify-center">
        <CardWithFilter header="Restaurants with online food delivery in Bangalore" />
      </div>
    </div>
  );
};

export default HomePage;
