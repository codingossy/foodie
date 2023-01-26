import Image from "next/image";
import React from "react";
import Layout from "../../layout/Layout";
import toast, {Toaster } from 'react-hot-toast'
import { useStore } from "../../zustand/store";




const DrinksDetails = ({ drinksDesc }) => {


  // console.log(drinksDesc);

   // add item to cart
const addFoodToCart = useStore((state) => state.addFoodToCart)
const addToCart = () => {
  addFoodToCart({...drinksDesc, price: drinksDesc.price})
  toast.success('item added to cart')
}


  return (
    <Layout>
      <section>
        <h1 className="text-center uppercase text-2xl font-semibold mb-10">
          drinks details
        </h1>
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-10 w-full">
          <div className="w-full">
            <Image
              src={drinksDesc.strDrinkThumb}
              alt="image details"
              width="500"
              priority
              height="500"
              className="w-full h-full md:h-96 object-cover"
            />

            {/* <div className="my-10 flex items-center justify-center">
              <button onClick={addToCart} className="w-52 capitalize bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800">add to cart</button>
            </div> */}
          </div>

          <div className="flex flex-col gap-y-4 w-full">
              <div className="flex gap-x-4">
                <button className="bg-blue-500 px-5 py-2 capitalize text-white">
                  name
                </button>
                <h1 className="text-xl text-black">{drinksDesc.strDrink}</h1>
              </div>

              <div className="flex gap-x-4">
                <button className="bg-blue-500 px-5 py-2 capitalize text-white">
                  price
                </button>
                <h1 className="text-xl text-green-500 font-semibold">$7000</h1>
              </div>

              <div className="flex gap-x-4">
                <button className="bg-blue-500 px-5 py-2 capitalize text-white">
                  category
                </button>
                <h1 className="text-xl text-black">{drinksDesc.strCategory}</h1>
              </div>

              <div className="flex gap-x-4">
                <button className="bg-blue-500 px-5 py-2 capitalize text-white">
                  alholic?
                </button>
                <h1 className="text-xl text-black">{drinksDesc.strAlcoholic}</h1>
              </div>

              <div className="flex gap-x-4">
                <button className="bg-blue-500 px-5 py-2 capitalize text-white">
                  glass
                </button>
                <h1 className="text-xl text-black">{drinksDesc.strGlass}</h1>
              </div>

              <div className="flex gap-x-4">
                <button className="bg-blue-500 px-5 py-1 capitalize text-white">
                  instructions
                </button>
                <h1 className="text-xl text-black">{drinksDesc.strInstructions}</h1>
              </div>
            </div>
        </div>

        <Toaster />
      </section>
    </Layout>
  );
};

export default DrinksDetails;

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
  );

  const data = await res.json();
  const paths = data?.drinks?.map((drink) => {
    return {
      params: {
        id: drink.idDrink.toString(),

        // idDrink based on the individual id on the data
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(
    `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const drinkList = await res.json();

  return {
    props: {
      drinksDesc: drinkList.drinks[0],
    },
  };
};
