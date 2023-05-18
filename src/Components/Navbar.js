import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const selectedProducts=useSelector((state)=>{
    return state.shopcart.selectedProducts
  })
  return (
    <div className=" bg-[#0F172A] py-3 pr-3 w-screen fixed z-20 top-0">
      <div className=' flex justify-between items-center w-11/12 max-w-[1110px] mx-auto'>
      <NavLink to={"/"}><img src='./newlogo.png' width={130} height={46} className=' md:w-[172px] md:h-[56px]'></img></NavLink>
      <div className=' flex gap-7'>
        <NavLink  to={"/"} className=' text-white text-[16px]'>Home</NavLink>
        <div className=' text-white text-[24px]'>
            <NavLink to={"/cart"} className=" relative">
            <FaShoppingCart className=" hover:text-[#63c176] transition-all ease-linear duration-200 "></FaShoppingCart>
            {selectedProducts.length===0?(<p></p>):(<div className=' w-[21px] h-[20px] rounded-full bg-[#3cae53] absolute top-[-5px] right-[-10px] flex justify-center items-center text-[12px] animate-bounce '>{selectedProducts.length}</div>)}
            
            </NavLink>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar
