import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../../linklib/client";


const SpecialFoodsCard = ( {foodlist}) => {
    // use this when loading from a server
    const src =  urlFor(foodlist.image).url()
  return (
    <Link href={`/specialdetails/${foodlist.slug.current}`}  className="w-full h-full border p-3">
      <Image
        src={src}
        alt="food item"
        width={500}
        height={500}
        className="w-full h-52 object-cover transition-all ease-in duration-300 hover:scale-95 cursor-pointer"
        loader={() => src}
      />
      <div className="text-center my-4">
        <h3 className="capitalize">{foodlist.name}</h3>
        <h3 className="text-green-500">${foodlist.price[1]}</h3>
        <p className="italic text-xs text-green-500">{foodlist.category}</p>
        <p className="text-xs italic">best offer till <span>valentine</span></p>
      </div>
    </Link>
  );
};


export default SpecialFoodsCard