import Image from "next/image";
import React from "react";
import { FaUtensilSpoon } from "react-icons/fa";
// iamges
import heroimg from "../../public/heroimg2.png";
import icon1 from "../../public/fried-potatoes.png";
import icon2 from "../../public/hamburger.png";

const Hero = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-x-8 gap-y-10 md:flex-row w-full">
        {/* left side */}
        <div className="w-full my-5 md:my-16 text-center md:text-start">
          <h5 className=" text-red-500 font-semibold capitalize">
            enjoy fast delivery
          </h5>
          <h1 className="capitalize text-2xl md:text-4xl font-semibold max-w-[500px] my-5 ">
            {" "}
            enjoy the Fastest food delivery here on the mainland..
          </h1>
          <p className="text-gray-500 text-center md:text-start max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            itaque laborum. At, quam quod nobis asperiores optio numquam sunt
            magnam.
          </p>

          <div className="my-5">
            <button className="btn">order now</button>
          </div>
        </div>

        {/* right side */}
        <div className="w-full relative ">
          <Image
            src={heroimg}
            width={500}
            height={500}
            alt="hero image"
            className="h-full sm:h-96 w-full md:w-96 object-cover"
          />

          <div className="">
            <Image
              src={icon1}
              alt="icons"
              width={500}
              className="w-10 h-10 object-cover transition-all ease-in duration-300 left-14 md:left-10 top-20 absolute move"
              height={500}
            />

            <Image
              src={icon2}
              alt="icons"
              width={500}
              className="w-10 h-10 object-cover top-20 right-14 transition-all ease-in duration-300 md:right-52 absolute move"
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
