import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Menu from './components/menu/menu.jsx';
import Intro from './components/intro/intro.jsx';

const App = () => {
  const [cartCount, setCartCount] = React.useState(0);

  const incrementCartCount = (number) => {
    setCartCount((prevState) => prevState + number);
  };

  const [showIntro, setShowIntro] = React.useState(true);

  const hideIntro = () => setShowIntro(false);

  return (
    <>
      <Header cartCount={cartCount} />
      {showIntro && <Intro showIntro={hideIntro} />}
      {!showIntro && <Menu addToCart={incrementCartCount} />}
      <Footer />
    </>
  );
};

export default App;
