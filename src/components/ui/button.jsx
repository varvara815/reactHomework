import React from "react";
import "./button.css";

class UiButton extends React.Component {
  render() {
    const { text, type, onClick, size } = this.props;
    let buttonType = "";
    let buttonSize = "";
    if (type === "inactive") {
      buttonType = "button_inactive";
    }

    switch (size) {
      case "addToCart":
        buttonSize = "button_addToCart";
        break;
      case "seeMore":
        buttonSize = "button_seeMore";
        break;
      case "filter":
        buttonSize = "button_filter";
        break;
      default:
        buttonSize = "";
    }

    return (
      <button
        onClick={onClick}
        className={`menu-button ${buttonType} ${buttonSize} `}
      >
        {text}
      </button>
    );
  }
}

export default UiButton;
