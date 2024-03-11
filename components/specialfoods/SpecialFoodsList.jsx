import React from "react";
import SingleFurnitureCard from "../foods/SingleFurnitureCard";

const SpecialFoodsList = ({ allfurnitures }) => {
  return (
    <section>
      <h1 className="text-3xl font-semibold uppercase mb-6 text-center">
        Explore Our Exquisite Collection
      </h1>
      <h2 className="text-2xl capitalize font-semibold text-gray-600 italic mb-8 text-center">
        Discover timeless elegance for your home
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 my-10 md:my-14">
        {allfurnitures.reverse().map((furniture, id) => (
          <SingleFurnitureCard
            furniture={furniture}
            id={id}
            key={furniture.id}
          />
        ))}
      </div>
    </section>
  );
};

export default SpecialFoodsList;
