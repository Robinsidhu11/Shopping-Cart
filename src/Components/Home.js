import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';
import Card from './Card';
const Home = ({seletedProducts,setSeletedProducts}) => {
    let [Products,setProducts]=useState([])
    let [loading,setLoading]=useState(false)
    
    const API_URL="https://fakestoreapi.com/products"
    async function fetchProductsData(API_URL){
        setLoading(true)
        try{
            const response=await fetch(API_URL);
        setProducts(await response.json())
        }
        catch(err){
            toast.error("Error in fetching products data")
        }
        setLoading(false)
        
    }
    useEffect(()=>{
        fetchProductsData(API_URL)
    },[])
  return (
    <div className=' w-11/12 max-w-[1200px] mx-auto h-screen py-16 md:py-24'>
      {
        loading?(<div className=' w-full h-[90%] flex justify-center items-center'><Loader></Loader></div>):
        ( <div className=' w-full pt-12 pb-4 flex flex-wrap justify-evenly gap-y-10'>
          { Products.map((obj)=>{
            return <Card cardData={obj} key={obj.id}></Card>
            })}
        </div>
          
        )
      }
    </div>
  )
}

export default Home
