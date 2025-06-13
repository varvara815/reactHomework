import './header.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const dispatch = useAppDispatch();
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
							<li>
								<NavLink
									to="/intro"
									className={({ isActive }) =>
										isActive ? 'header-menu-list-selected' : ''
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/menu"
									className={({ isActive }) =>
										isActive ? 'header-menu-list-selected' : ''
									}
								>
									Menu
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/company"
									className={({ isActive }) =>
										isActive ? 'header-menu-list-selected' : ''
									}
								>
									Company
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/login"
									className={({ isActive }) =>
										`header-menu-list-login${isActive ? ' header-menu-list-selected' : ''}`
									}
								>
									Login
								</NavLink>
							</li>
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
