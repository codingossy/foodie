import Image from "next/image";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Layout from "../../layout/Layout";
import { client, urlFor } from "../../linklib/client";
import { useStore } from "../../zustand/store";
// TOAST
import toast, {Toaster } from 'react-hot-toast'




const SingleFoodDetails = ({ singleFood }) => {

  const [Size, setSize] = useState(1);

  const [Quantity, setQuantity] = useState(1);

  // image
  const src = urlFor(singleFood.image).url();

  // hanlde qty of product
  const handleQty = (type) => {
    type === "increase"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  // add item to cart
const addFoodToCart = useStore((state) => state.addFoodToCart)
  const addToCart = () => {
    addFoodToCart({...singleFood, price: singleFood.price[Size], quantity: Quantity, size: Size })
    toast.success('item added to cart')
  }




  return (
    <Layout>
      <section>
        <h1 className="text-center uppercase text-2xl font-semibold mb-10">
          food details
        </h1>
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-10 w-full">
          <div className="w-full">
            <Image
              src={src}
              loader={() => src}
              alt="image details"
              width={500}
              height={500}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* right side */}

          <div className="w-full">
            <h1 className="text-2xl mb-5 font-semibold capitalize">
              {singleFood.name}
            </h1>
            <p className="text-green-500 text-2xl font-semibold">
              ${singleFood.price[Size]}
            </p>

            <div className="flex flex-col gap-y-5">
              <div className="">
                <div className="my-5 flex  items-center gap-x-5 capitalize w-full">
                  <h4 className="font-semibold">choices:</h4>
                  <div className="flex flex-col md:flex-row gap-y-5 items-center gap-x-5 my-4 w-full">
                    <span onClick={() => setSize(0)} className="btn2">
                      large
                    </span>
                    <span onClick={() => setSize(1)} className="btn2">
                      medium
                    </span>
                    <span onClick={() => setSize(2)} className="btn2">
                      small
                    </span>
                  </div>
                </div>

                <div className="flex items-center  gap-x-5 w-full">
                  <h4 className="font-semibold">Quantity: </h4>

                  <div className="flex items-center justify-center gap-x-5">
                    <span
                      onClick={() => handleQty("decrease")}
                      className="cursor-pointer border p-3 hover:bg-red-500 hover:text-white"
                    >
                      <FaMinus />
                    </span>

                    <span
                      
                      className="w-10 h-10 rounded-full text-white bg-red-500 flex items-center justify-center"
                    >
                      {Quantity}
                    </span>

                    <span onClick={() => handleQty("increase")} className="cursor-pointer border p-3 hover:bg-red-500 hover:text-white">
                      <FaPlus />
                    </span>
                  </div>
                </div>
              </div>

              <div className="my-3">
                <p className="capitalize items-center flex gap-x-2">
                  <h4 className="font-semibold capitalize">description: </h4>
                  <span className=""> {singleFood.details}</span>
                </p>

                <div className="my-5">
                  <button onClick={addToCart} className="w-44 bg-red-500 p-2 rounded-md text-white hover:bg-red-800 capitalize ">add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-5 md:my-16">
          <p className="leading-8">More Details: {singleFood.more_details}</p>
        </div>

        <Toaster />
      </section>
    </Layout>
  );
};

export default SingleFoodDetails;

export const getStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type=="localfood" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { slug = "" } = context.params;
  const res = await client.fetch(
    `*[_type=="localfood" && slug.current == '${slug}'][0]`
  );

  return {
    props: {
      singleFood: res,
    },
  };
};
