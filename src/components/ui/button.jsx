import React from "react";
import "./button.css";

class UiButton extends React.Component {
  render() {
    const { text, type, onClick } = this.props;
    let buttonType = "";
    if (type === "inactive") {
      buttonType = "button_inactive";
    }
    return (
      <button
        onClick={onClick}
        className={`menu-button ${buttonType}`}
        type={type}
      >
        {text}
      </button>
    );
  }
}

export default UiButton;
