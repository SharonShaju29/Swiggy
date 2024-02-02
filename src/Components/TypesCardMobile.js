import React from "react";
import { typesCardMobile } from "../Config";

const TypesCardMobile = () => {
  return (
    <div className="flex">
      {typesCardMobile.map((item) => (
        <div className="cursor-pointer">
          <img src={item.link} className="h-[132px] w-[166px]"/>
        </div>
      ))}
    </div>
  );
};

export default TypesCardMobile;
