import React from "react";
import "./style.css";

const ItemCounter = (props) => {
  return <span className={`chip ${props.className}`}>{props.counter}</span>;
};

export default ItemCounter;
