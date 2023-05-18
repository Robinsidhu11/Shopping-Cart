import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../Slices/ShopSlice';
import { toast } from 'react-hot-toast';

const Card = ({cardData}) => {
  
    const [selected,setSelected]=useState(false)
    const selectedProducts=useSelector((state)=>{
      return state.shopcart.selectedProducts
    })
    useEffect(()=>{
        selectedProducts.map((ele)=>{
              if(ele.id===cardData.id){
                setSelected(true)
              }
            })
    },[selected])
    
    const dispatch=useDispatch();
  return (
    <div className=' group w-[280px]  rounded-xl shadow-lg shadow-gray-400 py-4 flex flex-col justify-evenly gap-6 hover:scale-105 duration-300 ease-linear transition-all hover:shadow-2xl hover:shadow-gray-700'>
    <div className=' w-[60%] mx-auto flex flex-col gap-4'>
        <h1 className=' text-[#374151]  font-semibold text-[17px] cursor-default '>{(cardData.title).slice(0,14)}...</h1>
        <p className=' text-[#374151] opacity-70 text-[10px] cursor-default'>{(cardData.description).split(" ").slice(0,10).join(" ")}...</p>
    </div>
      <div className='  h-[180px] w-full'>
        <img src={cardData.image}  className=' h-full  mx-auto'></img>
      </div>
      
      <div className=' flex justify-between  mx-3 items-center'>
        <p className=' text-[#2da961] font-semibold text-[16px] cursor-default'>${cardData.price}</p>
        {
            selected?(<button className=' text-[12px]  text-[#374151] font-semibold border-2 border-solid border-[#374151] py-1 px-3 rounded-full group-hover:bg-[#374151] group-hover:text-white transition-all duration-300 ease-linear' onClick={()=>{setSelected(false)
            toast.error("Item removed from cart!")
            dispatch(removeFromCart(cardData))}}>REMOVE ITEM</button>):(<button className=' text-[12px]  text-[#374151] font-semibold border-2 border-solid border-[#374151] py-1 px-3 rounded-full group-hover:text-white transition-all duration-300 ease-linear group-hover:bg-[#374151]' onClick={()=>{setSelected(true)
            toast.success("Item added to cart!")
             dispatch(addToCart(cardData))}}>ADD TO CART</button>)
        }
        
      </div>
    </div>
  )
}

export default Card
