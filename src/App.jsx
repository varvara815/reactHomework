import "./App.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Menu from "./components/menu/menu.jsx";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const incrementCartCount = (number) => {
    setCartCount(cartCount + number);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Menu addToCart={incrementCartCount} />
      <Footer />
    </>
  );
}

export default App;
