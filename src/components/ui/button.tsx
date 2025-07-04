import React from "react";
import "./button.css";

import type { UiButtonProps } from "../../../custom";

/**
 * UiButton component - reusable button with multiple styles and sizes
 *
 * @component
 * @description A flexible button component that supports different types (active/inactive),
 * various sizes (addToCart, seeMore, filter, etc.), and custom click handlers.
 * Automatically determines HTML button type based on the 'type' prop.
 *
 * @param {UiButtonProps} props - The component props
 * @param {string} props.text - The text to display on the button
 * @param {string} props.type - Button type ('inactive', 'submit', or empty for active)
 * @param {function} [props.onClick] - Optional click handler function
 * @param {string} props.size - Button size variant (addToCart, seeMore, filter, placeAnOrder, submit, cancel, remove)
 *
 * @returns {JSX.Element} Styled button element with appropriate classes and behavior
 *
 * @example
 * ```tsx
 * <UiButton
 *   text="Add to Cart"
 *   type="button"
 *   size="addToCart"
 *   onClick={() => handleAddToCart()}
 * />
 * ```
 */
const UiButton = ({ text, type, onClick, size }: UiButtonProps) => {
	const buttonType = type === "inactive" ? "button_inactive" : "";
	const buttonSize = (() => {
		switch (size) {
			case "addToCart":
				return "button_addToCart";
			case "seeMore":
				return "button_seeMore";
			case "filter":
				return "button_filter";
			case "placeAnOrder":
				return "button_placeAnOrder";
			case "submit":
				return "button_submit";
			case "cancel":
				return "button_cancel";
			case "remove":
				return "button_remove";
			default:
				return "button_reset";
		}
	})();

	return (
		<button
			type={type === "submit" ? "submit" : "button"}
			onClick={onClick}
			className={`ui-button ${buttonType} ${buttonSize}`}
		>
			{text}
		</button>
	);
};

export default UiButton;
