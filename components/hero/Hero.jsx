import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-x-8 gap-y-10 md:flex-row w-full">
        {/* left side */}
        <div className="w-full my-5 md:my-16 text-center md:text-start">
          <h2 className=" text-red-500  font-semibold capitalize">
            Elevate Your Space
          </h2>
          <h1 className="capitalize text-2xl lg::text-4xl font-semibold lg:max-w-[500px] my-5 ">
            {" "}
            Experience Swift Furniture Delivery to Transform Your Home.
          </h1>
          <p className="text-gray-500 text-center md:text-start w-full lg:max-w-[400px]">
            Transform your living room into a haven of relaxation or create a
            stylish dining area for memorable gatherings with family and
            friends. With our fast delivery service, you can enjoy your new
            furniture sooner than you think.
          </p>

          <Link href="/showcase">
            <div className=" my-8">
              <button className="btn hover:bg-blue-400">order now</button>
            </div>
          </Link>
        </div>

        {/* right side */}
        <div className="w-full relative ">
          <Image
            src={
              "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            width={500}
            height={500}
            alt="hero image"
            className="h-full sm:h-96 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
