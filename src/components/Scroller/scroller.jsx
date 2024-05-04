import React from "react";
import style from "./scroller.module.css";
import loder from "./loder.gif";

function Scroller() {
  return (
    <div className={style.scroller}>
      <img src={loder} alt="Loading..." className={style.loader} />
      <h4>Loading...</h4>
    </div>
  );
}

export default Scroller;
