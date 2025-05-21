import React from 'react';

import ItemCard from './menu-item/item-card';
import UiButton from '../ui/button';
import CategoryFilter from '../categoryFilter/categoryFilter';

import useFetch from '../../hooks/useFetch';

import { mealsChunkSize, mealsAPI } from '../constans';

import { MenuProps, Meal } from '../../../custom';

import './menu.css';

const Menu = ({ addToCart }: MenuProps) => {
  const [allMeals, setAllMeals] = React.useState<Meal[]>([]);
  const [amountOfMeals, setAmountOfMeals] = React.useState(mealsChunkSize);
  const [activeCategoryIndex, setActiveCategoryIndex] = React.useState(0);

  const { data, error } = useFetch(mealsAPI, 'GET');

  React.useEffect(() => {
    if (data === null) return;
    if (Array.isArray(data) && (data as Meal[]).length === 0) return;
    if (!error) {
      setAllMeals(data as Meal[]);
    } else {
      return;
    }
  }, [data, error]);

  const mealsCategories = [...new Set(allMeals.map((item: Meal) => item.category))];

  const mealsCategorySelected = mealsCategories[activeCategoryIndex];
  const handleSeeMore = () => {
    setAmountOfMeals((prevState) => prevState + mealsChunkSize);
  };

  const mealsFilteredByCategory = allMeals.filter(
    (meal: Meal) => meal.category === mealsCategorySelected
  );

  const mealsToDisplay = mealsFilteredByCategory.slice(0, amountOfMeals);
  return (
    <>
      <div className='menu-title-container'>
        <h2 className='menu-title'>Browse our menu</h2>
        <p className='menu-title-text'>
          Use our menu to place an order online, or&nbsp;
          <span className='menu-title-highlight' title='+1234567890'>
            phone
          </span>
          &nbsp;our store to place a pickup order. Fast and fresh food.
        </p>
      </div>
      <CategoryFilter
        mealsCategories={mealsCategories}
        activeCategory={activeCategoryIndex}
        setActiveCategoryIndex={setActiveCategoryIndex}
      />

      <div className='menu-wrapper'>
        <div className='menu-items'>
          {mealsToDisplay.map((meal: Meal, index: number)  => (
            <ItemCard
              key={index}
              title={meal.meal}
              price={meal.price}
              description={meal.instructions}
              imageUrl={meal.img}
              addToCart={addToCart}
              id={meal.id}
            />
          ))}
        </div>
      </div>
      <div className='menu-see-more-container'>
        <div className='menu-see-more'>
          {mealsFilteredByCategory.length > mealsToDisplay.length && (
            <UiButton
              text='See more'
              type=''
              size='seeMore'
              onClick={handleSeeMore}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
