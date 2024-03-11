import React from "react";
import Layout from "../../layout/Layout";
import Image from "next/image";

const About = () => {
  return (
    <Layout>
      <section>
        <div>
          <h1 className="capitalize text-2xl md:text-5xl">about us</h1>
        </div>

        <section className=" w-full flex flex-col gap-x-10 gap-y-10 lg:flex-row">
          <div className=" w-full">
            <p className=" flex flex-col text-neutral-700 gap-y-6">
              <span>
                Welcome to Woodsoft, your premier destination for exquisite
                handcrafted furniture that brings warmth, comfort, and elegance
                to your home. Inspired by the timeless beauty of wood, we are
                dedicated to crafting pieces that not only enhance your living
                spaces but also tell stories of craftsmanship and heritage.
              </span>

              <span>
                At Woodsoft, we believe that furniture is more than just
                functional pieces; it's an expression of your style,
                personality, and way of life. From classic designs to modern
                interpretations, each piece in our collection is meticulously
                crafted by skilled artisans using the finest quality materials,
                ensuring durability, longevity, and unparalleled beauty.
              </span>

              <span>
                Our commitment to sustainability is at the heart of everything
                we do. We source our wood from responsibly managed forests,
                ensuring that every piece we create is environmentally friendly
                and ethically produced. By choosing Woodsoft, you're not just
                investing in furniture; you're making a statement in support of
                sustainable living and responsible consumption.
              </span>

              <span>
                But Woodsoft is more than just a furniture store. It's a
                destination for inspiration, creativity, and imagination.
                Whether you're furnishing your dream home or looking for that
                perfect accent piece to complete your space, our curated
                selection of timeless designs and personalized service ensures
                that your vision comes to life, effortlessly. Thank you for
                choosing Woodsoft. Join us as we celebrate the beauty of wood
                and the art of craftsmanship, creating spaces that inspire and
                uplift the soul.
              </span>
            </p>
          </div>
          <div className=" w-full">
            <Image
              alt="image"
              src={
                "https://images.pexels.com/photos/5486143/pexels-photo-5486143.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              width={500}
              height={500}
              className=" w-full lg:h-[600px] object-cover"
            />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default About;
