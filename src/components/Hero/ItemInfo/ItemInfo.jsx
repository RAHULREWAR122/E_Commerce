import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Scroller from '../../Scroller/scroller';
import style from "./itemInfo.module.css"

function ItemInfo({handleAddToCart}) {
  const [itemAbout ,setItemAbout] = useState()
  const [mainImg, setMainImg] = useState(null);
 
  let {id} = useParams();
   
  
  let newItem = itemAbout && itemAbout.find((item)=>item.id === Number(id)) 
  


useEffect(()=>{
    async function fetchData(){
       try{
        const {data} = await axios.get(`https://dummyjson.com/products?limit=100`);      
         setItemAbout(data.products)
       }catch(err){
           return console.log("ERROR IN FETCHING DATA") 
    }
}
  fetchData()
},[])
  if(!newItem){
     return <Scroller/>
  }

  const imgs = newItem.images.map((item)=>item)
    
  const handleImageClick = (image) => {
    setMainImg(image);
  };
  
  return (
    <div className={style.infoPage}>
          <div className={style.imgsInfo}>
                <div className={style.mainImg}>
                      <img src={mainImg  || newItem.thumbnail } alt="" />
                </div>
                <div  className={style.dummyImgs}>
                {imgs.map((item ,ind)=>{
                    return (
                     <img key={ind} src={item} alt="" onClick={()=>handleImageClick(item)} />
                    )})}
                </div>
             </div> 

           <div className={style.aboutItems}>
                 <h2> {newItem.title}</h2>
                 <h4>Price: {newItem.price}</h4>
                 <h4>Discount: <span style={{background:"yellow" ,padding:"5px" ,color:"#896425"}}>{newItem.discountPercentage}% </span> </h4>
                 <strong>Stars: {newItem.rating}</strong>
                 <strong>Brand: {newItem.brand}</strong>
                 <strong>Available in stock: {newItem.stock}</strong>
                 <p>{newItem.description}</p>
                 <button onClick={()=>handleAddToCart(newItem)}>Add To Cart</button>
            </div>  
    </div>
  )
}

export default ItemInfo