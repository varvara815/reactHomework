import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Intro from './components/intro/intro';
import Login from './components/login/login';
import { useAppSelector } from './hooks/useAppSelector';

const App = () => {
  const { displayPage } = useAppSelector((state) => state.app);

  return (
    <>
      <Header  />
      {displayPage === 0 && <Login />}
      {displayPage === 1 && <Intro />}
      {displayPage === 2 && <Menu />}
      <Footer />
    </>
  );
};

export default App;
