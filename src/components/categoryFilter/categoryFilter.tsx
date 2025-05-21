import React from "react";
import "./categoryFilter.css";
import UiButton from "../ui/button";
import { CategoryFilterProps } from "../../../custom"; 

const CategoryFilter = ({
  mealsCategories,
  activeCategory,
  setActiveCategoryIndex,
}: CategoryFilterProps) => {
  return (
    <div className='menu-buttons-container'>
      <div className='menu-buttons'>
        {mealsCategories.map((categoryName, index) => (
          <UiButton
            text={categoryName}
            type={index === activeCategory ? "" : "inactive"}
            size='filter'
            key={index}
            onClick={() => setActiveCategoryIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
