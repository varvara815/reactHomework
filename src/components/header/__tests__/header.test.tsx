import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Header from '../header';
import cartReducer from '../../../store/cartSlice';
import type { CartState } from '../../../../custom';

// Mock ThemeContext
jest.mock('../../../contexts/ThemeContext', () => ({
	useTheme: () => ({ theme: 'light', toggleTheme: jest.fn() }),
}));

describe('Header Component', () => {
	const createMockStore = (cartCount = 0) => {
		return configureStore({
			reducer: {
				cart: cartReducer,
			},
			preloadedState: {
				cart: {
					items: {},
					count: cartCount,
				} as CartState,
			},
		});
	};

	it('should display cart count correctly when empty', () => {
		const store = createMockStore();

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</Provider>,
		);

		expect(screen.getByText('0')).toBeInTheDocument();
	});

	it('should display cart count correctly when items are in cart', () => {
		const store = createMockStore(5);

		render(
			<Provider store={store}>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</Provider>,
		);

		expect(screen.getByText('5')).toBeInTheDocument();
	});
});
