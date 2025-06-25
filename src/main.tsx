import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';

const rootElement = document.getElementById('root');
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Provider store={store}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</Provider>
		</StrictMode>,
	);
}
