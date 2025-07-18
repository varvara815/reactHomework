import "./header.css";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Link, NavLink } from "react-router-dom";
import type { NavigationItem } from "../../../custom";
import { navigation } from "../constants";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * Header component for the application navigation
 *
 * @component
 * @description Renders the main navigation header with logo, navigation menu,
 * theme toggle button, and shopping cart with item count. Displays active
 * navigation states and provides theme switching functionality.
 *
 * @returns {JSX.Element} Header with navigation, theme toggle, and cart
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 */
const Header = () => {
	const cartCount = useAppSelector((state) => state.cart.count);
	const { theme, toggleTheme } = useTheme();

	return (
		<>
			<header className="header">
				<nav className="header-container">
					<div className="header-logo">
						<Link to="/intro">
							<img src="/src/assets/header/logo.svg" alt="logo" />
						</Link>
					</div>
					<div className="header-menu">
						<ul className="header-menu-list">
							{navigation.map((item: NavigationItem) => (
								<li key={item.path}>
									<NavLink
										to={item.path}
										className={({ isActive }) =>
											isActive ? "header-menu-list-selected" : ""
										}
									>
										{item.title}
									</NavLink>
								</li>
							))}
						</ul>
						<button
							className="theme-toggle"
							onClick={toggleTheme}
							aria-label="Switch theme"
							type="button"
						>
							{theme === "light" ? "◐" : "◑"}
						</button>

						<div className="cart-container">
							<Link to="/order">
								<div className="cart">
									<img src="/src/assets/header/cart.svg" alt="cart" />
									<span className="cart-quantity" id="cart-quantity">
										{cartCount}
									</span>
								</div>
							</Link>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
