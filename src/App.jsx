import "./App.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Menu from "./components/menu/menu.jsx";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
    };
  }

  incrementCartCount = (number) => {
    this.setState((prevState) => ({
      cartCount: prevState.cartCount + number,
    }));
  };

  render() {
    const { cartCount } = this.state;

    return (
      <>
        <Header cartCount={cartCount} />
        <Menu addToCart={this.incrementCartCount} />
        <Footer />
      </>
    );
  }
}

export default App;
