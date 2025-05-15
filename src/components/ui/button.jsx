import React from 'react';
import './button.css';

const UiButton = ({ text, type, onClick, size }) => {
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
        return '.button_submit';
      case 'cancel':
        return '.button_cancel';
      default:
        return '';
    }
  })();

  return (
    <button
      onClick={onClick}
      className={`ui-button ${buttonType} ${buttonSize}`}
    >
      {text}
    </button>
  );
};

export default UiButton;
