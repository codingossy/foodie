import React from 'react'
import SpecialFoodsList from '../../components/specialfoods/SpecialFoodsList';
import Layout from '../../layout/Layout'
import { client } from '../../linklib/client';

const index = ( {allFoodList}) => {
  // console.log(allFoodList);


  return (
    <Layout>
      <section>
        <h1 className='text-center uppercase text-2xl font-semibold my-5'>special nigerian meals</h1>
        <div className=''>
          <SpecialFoodsList allFoodList={allFoodList} />
        </div>

        <div>
          
        </div>
      </section>
    </Layout>
  )
}

export default index




export const getServerSideProps = async () => {
  const query = '*[_type == "localfood"]'
  const allFood = await client.fetch(query)

  return{
    props:{
      allFoodList: allFood
    }
  }
}