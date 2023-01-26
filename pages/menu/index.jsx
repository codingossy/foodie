import React from 'react'
import Layout from '../../layout/Layout'
import Drinks from './Drinks'

const index = ( { allDrinks}) => {
  // console.log(allDrinks)


  return (
    <Layout>
      <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-items-center my-10 gap-y-10 gap-x-10'>
          {allDrinks.map((drink) => (
            <Drinks drink={drink} key={drink.idDrink} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default index

export const getStaticProps = async () => {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
  const data = await res.json()


  return {
    props: {
      allDrinks: data.drinks
    }
  }
}