import { Outlet } from "react-router-dom";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom/dist";
import logo from "./logoR1.png";
import Footer from "../footer/footer";

function Navbar({cartCount}) {
  return (
    <>
      <header>
        <div className={style.logo}>
          <NavLink to="/">
          <img className={style.myLogo} src={logo} alt="" />
          </NavLink>
        </div>
        <div className={style.links}>
          <ul>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/cart"
            >
              Cart
              {cartCount <= 0 ? null : <p className={style.cartC}>{cartCount}</p>}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/additem"
            >
              AddItem
            </NavLink>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              alt=""
            />
          </ul>
        </div>
      </header>
      <Outlet />
      <Footer/>
    </>
  );
}

export default Navbar;
