import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Menu from './components/menu/menu.jsx';
import Intro from './components/intro/intro.jsx';
import Login from './components/login/login.jsx';

const App = () => {
  const [cartCount, setCartCount] = React.useState(0);

  const incrementCartCount = (number) => {
    setCartCount((prevState) => prevState + number);
  };

  const [displayPage, setDisplayPage] = React.useState(0);

  const nextPage = () => {
    setDisplayPage((prevState) => prevState + 1);
  };

  const setPage = (page) => {
    setDisplayPage(page);
  };

  return (
    <>
      <Header cartCount={cartCount} goToPage={setPage} />
      {displayPage === 0 && <Login onSuccessfulSubmit={nextPage} />}
      {displayPage === 1 && <Intro showIntro={nextPage} />}
      {displayPage === 2 && <Menu addToCart={incrementCartCount} />}
      <Footer />
    </>
  );
};

export default App;
