import React, { useState } from "react";
import back from "../Assets/back.svg";
import next from "../Assets/next.svg";
import thumbsUp from "../Assets/thumbsUp.avif";

const Carousel = (props) => {
  const [length, setLength] = useState(1);
  const [arrLength, setArrLength] = useState(props.length);
  const [clickCounterBack, setClickCounterBack] = useState(1);
  const [mlChunk, setMlChunk] = useState("0%");

  function handlePrevious() {
    setLength(length - 1);
    setArrLength(arrLength + props.numberOfElements);
    setMlChunk(`${Number(mlChunk.split("%")[0]) - props.gap}%`);
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
    setMlChunk(`${Number(mlChunk.split("%")[0]) + props.gap}%`);
    document.getElementById(props.uid).style.transform = `translateX(-${
      props.size *
      (arrLength % props.numberOfElements === 0
        ? props.numberOfElements
        : arrLength % props.numberOfElements) *
      length
    }px)`;
  }

  return (
    <div className="mt-2 flex flex-col lg:w-[1200px] w-[100vw] lg:ml-0 pl-4">
      <div className="flex items-center lg:w-[1200px] w-[100vw] lg:justify-between lg:pl-0 pl-2">
        <img src={thumbsUp} className="h-[20px] lg:hidden pr-2" />
        <h2 className="text-[20px] lg:text-[24px] font-bold">{props.header}</h2>
        <div className="lg:flex hidden">
          <button
            id="back"
            disabled={length === 1}
            className={length === 1 ? "opacity-35" : ""}
            onClick={() => handlePrevious()}
          >
            <img
              src={back}
              className="h-[28px] bg-[#E2E2E7] rounded-full pr-2"
            />
          </button>
          <button
            disabled={
              arrLength === props.length % props.numberOfElements ||
              arrLength === props.numberOfElements
            }
            onClick={() => handleNext()}
            className={
              arrLength === props.length % props.numberOfElements ||
              arrLength === props.numberOfElements
                ? "opacity-35"
                : ""
            }
          >
            <img
              src={next}
              className="h-[28px] bg-[#E2E2E7] rounded-full pr-2"
            />
          </button>
        </div>
      </div>
      <div className="lg:w-[1200px] w-[100vw] overflow-x-hidden justify-center flex">
        {props.children}
      </div>
      <div
        id=""
        className={
          props.progressBar ? "justify-center items-center py-3 flex" : "hidden"
        }
      >
        <div className="h-1 bg-slate-300 w-12 rounded-sm lg:block hidden">
          <div
            style={{ marginLeft: mlChunk }}
            id="itr-chunk"
            className={`bg-[#fc8019] ${props.width} h-1`}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
