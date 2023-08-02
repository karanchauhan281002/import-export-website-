import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./Slider.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
      {
        // title: "Baseball",
      
        // description:
        //   "Your Gateway to any Destination in the World",
        
        icon: require("./Media/Slider.png"),  
        // button: "hii",
      },
      {
        // title: "Walking",
        // description:
        //   "Your Gateway to any Destination in the World ",
        icon: require("./Media/Slider2.png"),
      },
      {
        // title: "Weights",
        // description:
        //   "Your Gateway to any Destination in the World",
        icon: require("./Media/Slider3.png"),
      },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <>
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
      }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
              className="indicator-buttons"
              onClick={() => {
                updateIndex(index);
              }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                    ? "indicator-symbol-active"
                    : "indicator-symbol"
                  }`}
                  >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
          </>
  );
};
