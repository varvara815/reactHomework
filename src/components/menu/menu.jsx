import React from "react";
import "./menu.css";
import ItemCard from "./menu-item/item-card";
import UiButton from "../ui/button";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      amountOfMeals: 6,
    };
  }

  handleSeeMore = () => {
    this.setState((prevState) => ({
      amountOfMeals: prevState.amountOfMeals + 6,
    }));
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.setState({ meals: data });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  render() {
    const { meals, amountOfMeals } = this.state;
    return (
      <>
        <div className='menu-title-container'>
          <h2 className='menu-title'>Browse our menu</h2>
          <p className='menu-title-text'>
            Use our menu to place an order online, or&nbsp;
            <span className='menu-title-highlight' title='+1234567890'>
              phone
            </span>
            &nbsp; our store to place a pickup order. Fast and fresh food.
          </p>
        </div>
        <div className='menu-buttons-container'>
          <div className='menu-buttons'>
            <UiButton text='Dessert' type='' size='filter' />
            <UiButton text='Dinner' type='inactive' size='filter' />
            <UiButton text='Breakfast' type='inactive' size='filter' />
          </div>
        </div>
        <div className='menu-wrapper'>
          <div className='menu-items'>
            {this.state.meals.map((meal, index) => {
              if (index >= amountOfMeals) return null;
              return (
                <ItemCard
                  key={index}
                  title={meal.meal}
                  price={meal.price}
                  description={meal.instructions}
                  imageUrl={meal.img}
                  addToCart={this.props.addToCart}
                  id={meal.id}
                />
              );
            })}
          </div>
        </div>
        <div className='menu-see-more-container'>
          <div className='menu-see-more'>
            {amountOfMeals < meals.length && (
              <UiButton
                text='See more'
                type=''
                size='seeMore'
                onClick={() => this.handleSeeMore()}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
