import React from "react";
import Faq from "../../components/Faq/Faq";
import Layout from "../../layout/Layout";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
    <section className="container mx-auto">
      <div>
        <h1 className="capitalize text-2xl md:text-5xl">contact information</h1>
      </div>

      <div className="">
        <form action="" className="py-10 w-full" onSubmit={handleSubmit}>
          {/* names */}
          <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 items-center w-full md:w-[80%] my-4">
            <div className="capitalize flex flex-col gap-y-2 w-full">
              <label htmlFor="" className="text-start">
                first name
              </label>
              <input
                type="text"
                required
                className="bg-gray-200 rounded-md w-full py-2 outline-none px-2"
                placeholder=""
              />
            </div>
            <div className="capitalize flex flex-col gap-y-2 w-full">
              <label htmlFor="">last name</label>
              <input
                type="text"
                required
                className="bg-gray-200 rounded-md w-full py-2 outline-none px-2"
                placeholder=""
              />
            </div>
          </div>

          {/* contact */}

          <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 items-center w-full md:w-[80%] my-4">
            <div className="capitalize flex flex-col gap-y-2 w-full">
              <label htmlFor="" className="text-start">
                Contact preference
              </label>
              <input
                type="text"
                required
                className="bg-gray-200 rounded-md w-full py-2 outline-none px-2"
                placeholder="phone"
              />
            </div>
            <div className="capitalize flex flex-col gap-y-2 w-full">
              <label htmlFor="">phone number</label>
              <input
                type="text"
                required
                className="bg-gray-200 rounded-md w-full py-2 outline-none px-2"
                placeholder="number"
              />
            </div>
          </div>

          {/* email */}

          <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 items-center w-full md:w-[80%] my-4">
            <div className="capitalize flex flex-col gap-y-2 w-full">
              <label htmlFor="" className="text-start">
                email
              </label>
              <input
                type="text"
                required
                className="bg-gray-200 rounded-md w-full py-2 outline-none px-2"
                placeholder="email"
              />
            </div>
            <div className="capitalize flex flex-col gap-y-2 w-full">
              <label htmlFor="">region</label>
              <input
                type="text"
                required
                className="bg-gray-200 rounded-md w-full py-2 outline-none px-2"
                placeholder="africa"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-4 md:w-[30%]">
            <label htmlFor="">zip code</label>
            <input
              type="text"
              required
              className="bg-gray-200 rounded-md py-2 outline-none px-2"
              placeholder="code"
            />
          </div>
        </form>

        <div className="my-8 flex flex-col gap-y-2">
          <span className="flex gap-x-5 items-center">
            <input type="checkbox" className="" />
            <h4 className="text-xl capitalize">
              i'm interested in solar and powerwall
            </h4>
          </span>

          <span className="flex gap-x-5 items-center">
            <input type="checkbox" className="" />
            <h4 className="text-2xl capitalize underline">get tesla updates</h4>
          </span>
        </div>

        <div>
          <p className="max-w-[700px]">
            By clicking "Submit & Continue" I agree to share the provided
            information with Tesla to be contacted with more details or offers
            about Tesla products. I understand these calls or texts may use
            computer-assisted dialing or pre-recorded messages. This consent is
            not a condition of the test drive.
          </p>
        </div>

        <div className="my-10">
          <button className="bg-blue-600 text-white px-20 py-2 rounded-md">
            submit and continue
          </button>
        </div>
      </div>
    </section>

        <Faq />

        
    </Layout>
  );
};

export default Contact;
