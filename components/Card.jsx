import Image from 'next/image'
import React from 'react'

export default function Card({item}) {
    console.log(item)
    return (
        <div className='w-72  mx-4 my-2 bg-gray-50'>
            <Image priority width={400} height={400} src={item?.product_image} alt='product image'/>
            <div className='flex px-4 w-full h-16  justify-between items-center '>
                <h1 className='font-semibold text-lg'>{item?.product_name}</h1>
                <p className='text-base '>{item?.product_price}</p>
            </div>
            <button className='w-full px-2 py-2 bg-indigo-600 hover:bg-indigo-900 transition-all duration-1000 text-white rounded'>Add to Cart</button>
        </div>
    )
}
