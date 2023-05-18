import { configureStore } from "@reduxjs/toolkit";
import ShopSlice from "../Slices/ShopSlice";


export const store=configureStore({
    reducer:{
        shopcart:ShopSlice
    }
})