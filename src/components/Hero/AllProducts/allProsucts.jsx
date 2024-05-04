import React, { useEffect, useState } from "react";
import style from "./allProducts.module.css";
import Items from "../Items/item";
import Scroller from "../../Scroller/scroller";


function AllProducts({allProducts ,handleAddToCart, setAllProducts ,setCartItems ,cartItems}) {
    
   if(!allProducts){
      return <Scroller/>
   }
   
   return (<>
    <main className={style.main}>
      {allProducts && allProducts.map((item,i)=>{
         return (<Items key={item.id} item ={item}  setAllProducts ={setAllProducts} allProducts={allProducts} cartItems={cartItems} setCartItems={setCartItems}  handleAddToCart={handleAddToCart} />  )
      })} 
    </main>
   </>  );
}

export default AllProducts;
