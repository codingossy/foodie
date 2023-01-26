import React from 'react'
import SpecialFoodsCard from './SpecialFoodsCard'

const SpecialFoodsList = ({allFoodList}) => {
  return (
    <section>
        <h1 className='text-2xl font-semibold uppercase mb-5'>check out our menu and order</h1>
        <h2 className='text-4xl capitalize font-semibold text-red-500 italic mb-5'>food is always ready 24/7</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-items-center gap-y-10 gap-x-10 my-10 md:my-14'>
                {allFoodList.map((foodlist, id) => (
                    <>
                        <SpecialFoodsCard foodlist={foodlist} id={id} key={foodlist.id} />
                    </>
                ))}
        </div>
    </section>
  )
}

export default SpecialFoodsList