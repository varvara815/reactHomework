import { useEffect } from 'react';

import ItemCard from './menu-item/item-card';
import UiButton from '../ui/button';
import CategoryFilter from '../categoryFilter/categoryFilter';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import {useAppSelector } from '../../hooks/useAppSelector';

import { fetchMeals, setActiveCategoryIndex, increaseAmountOfMeals } from '../../store/mealsSlice';

import { Meal } from '../../../custom';

import './menu.css';

const Menu = () => {
  const dispatch = useAppDispatch();
  const { allMeals, activeCategoryIndex, amountOfMeals, loading, error } = useAppSelector((state) => state.meals);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const mealsCategories = [...new Set(allMeals.map((item: Meal) => item.category))];
  const mealsCategorySelected = mealsCategories[activeCategoryIndex];

  const handleSeeMore = () => {
    dispatch(increaseAmountOfMeals());
  };

  const mealsFilteredByCategory = allMeals.filter(
    (meal: Meal) => meal.category === mealsCategorySelected
  );

  const mealsToDisplay = mealsFilteredByCategory.slice(0, amountOfMeals);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
        setActiveCategoryIndex={(index) => dispatch(setActiveCategoryIndex(index))}
      />

      <div className='menu-wrapper'>
        <div className='menu-items'>
          {mealsToDisplay.map((meal: Meal, index: number) => (
            <ItemCard
              key={index}
              title={meal.meal}
              price={meal.price}
              description={meal.instructions}
              imageUrl={meal.img}
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
