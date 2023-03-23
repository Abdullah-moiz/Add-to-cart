import { setCart } from '@/slices/cartSlice';
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify';



export default function Card({ item }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)

    const AddToCart = () => {
        if (item?.id in cart ) {
            return toast.error("Product Is Already In Cart")
        }
        else {
            toast.success("Product Added to Cart")
            return dispatch(setCart(item))
        }
    }

    return (
        <div className='w-72  mx-4 my-2 bg-gray-50'>
            <Image priority width={400} height={400} src={item?.product_image} alt='product image' />
            <div className='flex px-4 w-full h-16  justify-between items-center '>
                <h1 className='font-semibold text-lg'>{item?.product_name}</h1>
                <p className='text-base '>$ {item?.product_price}</p>
            </div>
            <button onClick={AddToCart} className='w-full px-2 py-2 bg-indigo-600 hover:bg-indigo-900 transition-all duration-1000 text-white rounded'>Add to Cart</button>
        </div>
    )
}
