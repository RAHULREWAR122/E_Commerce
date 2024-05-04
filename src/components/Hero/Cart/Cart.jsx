import React, { useEffect } from "react";
import style from "./cart.module.css";

function Cart({ cartItems, setCartItems, setCartCount, cartCount }) {
  let data = cartItems;

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    setCartCount(cartCount - 1);
    alert("item Removed Successfully");
  };

  return (
    <>
      <div className={style.cartItem}>
        {data && data.length >= 1 && data.length > 0 ? (
          data.map((item, index) => {
            return (
              <div className={style.items} key={index}>
                <div className={style.img}>
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className={style.info}>
                  <div className={style.about}>
                    <h3>
                      {item.title.length > 15
                        ? item.title.slice(0, 11) + "..."
                        : item.title}
                    </h3>
                    <strong>Rs {item.price}</strong>
                  </div>
                  <button onClick={() => handleRemoveItem(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Cart is Empty</h1>
        )}
      </div>
    </>
  );
}

export default Cart;
