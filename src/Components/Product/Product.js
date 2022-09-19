import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider"

const Product = ({ id, title, image, price, rating }) => {
  
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
      //fgartg
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      })
    }

  return (
    <div className="product">
      <p>{title}</p>
      <p className="product__price">
        <small>Rs</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
