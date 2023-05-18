import { createSlice } from "@reduxjs/toolkit";
const initialState={
    selectedProducts:[],
    totalSum:0
}
export const ShopSlice=createSlice({
    name:"shopcart",
    initialState,
    reducers:{
        addToCart:((state,obj)=>{
            state.totalSum+=obj.payload.price;
            state.totalSum=Math.round(state.totalSum*100)/100
            state.selectedProducts.push(obj.payload)
        }),
        removeFromCart:((state,obj)=>{
            const objtoberemoved=obj.payload;
            state.totalSum-=objtoberemoved.price;
            state.totalSum=Math.round(state.totalSum*100)/100
            state.selectedProducts=state.selectedProducts.filter((obj)=>{
                return objtoberemoved.id!==obj.id
            })
        }),
    }
})
export const {addToCart,removeFromCart}=ShopSlice.actions;
export default ShopSlice.reducer;