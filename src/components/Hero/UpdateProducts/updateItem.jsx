import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Scroller from "../../Scroller/scroller";
import style from "./update.module.css";

function UpdateItem({ allProducts, setAllProducts }) {
  const [showLoder, setShowLoder] = useState(false);
  const { id } = useParams();
  
  const updateData = allProducts && allProducts.find((item) => item.id === Number(id));
   
  const [formData, setFormData] = useState({ 
    title: updateData && updateData.title ,
    price: updateData && updateData.price ,
    rating: updateData && updateData.rating ,
    description: updateData && updateData.description ,
    thumbnail:updateData && updateData.thumbnail ,
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://dummyjson.com/products/${id}`, formData);
      const updatedValues = allProducts.map((item) =>
        item.id === updateData.id ? { ...item, ...formData } : item
      );

      setAllProducts(updatedValues);

      setTimeout(() => {
        setShowLoder(true);
        setTimeout(() => {
          setShowLoder(false);
        }, 2000);
      }, 10);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!updateData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {showLoder && <Scroller />}
      {!showLoder && (
        <div className={style.update}>
          <h1>Update Items Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="img" className="form-label">
                Image
              </label>
              <input
                type="text"
                id="img"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default UpdateItem;
