import './header.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Link, NavLink } from 'react-router-dom';
import type { NavigationItem } from '../../../custom';
import { navigation } from '../constans';

const Header = () => {
	const cartCount = useAppSelector((state) => state.cart.count);

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
											isActive ? 'header-menu-list-selected' : ''
										}
									>
										{item.title}
									</NavLink>
								</li>
							))}
						</ul>
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
