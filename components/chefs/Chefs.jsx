import React, { useEffect, useRef, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import { allchefdata } from "../../db/ChefsData";
// image
import imghero from '../../public/date2.jpeg'

const Chefs = () => {
  const [current, setCurrent] = useState(0);
  const length = allchefdata.length;
  const timeout = useRef(null);

  // to set the loading auto
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 10000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(allchefdata) || allchefdata.length <= 0) {
    return null;
  }

  //   functuion for the dots slide
  const dotsSlider = (slide) => {
    setCurrent(slide);
  };

  return (
    <section>
      <h1 className="uppercase font-semibold">our chefs</h1>
      <div className="flex flex-col md:flex-row gap-y-10 gap-x-10 justify-between">
        <div className="relative w-full">
          <div>
            {allchefdata.map((slide, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === current
                      ? "transition-all ease-in duration-1000"
                      : "opacity-0"
                  }
                >
                  {index === current && (
                    <div className="my-4">
                      <p className="max-w-[550px] my-4 leading-8">
                        {slide.text}
                      </p>
                      <span className="flex gap-x-5">
                        <Image
                          src={slide.image}
                          alt="this is a slider image"
                          width="50"
                          height="50"
                          className="rounded-full w-14 h-14 object-cover"
                          objectFit="cover"
                        />
                        <span className="flex flex-col">
                          <p className="text-orange font-semibold capitalize">
                            {slide.name}
                          </p>
                          <p className="capitalize text-xs">{slide.status}</p>
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-start justify-start gap-x-2 py-1 mb-10 top-4">
            {allchefdata.map((slides, slidesId) => (
              <div key={slidesId}>
                <RxDotFilled
                  onClick={() => dotsSlider(slidesId)}
                  className="text-2xl text-orange cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <Image
            className="w-full h-full"
            src={imghero}
            alt="image"
            width={1000}
            height={1000}
          />
        
        </div>
      </div>
    </section>
  );
};

export default Chefs;
