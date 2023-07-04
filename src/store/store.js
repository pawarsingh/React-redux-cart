import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../feactures/cartslice";
const store = configureStore({
    reducer:{
       allcart:cartslice
    }
})


export default store;