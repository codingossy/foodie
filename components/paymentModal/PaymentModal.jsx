import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { createOrder } from "../../linklib/handleAllOrders";
import { FaTrash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "../../zustand/store";

const PaymentModal = ({ opened, setOpened, paymentMethod }) => {
  const theme = useMantineTheme();
  const [formData, setFormData] = useState({});

  // resetCart
  const resetCart = useStore((state) => state.resetCart)


  const handleInputForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit form
  const handleSubmitData = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const id = await createOrder({
      ...formData,
      totalItems,
      paymentMethod,
    });
    // console.log("ordered", id);
    toast.success("order successful")
    resetCart()

    {
      typeof window !== 'undefined' && localStorage.setItem('order', id)
    }
  };


  // getting the otal items as defined in the cart
  const totalItems =
    typeof window !== "undefined" && localStorage.getItem("totalItems");




  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={setOpened}
    >
      <div className="text-center capitalize my-3">
        <h1 className="font-semibold">pay on delivery</h1>
        <p className="text-xs">enter details here</p>
      </div>
      <form onSubmit={handleSubmitData} className="flex flex-col gap-y-4">
        <input
          onChange={handleInputForm}
          type="text"
          required
          placeholder="enter name"
          className=" p-2 outline-none text-black border"
        />
        <input
          onChange={handleInputForm}
          type="number"
          required
          placeholder="enter number"
          className="p-2 outline-none text-black border"
        />
        <input
          onChange={handleInputForm}
          type="text"
          required
          placeholder="enter city"
          className="p-2 outline-none text-black border"
        />
        <textarea
          onChange={handleInputForm}
          name=""
          required
          placeholder="enter address"
          className="resize-none outline-none border p-2"
        ></textarea>

        <h1 className="text-center capitalize text-sm font-semibold">
          total payment <span className="text-green-500 font-semibold">${totalItems}</span> on delivery
        </h1>

        <div className="flex items-center justify-center">
          <button className="p-2 bg-green-500 w-32 text-white capitalize rounded-md">
            order now
          </button>
        </div>
      </form>
      <Toaster />
    </Modal>
  );
};

export default PaymentModal;
