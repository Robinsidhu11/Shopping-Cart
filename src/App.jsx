import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useState } from "react";
const App = () => {
  let a=useSelector((state)=>{
    return state.shopcart.value
  })
 
  return (
    <div className=" relative" >
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home ></Home>}></Route>
      <Route path="/cart" element={<Cart ></Cart>}></Route>
    </Routes>
    </div>
    
  );
};

export default App;
