import Image from "next/image";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../../layout/Layout";
import { urlFor } from "../../linklib/client";
import { useCartStore, useStore } from "../../zustand/store";
import Link from "next/link";
// next auth
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
// import  useRouter  from "next/router";
// image
import empty from "../../public/service2.png";
import { calculateNairaEquivalent } from "../../components/formatprice";

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  // AUTH
  const { data: session } = useSession();
  // console.log(session);
  const { products, totalItems, totalPrice, removeFromCart, clearCart } =
    useCartStore();

  // router
  const router = useRouter();

  const handlePayOnDelivery = () => {};

  // payment with stripe
  const handlePayCreditCard = async () => {};

  if (products?.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto my-20">
          <div className="flex flex-col items-center min-h-[40vh] justify-center p-2 gap-y-4">
            <Image
              alt="cart empty"
              src={empty}
              className="w-44 h-44 object-cover mb-5"
            />
            <span className="capitalize  text-xl md:text-2xl">
              your cart is empty
            </span>
            <Link
              href={`/`}
              className="uppercase hover:text-red-500 text-sm underline"
            >
              Go back home 
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section>
        <div className="lg:p-8 container bg-slate-100 w-full h-full">
          <div className="flex justify-between capitalize">
            <h4 className="font-semibold capitalize text-sm md:text-2xl">
              shopping cart
            </h4>
            <button
              onClick={() => clearCart(products, totalPrice)}
              className="text-red-500 capitalize text-sm md:text-md hover:text-red-800 cursor-pointer font-semibold underline"
            >
              remove all
            </button>
          </div>
          <div className="my-10 w-full">
            {products.length > 0 &&
              products.map((furniture, index) => {
                const src = urlFor(furniture?.image).url();
                const nairaEquivalent = calculateNairaEquivalent(
                  furniture.price
                );
                // console.log(products)

                return (
                  <div
                    className="flex border rounded-md p-2 gap-x-4 my-10 justify-between items-center"
                    key={index}
                  >
                    <Image
                      src={src}
                      width={500}
                      height={500}
                      className=" lg:w-40 lg:h-40 object-cover"
                      loader={() => src}
                      alt="furniture item"
                    />

                    <div>
                      <h2 className="capitalize text-sm md:text-lg font-semibold">
                        {furniture.name}
                      </h2>
                      <p className="text-xs">
                        {furniture.size === 0
                          ? "small"
                          : furniture.size === 1
                          ? "medium"
                          : "large"}
                      </p>
                      <p className="text-xs text-green-500">available</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-xs md:text-sm">Quantity: </p>
                      <p>{furniture.quantity}</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-1">
                      <p className="font-semibold text-lg text-green-500 ">
                        ${furniture.price} ({nairaEquivalent})
                      </p>
                      <button className="text-blue-500 font-semibold underline capitalize text-xs cursor-pointer">
                        save for later
                      </button>
                      <button
                        onClick={() => removeFromCart(furniture)}
                        className="text-red-500 font-semibold underline cursor-pointer text-xs md:text-sm"
                      >
                        remove
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* second */}
          <div className="w-full border p-3">
            <div className="flex items-start justify-start flex-col w-full">
              <div className="flex flex-col">
                <h1 className="text-xl capitalize  font-semibold">
                  spending details
                </h1>
                <p>{products.length} item(s)</p>
              </div>

              <div className="capitalize">
                <span className="flex gap-x-4">
                  <p>discount:</p>
                  <p className="font-semibold">$0</p>
                </span>
                <span className="flex gap-x-4">
                  <p>delivery fee: </p>
                  <p className="font-semibold">$0</p>
                </span>
                <h3 className="capitalize pt-5 font-semibold text-green-500">
                  total spent: ${totalPrice}
                </h3>
              </div>

              {session ? (
                // if logged in

                <div className="flex flex-col md:flex-row items-center gap-x-5 gap-y-5 my-10">
                  <button
                    onClick={handlePayOnDelivery}
                    className="w-28 p-2 bg-gray-500 hover:bg-gray-700 capitalize text-white rounded-md text-xs"
                  >
                    pay on Delivery
                  </button>

                  <button
                    onClick={handlePayCreditCard}
                    className="w-28 p-2 bg-red-500 hover:bg-red-700 capitalize text-white rounded-md text-xs"
                  >
                    credit card
                  </button>
                </div>
              ) : (
                // if not logged in
                <div className="flex flex-col md:flex-row items-center gap-x-5 gap-y-5 my-10">
                  <Link href={``}>
                    <button className="w-28 p-2 bg-gray-500 hover:bg-gray-700 capitalize text-white rounded-md text-xs">
                      pay on Delivery
                    </button>
                  </Link>
                  <Link href={``}>
                    <button className="w-28 p-2 bg-red-500 hover:bg-red-700 capitalize text-white rounded-md text-xs">
                      credit card
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Toaster />
    </Layout>
  );
};

export default Cart;
