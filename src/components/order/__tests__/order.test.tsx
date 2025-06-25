import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Order from '../order';
import cartReducer from '../../../store/cartSlice';
import mealsReducer from '../../../store/mealsSlice';
import appReducer from '../../../store/appSlice';
import type { CartState } from '../../../../custom';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Order Component', () => {
	const mockMeals = [
		{
			id: 'meal1',
			meal: 'Test Meal 1',
			price: 10,
			img: 'test.jpg',
			category: 'test',
			instructions: 'test',
		},
		{
			id: 'meal2',
			meal: 'Test Meal 2',
			price: 15,
			img: 'test2.jpg',
			category: 'test',
			instructions: 'test',
		},
	];

	const createMockStore = (
		cartItems: Record<string, number> = {},
		isAuthenticated = true,
	) => {
		const cartCount =
			Object.values(cartItems).length > 0
				? Object.values(cartItems).reduce(
						(sum: number, qty: number) => sum + qty,
						0,
					)
				: 0;

		return configureStore({
			reducer: {
				cart: cartReducer,
				meals: mealsReducer,
				app: appReducer,
			},
			preloadedState: {
				cart: {
					items: cartItems,
					count: cartCount,
				} as CartState,
				meals: {
					allMeals: mockMeals,
					loading: false,
					error: null,
					activeCategoryIndex: 0,
					amountOfMeals: 2,
					mealsChunkSize: 10,
				},
				app: {
					isAuthenticated,
					displayPage: 0,
				},
			},
		});
	};

	it('should redirect to login if not authenticated', () => {
		const store = createMockStore({}, false);

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Order />
				</MemoryRouter>
			</Provider>,
		);

		expect(mockNavigate).toHaveBeenCalledWith('/login');
	});

	it('should display empty cart message when cart is empty', () => {
		const store = createMockStore();

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Order />
				</MemoryRouter>
			</Provider>,
		);

		expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
		expect(
			screen.getByText('Go to the menu to add items to your cart.'),
		).toBeInTheDocument();
	});

	it('should display cart items when cart has items', () => {
		const store = createMockStore({ meal1: 2 });

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Order />
				</MemoryRouter>
			</Provider>,
		);

		expect(screen.getByText('Finish your order')).toBeInTheDocument();
		expect(screen.getByText('Test Meal 1')).toBeInTheDocument();
		expect(screen.getByText('$20.00 USD')).toBeInTheDocument();
	});

	it('should update quantity when input changes', () => {
		const store = createMockStore({ meal1: 2 });

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Order />
				</MemoryRouter>
			</Provider>,
		);

		const quantityInput = screen.getByDisplayValue('2');
		fireEvent.change(quantityInput, { target: { value: '3' } });

		expect(screen.getByText('$30.00 USD')).toBeInTheDocument();
	});

	it('should remove item when remove button is clicked', () => {
		const store = createMockStore({ meal1: 2 });

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Order />
				</MemoryRouter>
			</Provider>,
		);

		const removeButton = screen.getByText('x');
		fireEvent.click(removeButton);

		expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
	});

	it('should place order and clear cart when form is submitted', () => {
		const store = createMockStore({ meal1: 2 });
		const alertMock = jest.fn();
		global.alert = alertMock;

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Order />
				</MemoryRouter>
			</Provider>,
		);

		const streetInput = screen.getByLabelText('Street');
		const houseInput = screen.getByLabelText('House');
		const orderButton = screen.getByText('Order');

		fireEvent.change(streetInput, { target: { value: 'Test Street' } });
		fireEvent.change(houseInput, { target: { value: '123' } });
		fireEvent.click(orderButton);

		expect(alertMock).toHaveBeenCalledWith('Order placed successfully!');
		expect(mockNavigate).toHaveBeenCalledWith('/menu');
	});
});
