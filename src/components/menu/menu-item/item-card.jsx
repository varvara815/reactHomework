import React from "react";
import "./item-card.css";
import UiButton from "../../ui/button";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.quantityInput = React.createRef();
  }

  handleAddToCart = () => {
    const quantity = this.quantityInput.current.value;
    this.props.addToCart(+quantity);
  };
  render() {
    const { title, price, description, imageUrl, id } = this.props;
    let tooltipTitle = "";
    let tooltipDescription = "";

    if (title.length > 20) {
      tooltipTitle = title;
    }

    if (description.length > 60) {
      tooltipDescription = description;
    }

    return (
      <article className='menu-item-container'>
        <div
          className='menu-item-img'
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div>
          <div className='menu-item-title-price'>
            <h3 className='menu-item-dish-name' title={tooltipTitle}>
              {title}
            </h3>
            <span>${price} USD</span>
          </div>
          <p className='menu-item-description' title={tooltipDescription}>
            {description}
          </p>
          <div className='menu-item-add-to-cart'>
            <input
              type='number'
              id={id}
              min='1'
              max='99'
              defaultValue='1'
              ref={this.quantityInput}
            />
            <UiButton
              text='Add to cart'
              type='button'
              size='addToCart'
              onClick={this.handleAddToCart}
            />
          </div>
        </div>
      </article>
    );
  }
}

export default ItemCard;
