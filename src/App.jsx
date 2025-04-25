import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Menu from "./components/menu/menu.jsx";

const App = () => {
  const [cartCount, setCartCount] = React.useState(0);

  const incrementCartCount = (number) => {
    setCartCount((prevState) => prevState + number);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Menu addToCart={incrementCartCount} />
      <Footer />
    </>
  );
};

export default App;
