import React from "react";
import "./item-card.css";
import UiButton from "../../ui/button";

const ItemCard = ({ title, price, description, imageUrl, id, addToCart }) => {
  const handleAddToCart = () => {
    const quantity = document.getElementById(id).value;
    addToCart(+quantity);
  };

  return (
    <article className='menu-item-container'>
      <div
        className='menu-item-img'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div>
        <div className='menu-item-title-price'>
          <h3 className='menu-item-dish-name' title={title}>
            {title}
          </h3>
          <span>${price} USD</span>
        </div>
        <p className='menu-item-description' title={description}>
          {description}
        </p>
        <div className='menu-item-add-to-cart'>
          <input type='number' id={id} min='1' max='99' defaultValue='1' />
          <UiButton
            text='Add to cart'
            type='button'
            size='addToCart'
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
