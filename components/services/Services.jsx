import Image from "next/image";
import React from "react";
import { serviceData } from "../../db/ServicesData";

const Services = () => {
  return (
    <section>
        <h1 className="my-3 uppercase font-semibold">our services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-8 gap-x-8 w-full">
        {serviceData.map((item, id) => (
          <>
            <div className="w-full h-full border p-4">
              <Image
                alt="services"
                src={item.image}
                width={400}
                height={400}
                className="md:h-44 object-cover transition-all ease-in-out duration-300 hover:scale-95 w-full cursor-pointer"
              />

              <div className="my-4 text-center">
                <h4 className="capitalize font-semibold">{item.title}</h4>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Services;
