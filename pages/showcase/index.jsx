import React from "react";
import SpecialFoodsList from "../../components/specialfoods/SpecialFoodsList";
import Layout from "../../layout/Layout";
import { client } from "../../linklib/client";

const index = ({ allfurnitures }) => {
  // console.log(allfurnitures);

  return (
    <Layout>
      <section>
        <div className="">
          <SpecialFoodsList allfurnitures={allfurnitures} />
        </div>
      </section>
    </Layout>
  );
};

export default index;

export const getServerSideProps = async () => {
  const query = '*[_type == "food"]';
  const allfurnitures = await client.fetch(query);

  return {
    props: {
      allfurnitures: allfurnitures,
    },
  };
};
