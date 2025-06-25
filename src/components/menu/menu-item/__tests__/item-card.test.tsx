import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ItemCard from '../item-card';
import cartReducer from '../../../../store/cartSlice';

describe('ItemCard Component', () => {
	const mockProps = {
		title: 'Test Item',
		price: 10,
		description: 'Test description',
		imageUrl: 'test.jpg',
		id: 'test-item-1',
	};

	const createMockStore = () => {
		return configureStore({
			reducer: {
				cart: cartReducer,
			},
		});
	};

	it('should render item card with correct information', () => {
		const store = createMockStore();

		render(
			<Provider store={store}>
				<ItemCard {...mockProps} />
			</Provider>,
		);

		expect(screen.getByText('Test Item')).toBeInTheDocument();
		expect(screen.getByText('$10 USD')).toBeInTheDocument();
		expect(screen.getByText('Test description')).toBeInTheDocument();
		expect(screen.getByText('Add to cart')).toBeInTheDocument();
	});

	it('should add item to cart when button is clicked', () => {
		const store = createMockStore();

		render(
			<Provider store={store}>
				<ItemCard {...mockProps} />
			</Provider>,
		);

		const quantityInput = screen.getByRole('spinbutton');
		fireEvent.change(quantityInput, { target: { value: '3' } });

		const addButton = screen.getByText('Add to cart');
		fireEvent.click(addButton);

		const state = store.getState();
		expect(state.cart.items['test-item-1']).toBe(3);
		expect(state.cart.count).toBe(3);
	});

	it('should use default quantity of 1 when not changed', () => {
		const store = createMockStore();

		render(
			<Provider store={store}>
				<ItemCard {...mockProps} />
			</Provider>,
		);

		const addButton = screen.getByText('Add to cart');
		fireEvent.click(addButton);

		const state = store.getState();
		expect(state.cart.items['test-item-1']).toBe(1);
		expect(state.cart.count).toBe(1);
	});
});
