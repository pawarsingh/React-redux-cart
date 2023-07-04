import { createSlice } from "@reduxjs/toolkit";
import product from "../Product";
const initialState = {
    cart:[],
    items:product,
    totalquantity:0,
    totalprice:0
}
export const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        additem:(state,action)=>{
            let find = state.cart.findIndex((data)=>data.id===action.payload.id);
            if(find>=0){
                state.cart[find].quantity +=1;
            }else{

                state.cart.push(action.payload)
            }
        },
        removeitem:(state,action)=>{
         state.cart =  state.cart.filter(data => data.id!==action.payload)
       
        },
        incQuantity:(state,action)=>{
            let dataindex = state.cart.findIndex((data)=>data.id===action.payload);
            if(dataindex>=0){
                state.cart[dataindex].quantity+=1
            }
            console.log(dataindex)
            
        },
        decQuantity:(state,action)=>{
            let decData = state.cart.findIndex((item)=>item.id===action.payload);
            if(decData>=0){
                if(state.cart[decData].quantity!==0){
                    state.cart[decData].quantity-=1;
                }
            }
        },
        getTotal:(state)=>{
            let totalprice = 0
            let totalquantity = 0;
            state.cart.map((val)=>{
                totalprice += val.quantity * val.price;
                totalquantity  += val.quantity;
             }) 

             state.totalprice = totalprice;
             state.totalquantity = totalquantity
                
        }

    }
}) 

export const{additem,removeitem,incQuantity,decQuantity,getTotal} = cartslice.actions;
export default cartslice.reducer;
