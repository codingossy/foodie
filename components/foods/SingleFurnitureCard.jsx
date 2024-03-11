import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../../linklib/client";
import { calculateNairaEquivalent } from "../formatprice";

const SingleFurnitureCard = ({ furniture, id }) => {
  const nairaEquivalent = calculateNairaEquivalent(furniture.price[0]);
  // use this when loading from a server
  const src = urlFor(furniture.image).url();
  return (
    <Link
      href={`/fooddetails/${furniture.slug.current}`}
      className="w-full h-full border p-3"
    >
      <Image
        src={src}
        alt="food item"
        width={500}
        height={500}
        className="w-full h-52 object-cover transition-all ease-in duration-300 hover:scale-95 cursor-pointer"
        loader={() => src}
      />
      <div className="text-center my-4">
        <h3 className="capitalize text-lg">{furniture.name}</h3>
        <h3 className="text-green-500 text-lg">
          ${furniture.price[1]} ({nairaEquivalent})
        </h3>
        <p className="italic text-xs text-neutral-500">
          category: {furniture.category}
        </p>
      </div>
    </Link>
  );
};

export default SingleFurnitureCard;
