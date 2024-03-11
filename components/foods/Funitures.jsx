import React from "react";
import SingleFoodCard from "./SingleFurnitureCard";
import SingleFurnitureCard from "./SingleFurnitureCard";

const Furnitures = ({ allfurnitures }) => {
  return (
    <section>
      <h1 className="text-2xl font-semibold uppercase mb-5">
        check out our new Furnitures
      </h1>
      <h2 className="text-4xl capitalize font-semibold text-red-500 italic mb-5">
        we are ready to attend to you 24/7
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full place-items-center gap-y-10 gap-x-10 my-10 md:my-14">
        {allfurnitures.map((furniture, id) => (
          <>
            <SingleFurnitureCard
              furniture={furniture}
              id={id}
              key={furniture.id}
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default Furnitures;
