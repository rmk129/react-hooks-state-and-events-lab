import React, {useState} from "react";

function Item({ name, category }) {
const [inCart, setCart] = useState(false)

function Cart(){
  setCart((inCart) => !inCart)
}

const liClass = inCart ? "in-cart" : "";
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={Cart} className="add">{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
