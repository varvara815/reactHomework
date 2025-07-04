import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useLocation,
} from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Login from "./components/login/login";
import Menu from "./components/menu/menu";
import Order from "./components/order/order";
import Company from "./components/company/company";
import { useAppSelector } from "./hooks/useAppSelector";

/**
 * PrivateRoute component for protecting authenticated routes
 *
 * @component
 * @description Protects the Order route by checking authentication status.
 * Redirects unauthenticated users to login page while preserving the intended destination.
 *
 * @returns {JSX.Element} Order component if authenticated, otherwise Navigate to login
 *
 * @example
 * ```tsx
 * <Route path="/order" element={<PrivateRoute />} />
 * ```
 */
const PrivateRoute = () => {
	const isAuthenticated = useAppSelector((state) => state.app.isAuthenticated);
	const location = useLocation();

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location.pathname }} replace />;
	}

	return <Order />;
};

/**
 * Main App component
 *
 * @component
 * @description Root application component that sets up routing, layout, and navigation.
 * Includes header and footer on all pages, defines all application routes,
 * and implements protected routes for authenticated content.
 *
 * @returns {JSX.Element} Complete application with routing and layout
 *
 * @example
 * ```tsx
 * <App />
 * ```
 */
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
