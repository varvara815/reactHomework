import React from 'react';
import './button.css';

import type { UiButtonProps } from '../../../custom';

const UiButton = ({ text, type, onClick, size }: UiButtonProps) => {
	const buttonType = type === 'inactive' ? 'button_inactive' : '';
	const buttonSize = (() => {
		switch (size) {
			case 'addToCart':
				return 'button_addToCart';
			case 'seeMore':
				return 'button_seeMore';
			case 'filter':
				return 'button_filter';
			case 'placeAnOrder':
				return 'button_placeAnOrder';
			case 'submit':
				return 'button_submit';
			case 'cancel':
				return 'button_cancel';
			case 'remove':
				return 'button_remove';
			default:
				return 'button_reset';
		}
	})();

	return (
		<button
			type={type === 'submit' ? 'submit' : 'button'}
			onClick={onClick}
			className={`ui-button ${buttonType} ${buttonSize}`}
		>
			{text}
		</button>
	);
};

export default UiButton;
