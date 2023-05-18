import React, { useState } from 'react'
import CartItem from './CartItem'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Cart = () => {
    const seletedProducts=useSelector((state)=>{
      return state.shopcart.selectedProducts
    })
    const totalSum=useSelector((state)=>{
      return state.shopcart.totalSum
    })
  return (
    <div className='  h-screen w-11/12 max-w-[1200px] mx-auto my-4 py-20 md:py-28'>
      {seletedProducts.length===0?(<div className=' mx-auto w-max h-[90%] gap-7 flex flex-col justify-center items-center'>
        <p className=' text-[22px] text-[#374151] font-semibold'>Your cart is empty!</p>
        <NavLink to={"/"} className=" bg-[#16A34A] text-[16px] border-2 border-[#16A34A] text-white font-semibold py-3 px-9 rounded-lg hover:text-[#16A34A] hover:bg-purple-50 transition-all duration-300 ease-linear"><button>SHOP NOW</button></NavLink>
      </div>):(
        <div className='flex flex-col justify-between md:flex-row'>
            <div className=' flex-col w-full md:w-[56%]'>
                {
                    seletedProducts.map((obj,index)=>{
                        return(<div className={index===seletedProducts.length-1?(''):(`border-b-2 border-opacity-40 border-black`)} >
                          <CartItem itemData={obj}></CartItem>
                          
                        </div>) 
                    })
                }
            </div>
            <div className='flex w-full md:w-[36%] flex-col justify-between py-12 gap-6'>
                <div>
                    <div className=' '>
                        <h1 className=' text-[#166534] text-[21px] font-semibold'>YOUR CART</h1>
                        <h1 className=' text-[#15803D] text-[47px] font-semibold'>SUMMARY</h1>
                    </div>
                    
                    <p className='text-[20px] text-[#374151] font-semibold'>Total Items: <span className=' font-normal'>{seletedProducts.length}</span> </p>
                </div>
                <div className=' flex flex-col gap-5'>
                    <p className='text-[20px] text-[#374151] font-semibold'>Total Amount : <span className=' text-black font-bold'>${totalSum}</span> </p>
                    <button className=" w-full bg-[#15803D] text-[21px] border-2 border-[#15803D] text-white font-bold py-3  rounded-lg hover:text-[#15803D] hover:bg-purple-50 transition-all duration-300 ease-linear">Checkout Now</button>
                </div>
                

            </div>
        </div>
      )}
    </div>
  )
}

export default Cart
