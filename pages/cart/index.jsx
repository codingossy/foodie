import Image from "next/image";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../../layout/Layout";
import { urlFor } from "../../linklib/client";
import { useStore } from "../../zustand/store";
import Link from "next/link";
// next auth
import { useSession } from "next-auth/react";
import PaymentModal from "../../components/paymentModal/PaymentModal";
import { useRouter } from "next/router";
// import  useRouter  from "next/router";

const Cart = () => {

  const [paymentMethod, setPaymentMethod] = useState(null);
// AUTH
  const { data: session } = useSession();
  // console.log(session);
  // zustand
  const cartData = useStore((state) => state.cart);
  // remove from cart zustand
  const comotFoodFromCart = useStore((state) => state.comotFoodFromCart);
  // remove from cart
  const handleRemoveFromCart = (index) => {
    comotFoodFromCart(index);
    toast.error("item deleted");
  };
  // total items
  // pass the total items to the modal
  const totalItems = () =>
    cartData.foods.reduce((a, b) => a + b.quantity * b.price, 0);
  // clear cart zustand  
  const clearCart = useStore((state) => state.clearCart);
  // clear cart
  const clearCartItems = (index) => {
    clearCart(index);
    toast.error("cart cleared");
  };

  // router

  const router = useRouter()

  // modal pay on delivery
  // total items from the cart state
  // using local storage to retrive stored data
  const handlePayOnDelivery = () => {
    setPaymentMethod(0);
    typeof window !== "undefined" &&
      localStorage.setItem('totalItems', totalItems());
  };


  // payment with stripe
  const handlePayCreditCard = async () => {
    typeof window !== "undefined" && localStorage.setItem('totalItems', totalItems())
    setPaymentMethod(1)
    const response = await fetch('/api/stripe', {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(cartData.foods),
    })

    if(response.status === 500) return

    const data = await response.json()
    toast.loading("processing payment")
    router.push(data.url)
  }



  return (
    <Layout>
      <section>
        <div className="flex flex-col md:flex-row gap-y-10 gap-x-10 w-full ">
          <div className="flex-1 p-2 md:w-72 bg-red-500">
            <table className="w-full capitalize text-white">
              <thead>
                <tr className="text-xs md:text-sm">
                  <th>item</th>
                  <th>name</th>
                  <th>size</th>
                  <th>price</th>
                  <th>qty</th>
                  <th>total</th>
                </tr>
              </thead>
              <tbody className="">
                {cartData.foods.length > 0 &&
                  cartData.foods.map((food, index) => {
                    const src = urlFor(food.image).url();

                    return (
                      <tr
                        key={index}
                        className="w-full border hover:bg-red-500  text-center xs:text-[10px] text-[13px] md:text-sm p-2"
                      >
                        <td>
                          <Image
                            src={src}
                            width={500}
                            height={500}
                            className="w-16 p-1 h-16 object-cover"
                            loader={() => src}
                            alt="food item"
                          />
                        </td>
                        <td>{food.name}</td>
                        <td>
                          {food.size === 0
                            ? "small"
                            : food.size === 1
                            ? "medium"
                            : "large"}
                        </td>
                        <td className="text-green-500 font-semibold">
                          ${food.price}
                        </td>
                        <td>{food.quantity}</td>
                        <td>${food.price * food.quantity}</td>
                        <td onClick={() => handleRemoveFromCart(index)}>
                          <FaTrash className="text-blue-500 hover:text-red-900 cursor-pointer" />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div className="flex-initial p-3 md:w-72 shadow-2xl bg-blue-500">
            <h3 className="text-center font-semibold capitalize text-white">
              Spending details
            </h3>

            <div className="capitalize my-5 flex flex-col gap-y-3 text-white p-3">
              <span className="flex justify-between">
                <p>items</p>
                <p className="font-semibold">{cartData.foods.length}</p>
              </span>

              <span className="flex justify-between">
                <p>total</p>
                <p className="font-semibold">${totalItems()}</p>
              </span>
              <span className="flex justify-between">
                <p>discount</p>
                <p className="font-semibold">$0</p>
              </span>
              <span className="flex justify-between">
                <p>delivery fee</p>
                <p className="font-semibold">$0</p>
              </span>
            </div>

            {session ? (
              // if logged in

              <div className="flex flex-col md:flex-row items-center gap-x-5 gap-y-5 justify-center my-10">
                <button
                  onClick={handlePayOnDelivery}
                  className="w-28 p-2 bg-gray-500 hover:bg-gray-700 capitalize text-white rounded-md text-xs"
                >
                  pay on Delivery
                </button>

                <button onClick={handlePayCreditCard} className="w-28 p-2 bg-red-500 hover:bg-red-700 capitalize text-white rounded-md text-xs">
                  credit card
                </button>
              </div>
            ) : (
              // if not logged in
              <div className="flex flex-col md:flex-row items-center gap-x-5 gap-y-5 my-10 justify-center">
                <Link href={`/account`}>
                  <button className="w-28 p-2 bg-gray-500 hover:bg-gray-700 capitalize text-white rounded-md text-xs">
                    pay on Delivery
                  </button>
                </Link>
                <Link href={`/account`}>
                  <button  className="w-28 p-2 bg-red-500 hover:bg-red-700 capitalize text-white rounded-md text-xs">
                    credit card
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="my-10 flex items-center justify-center md:items-start md:justify-start">
          <button
            onClick={() => clearCartItems()}
            className="btn hover:bg-blue-900"
          >
            clear cart
          </button>
        </div>
      </section>

      <Toaster />

      {/* modal */}
      <PaymentModal
        opened={paymentMethod === 0}
        setOpened={setPaymentMethod}
        paymentMethod={paymentMethod}
      />
    </Layout>
  );
};

export default Cart;
