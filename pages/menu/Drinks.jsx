import Image from "next/image";
import Link from "next/link";
import React from "react";

const Drinks = ({ drink }) => {


  const {
    idDrink,
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strGlass,
    strCategory,
  } = drink;

  // const id = drink.idDrink

 
  return (
    <div className="w-full border border-gray-200 p-4" key={idDrink}>
      <Image
        width={500}
        height={500}
        src={strDrinkThumb}
        alt=""
        className="h-44 w-full transition-all ease-in duration-300 hover:scale-95 cursor-pointer object-cover"
      />
      <div className="flex justify-between py-4">
        <h1 className="text-sm font-semibold">{strDrink}</h1>
        <p className="font-semibold text-sm">{strCategory}</p>
      </div>
      <div className="text-center">
        <h4 className="font-semibold">{strGlass}</h4>
        <h4 className="mb-3 text-sm font-semibold text-green-500">
          {strAlcoholic}
        </h4>
      </div>

      <Link href='/drinksmenu/[id]' as={`/drinksmenu/${idDrink}`}  className="flex items-center justify-center">
        <button className="rounded-md bg-gray-600 px-5 py-2 text-white hover:bg-gray-900">
          details
        </button>
      </Link>
    </div>
  );
};

export default Drinks;
