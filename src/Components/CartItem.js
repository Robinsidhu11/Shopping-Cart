import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../Slices/ShopSlice';
import { toast } from 'react-hot-toast';
const CartItem = ({itemData}) => {
  const dispatch=useDispatch();
  return (
    <div className=' flex flex-col gap-8 md:gap-0 py-6 justify-between md:flex-row '>
      <div className=' w-full md:w-[38%]  flex justify-center items-center'>
          <img src={itemData.image} width={162} className=''></img>
      </div>
      
      <div className='flex flex-col w-full md:w-[58%]  gap-5'>
            <h1 className=' text-[#374151]  font-semibold text-[20px] cursor-default '>{itemData.title}</h1>
            <p className=' text-[#374151]  text-[15 px] cursor-default'>{(itemData.description).split(" ").slice(0,15).join(" ")}...</p>
            <div className=' flex justify-between items-center'>
                <p className=' text-[#289455] font-bold text-[18px] cursor-default'>${itemData.price}</p>
                <button onClick={()=>{toast.error("Item removed from cart!")
                dispatch(removeFromCart(itemData))}} className=' bg-[#FECACA] p-3 rounded-full hover:bg-red-400 transition-all duration-200 cursor-pointer group ease-linear'><MdDelete className=' text-[#991B1B] group-hover:text-white duration-200 transition-all ease-linear'></MdDelete></button>
            </div>
      </div>
    </div>
  )
}

export default CartItem
