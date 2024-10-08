import React, { useEffect } from "react";
import Carousel from "../Components/Carousel";
import {
  DishesHomePage,
  TopRestaurantChainList,
  discountBanner,
} from "../Config";
import Card from "../Components/Card";
import CardWithFilter from "../Components/CardWithFilter";
import TypesCardMobile from "../Components/TypesCardMobile";
import OfferBannerCarousel from "../Components/OfferBannerCarousel";
import { offerBanner } from "../Config";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isMobile = useSelector((state) => state.mainReducer.isMobile);

  return (
    <div className="flex flex-col justify-center sm:pl-2 font-proxima">
      <div className="hidden lg:flex justify-center">
        <Carousel
          header="What's on your mind?"
          size={168}
          length={DishesHomePage.length}
          uid="carousel-items"
          width={"w-[25%]"}
          progressBar={false}
          showArrows={!isMobile}
          lengthOfHeader={"1200px"}
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
      <div className="block lg:hidden ml-2">
        <TypesCardMobile />
      </div>
      <div className="w-full justify-center my-9 lg:flex hidden">
        <hr className="w-[90vw] max-w-[1200px]" />
      </div>
      <div className="flex justify-center overflow-x-hidden">
        <Carousel
          header="Top restaurant chains in Bangalore"
          mobHeader="Top Picks For You"
          size={305}
          length={TopRestaurantChainList.length}
          uid="carousel-card-items"
          width={"w-[15%]"}
          gap={15}
          progressBar={true}
          showArrows={!isMobile}
          lengthOfHeader={"1200px"}
          numberOfElements={3}
        >
          <Card src={TopRestaurantChainList} />
        </Carousel>
      </div>
      <div className="w-full justify-center my-9 lg:flex hidden">
        <hr className="w-[90vw] max-w-[1200px] lg:flex hidden" />
      </div>
      <div className="lg:hidden my-2 lg:ml-0 ml-2 pr-10 mr-2 overflow-x-hidden">
        <OfferBannerCarousel margin={2} src={offerBanner} />
      </div>
      <div className="lg:hidden text-left mt-2 ml-2 lg:ml-0 mr-2 overflow-x-hidden">
        <h2 className="text-[20px] font-bold ml-2 my-4">Offers for You</h2>
        <OfferBannerCarousel margin={2} src={discountBanner} />
      </div>
      <div className="flex justify-center">
        <CardWithFilter
          header="Restaurants with online food delivery in Bangalore"
          mobHeader="All Restaurants Nearby"
          subHeader="Discover unique tastes near you"
        />
      </div>
    </div>
  );
};

export default HomePage;
