import "./order.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
	removeFromCart,
	updateQuantity,
	clearCart,
} from "../../store/cartSlice";
import UiButton from "../ui/button";
import { useNavigate } from "react-router-dom";
import React from "react";
import Background01 from "../ui/background01";

/**
 * Order component for managing cart items and placing orders
 *
 * @component
 * @description Displays cart items, allows quantity modification, item removal,
 * and order placement with delivery address. Redirects unauthenticated users to login.
 *
 * @returns {JSX.Element} Order page with cart items and checkout form or empty cart message
 *
 * @example
 * ```tsx
 * <Order />
 * ```
 */
const Order = () => {
	const { items } = useAppSelector((state) => state.cart);
	const { allMeals } = useAppSelector((state) => state.meals);
	const isAuthenticated = useAppSelector((state) => state.app.isAuthenticated);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!isAuthenticated) {
			navigate("/login");
		}
	}, [isAuthenticated, navigate]);

	/**
	 * Retrieves meal data by ID from the meals store
	 * @param {string} id - The meal ID to search for
	 * @returns {Object|undefined} Meal object or undefined if not found
	 */
	const getItemData = (id: string) => {
		return allMeals.find((meal) => meal.id === id);
	};

	/**
	 * Removes an item from the cart
	 * @param {string} id - The ID of the item to remove
	 */
	const handleRemoveItem = (id: string) => {
		dispatch(removeFromCart(id));
	};

	/**
	 * Updates the quantity of an item in the cart
	 * @param {string} id - The ID of the item to update
	 * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event
	 */
	const handleQuantityChange = (
		id: string,
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const quantity = Number.parseInt(e.target.value, 10);
		if (quantity > 0) {
			dispatch(updateQuantity({ id, quantity }));
		}
	};

	/**
	 * Handles order submission with delivery address
	 * Calculates total amount, shows confirmation alert, clears cart, and navigates to menu
	 * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
	 */
	const handleOrder = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const street = (formData.get("street") as string) || "";
		const house = (formData.get("house") as string) || "";

		let totalAmount = 0;
		itemIds.forEach((id) => {
			const itemData = getItemData(id);
			if (itemData) {
				totalAmount += itemData.price * items[id];
			}
		});

		const message = `Order placed successfully!\n\nTotal amount: $${totalAmount.toFixed(2)} USD\nDelivery address: ${street}, ${house}`;

		alert(message);
		dispatch(clearCart());
		navigate("/menu");
	};

	const itemIds = Object.keys(items);

	if (itemIds.length === 0) {
		return (
			<>
				<Background01 />
				<div className="order-title-container">
					<h1 className="order-title">Your cart is empty</h1>
				</div>
				<div className="order-container">
					<p>Go to the menu to add items to your cart.</p>
					<div className="order-button-goToMenu">
						<UiButton
							text="Go to Menu"
							type="button"
							size="button_placeAnOrder"
							onClick={() => navigate("/menu")}
						/>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<Background01 />
			<div className="order-title-container">
				<h2 className="order-title">Finish your order</h2>
			</div>
			<div className="order-container">
				<div className="order-items">
					{itemIds.map((id) => {
						const itemData = getItemData(id);
						if (!itemData) return null;

						return (
							<article key={id} className="order-item-container">
								<div className="order-item-img-name">
									<div
										className="menu-item-img"
										style={{ backgroundImage: `url(${itemData.img})` }}
									/>
									<div>
										<h3 className="order-item-name">{itemData.meal}</h3>
									</div>
								</div>

								<div className="order-item-price-actions">
									<span className="order-item-price">
										${(itemData.price * items[id]).toFixed(2)} USD
									</span>

									<input
										type="number"
										value={items[id]}
										onChange={(e) => handleQuantityChange(id, e)}
										min="1"
										max="9999"
									/>
									<div>
										<UiButton
											text="x"
											type="button"
											size="remove"
											onClick={() => handleRemoveItem(id)}
										/>
									</div>
								</div>
							</article>
						);
					})}
				</div>

				<form className="order-form-container" onSubmit={handleOrder}>
					<div className="order-form">
						<div className="form-group">
							<label className="form-label-street" htmlFor="street">
								Street
							</label>
							<input
								className="order-input-street"
								type="text"
								id="street"
								name="street"
								required
							/>
						</div>
						<div className="form-group">
							<label className="form-label-house" htmlFor="house">
								House
							</label>
							<input
								className="order-input-house"
								type="text"
								id="house"
								name="house"
								required
							/>
						</div>
					</div>
					<div className="order-button-order">
						<UiButton text="Order" type="submit" size="submit" />
					</div>
				</form>
			</div>
		</>
	);
};

export default Order;
