import Card from '@/components/Card'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import data from '../api/index'


export default function Landing() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(data)
    }, [])

    console.log(product)


    return (
        <div className='w-full px-2 py-2 flex flex-col items-center'>
            <h1 className='text-lg font-extrabold py-2 mb-2 border-b border-indigo-600'>Shopping Cart</h1>
            <div className='border w-full h-full flex '>
                <div className='w-8/12 py-4 border-2 flex border-red-500 flex-wrap'>
                    {
                        
                        product?.map((item) => {
                            return <Card key={item.id} item={item} />
                        })
                    }
                </div>
                <div className='w-4/12 border-2 border-green-600'>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
