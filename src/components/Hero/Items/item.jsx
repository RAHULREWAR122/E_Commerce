import React, { useState } from "react";
import style from "./items.module.css";
import { NavLink } from "react-router-dom";
import dots from "./more.png";
import axios from "axios";

function Items({ item, allProducts, setAllProducts, handleAddToCart }) {
  const [showList, setShowList] = useState(null);
  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/products/${id}`);
      const updatedProducts = allProducts.filter(
        (product) => product.id !== id
      );
      setAllProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      {allProducts.length > 0 ? (
        <div className={style.showItems}>
          <div className={style.card}>
            <div className={style.top}>
              <div className={style.left}>
                <span>
                  {item.title.length > 20
                    ? item.title.slice(0, 20) + "..."
                    : item.title}
                </span>
                <strong>{item.rating}</strong>
              </div>
              <div className={style.right}>
                <img
                  onClick={() => setShowList(item.id)}
                  onMouseLeave={() => setShowList(null)}
                  src={dots}
                  alt="more"
                />
                {showList === item.id && (
                  <ul
                    onMouseEnter={() => setShowList(item.id)}
                    onMouseLeave={() => setShowList(null)}
                  >
                    <li onClick={() => setShowList(item.id)}>
                      <NavLink to={`/item/${item.id}`}>Edit</NavLink>{" "}
                    </li>
                    <li onClick={() => setShowList(null)}>
                      <p
                        style={{ color: "red" }}
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        Remove
                      </p>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className={style.middle}>
              <img src={item.thumbnail} alt="" />
            </div>
            <div className={style.bottom}>
              <div className={style.about}>
                <strong>Rs.&nbsp; {item.price}</strong>
                <NavLink className={style.itemInfo} to={`/product/${item.id}`}>
                  CheckInfo
                </NavLink>
                <span>
                  {item.description.length > 50
                    ? item.description.slice(0, 30) + "..."
                    : item.description}
                </span>
              </div>
              <div className={style.addCartBtn}>
                <button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Not Item "
      )}
    </>
  );
}

export default Items;
