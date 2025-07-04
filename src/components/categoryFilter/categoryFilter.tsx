import React from "react";
import "./categoryFilter.css";
import type { CategoryFilterProps } from "../../../custom";
import UiButton from "../ui/button";

/**
 * CategoryFilter component for filtering meals by category
 *
 * @component
 * @description Renders a horizontal list of category filter buttons.
 * Highlights the active category and allows users to switch between different meal categories.
 *
 * @param {CategoryFilterProps} props - The component props
 * @param {string[]} props.mealsCategories - Array of available meal category names
 * @param {number} props.activeCategory - Index of the currently active category
 * @param {function} props.setActiveCategoryIndex - Callback function to set the active category index
 *
 * @returns {JSX.Element} A container with category filter buttons
 *
 * @example
 * ```tsx
 * <CategoryFilter
 *   mealsCategories={['Pizza', 'Burgers', 'Salads']}
 *   activeCategory={0}
 *   setActiveCategoryIndex={(index) => setActiveCategory(index)}
 * />
 * ```
 */
const CategoryFilter = ({
	mealsCategories,
	activeCategory,
	setActiveCategoryIndex,
}: CategoryFilterProps) => {
	return (
		<div className="menu-buttons-container">
			<div className="menu-buttons">
				{mealsCategories.map((categoryName, index) => (
					<UiButton
						text={categoryName}
						type={index === activeCategory ? "" : "inactive"}
						size="filter"
						key={categoryName}
						onClick={() => setActiveCategoryIndex(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default CategoryFilter;
