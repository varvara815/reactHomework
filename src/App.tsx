import './App.css';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useLocation,
} from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Login from './components/login/login';
import Menu from './components/menu/menu';
import Order from './components/order/order';
import Company from './components/company/company';
import { useAppSelector } from './hooks/useAppSelector';

const PrivateRoute = () => {
	const isAuthenticated = useAppSelector((state) => state.app.isAuthenticated);
	const location = useLocation();

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location.pathname }} replace />;
	}

	return <Order />;
};
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Navigate to="/intro" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/intro" element={<Intro />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/company" element={<Company />} />
				<Route path="/order" element={<PrivateRoute />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
