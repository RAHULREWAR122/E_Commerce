import React, { useState } from "react";
import style from "./addItem.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddItems({ allProducts, setAllProducts }) {
  const navigate = useNavigate();
  const newId = allProducts && allProducts.length + 10;

  const [formData, setFormData] = useState({
    id: newId,
    title: "",
    price: "",
    rating: "",
    description: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://dummyjson.com/products/`, formData);

      setAllProducts([...allProducts, formData]);
      navigate("/");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className={style.additem}>
      <h1>Add Items Page</h1>
      <div className={style.form}>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Write Your Product Name"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="form-control"
              placeholder="price in Rs"
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="form-control"
              placeholder="Give Rating Your Product 1 to 5"
              required
              min={1}
              max={5}
              step={0.1}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              rows="3"
              required
              placeholder="Write Description"
            ></textarea>
          </div>
          <div className="col-md-4">
            <label className="form-label">Image</label>
            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter image link"
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItems;
