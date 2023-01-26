import Image from "next/image";
import Link from "next/link";
import React from "react";
import PaymentModal from "../../components/paymentModal/PaymentModal";
import Layout from "../../layout/Layout";
import delivery from "../../public/local/dely.png";

const index = () => {
  return (
    <Layout>
      <section>
        <h1 className="text-center text-red-500 capitalize font-semibold text-2xl ">
          payment completed
        </h1>
        <Link href={`/`} className="flex items-center justify-center">
          <p className="font-light underline">back to shopping</p>
        </Link>

        <div className="flex flex-col md:flex-row items-center my-10 gap-x-10 gap-y-10 w-full">
          <div className="w-full">
            <Image
              alt="delivery bike"
              src={delivery}
              width="500"
              height={500}
              className="w-full object-cover h-full"
            />
          </div>

          <div className="w-full">
            <div>
                <h1 className="uppercase text-xl italic font-semibold mb-5">hope you add a good time shopping with us </h1>
                <p className="italic mb-5 font-semibold">delivery is on the way <span className="text-red-500">lol...</span></p>
                <p className="italic mb-5 font-semibold">please buy more so i dont go back to the village</p>
            </div>

            <div>
                <p className="capitalize font-semibold mb-4">complains or return policy</p>
                <p className="text-gray-400 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at amet aspernatur, nam temporibus reiciendis quasi tempore non quo fuga hic inventore eum similique, quae totam ea necessitatibus id doloremque nulla quos nobis odit? Magnam laudantium, necessitatibus repellendus temporibus at consequuntur quibusdam sint neque! Mollitia aliquam cupiditate ullam eligendi alias quo recusandae! Voluptatum esse odit iusto maiores hic delectus eum voluptates quod eius perferendis expedita ad repudiandae placeat enim nihil earum, ipsum dolore excepturi quaerat distinctio veritatis quo sunt neque? Incidunt et quo aliqua</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default index;
