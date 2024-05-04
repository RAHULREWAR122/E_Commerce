import { configureStore } from "@reduxjs/toolkit";
import { ItemReducer } from "./itemsShowReducer";

export const store = configureStore({
      reducer:{
         ItemReducer
      }
})
