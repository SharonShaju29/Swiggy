import React, { useState } from "react";
import back from "../Assets/back.svg";
import next from "../Assets/next.svg";

const Carousel = (props) => {
  const [length, setLength] = useState(1);
  const [arrLength, setArrLength] = useState(props.length);
  const [clickCounterBack, setClickCounterBack] = useState(1);

  function handlePrevious() {
    setLength(length - 1);
    setArrLength(arrLength + props.numberOfElements);
    document.getElementById(props.uid).style.transform = `translateX(-${
      props.size *
      (arrLength % props.numberOfElements === 0
        ? props.numberOfElements
        : arrLength % props.numberOfElements) *
      (length - 2)
    }px)`;
    if (clickCounterBack === 1) {
      handleExtra();
      setClickCounterBack(clickCounterBack + 1);
      document.getElementById("back").click();
    }
  }

  function handleExtra() {
    setLength(length - 1);
  }

  function handleNext() {
    setLength(length + 1);
    setArrLength(arrLength - props.numberOfElements);
    document.getElementById(props.uid).style.transform = `translateX(-${
      props.size *
      (arrLength % props.numberOfElements === 0
        ? props.numberOfElements
        : arrLength % props.numberOfElements) *
      length
    }px)`;
  }

  return (
    <div className="mt-2 flex flex-col lg:w-[1200px] w-[100vw]">
      <div className="flex items-center lg:w-[1200px] w-[100vw] justify-between">
        <h2 className="text-[24px] font-bold">{props.header}</h2>
        <div className="flex">
          <button
            id="back"
            disabled={length === 1}
            onClick={() => handlePrevious()}
          >
            <img
              src={back}
              className="h-[28px] bg-[#E2E2E7] rounded-full mr-2"
            />
          </button>
          <button
            disabled={arrLength < props.length / props.numberOfElements}
            onClick={() => handleNext()}
          >
            <img
              src={next}
              className="h-[28px] bg-[#E2E2E7] rounded-full mr-2"
            />
          </button>
        </div>
      </div>
      <div className="lg:w-[1200px] w-[100vw] overflow-x-hidden justify-center flex">
        {props.children}
      </div>
    </div>
  );
};

export default Carousel;
