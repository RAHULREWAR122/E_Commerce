import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import AllProducts from "./components/Hero/AllProducts/allProsucts";
import AddItems from "./components/Hero/Additem/addItems";
import UpdateItem from "./components/Hero/UpdateProducts/updateItem";
import AboutPage from "./components/Hero/AboutPage/about";
import Cart from "./components/Hero/Cart/Cart";
import Scroller from "./components/Scroller/scroller";
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import ItemInfo from "./components/Hero/ItemInfo/ItemInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromApi, ItemSelector } from "./Reducers/itemsShowReducer";

export default function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const dispatch = useDispatch();
  const DummyData = useSelector(ItemSelector);
  const { products } = DummyData.value;

  useEffect(() => {
    dispatch(fetchDataFromApi());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      setAllProducts(products);
    }
  }, [products]);

  const handleAddToCart = (data) => {
    const isItemInCart = cartItems.some((item) => item.id === data.id);
    if (!isItemInCart) {
      setCartItems([...cartItems, data]);
      setCartCount(cartCount + 1);
      alert("Item Added Successfully in Cart");
    } else {
      alert("Item Already present in Cart");
    }
  };

  if (allProducts.length === 0) {
    return <Scroller />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Navbar cartCount={cartCount} />,
      children: [
        {
          index: true,
          element: (
            <AllProducts
              allProducts={allProducts}
              handleAddToCart={handleAddToCart}
              setAllProducts={setAllProducts}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          ),
        },
        {
          path: "/additem",
          element: (
            <AddItems
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
          ),
        },
        {
          path: "/item/:id",
          element: (
            <UpdateItem
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
          ),
        },
        {
          path: "/product/:id",
          element: <ItemInfo handleAddToCart={handleAddToCart} />,
        },
        { path: "/about", element: <AboutPage /> },
        {
          path: "/cart",
          element: (
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              setCartCount={setCartCount}
              cartCount={cartCount}
            />
          ),
        },
        { path: "/scr", element: <Scroller /> },
      ],
    },
    { path: "*", element: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
}
