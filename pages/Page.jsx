import Card from '@/components/Card'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { BsCart } from 'react-icons/bs'
import data from '../api/index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '@/slices/cartSlice';


export default function Landing() {
    const dispatch =  useDispatch();
    const router = useRouter();
    const [product, setProduct] = useState([]);
    const [qnt, setQnt] = useState(1)

    const cart = useSelector(state => state.cart.cart);


    useEffect(() => {
        setProduct(data)
    }, [])

    const handleIncrement = () => {
        if (qnt > 0) {
            let quantity = qnt + 1
            setQnt(quantity)
        }
        else {
            setQnt(1)
        }
    }

    const handleDecrement = () => {
        if (qnt > 1) {
            let quantity = qnt - 1
            setQnt(quantity)
        }
        else {
            setQnt(1)
        }
    }

    const handleDelete = (id) => {
        const newCart = cart?.filter(item => item?.id !== id)
        dispatch(setCart([...newCart]))
    }



    return (
        <div className='w-full px-2 py-2 flex flex-col items-center'>
            <h1 className='text-lg font-extrabold py-2 mb-2 border-b border-indigo-600'>Shopping Cart</h1>
            <Link href="#cart"><BsCart className="fixed md:text-6xl mx-4 top-0 right-0 text-2xl" /></Link>
            <div className='border w-full h-full flex md:flex-row flex-col '>
                <div className=':w-8/12 w-full py-4 flex flex-wrap'>
                    {

                        product?.map((item) => {
                            return <Card key={item.id} item={item} />
                        })
                    }
                </div>
                <div id='cart' className='lg:w-4/12 w-full'>
                    {
                        cart?.map((prod) => {
                            return (
                                <div key={prod?.id} className='w-full bg-gray-100  py-2 mb-2 flex items-center justify-around'>
                                    <Image src={prod?.product_image} alt="" width={100} height={100} className="rounded-full" />
                                    <p>{prod?.product_name}</p>
                                    <p>{prod?.product_price}</p>
                                    <div className='flex '>
                                        <button onClick={handleIncrement} className="cursor-pointer text-xl">+</button>
                                        <p className='text-xl'>{qnt}</p>
                                        <button onClick={handleDecrement} className="cursor-pointer text-xl">-</button>
                                    </div>
                                    <AiFillDelete onClick={() => handleDelete(prod?.id)} className="text-red-500 cursor-pointer text-xl" />

                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
