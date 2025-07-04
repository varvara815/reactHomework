import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";

/**
 * Application entry point
 *
 * @description Initializes and renders the React application with all necessary providers.
 * Sets up Redux store provider, theme context provider, and React strict mode.
 * Mounts the application to the DOM element with id 'root'.
 *
 * @example
 * ```html
 * <!-- In index.html -->
 * <div id="root"></div>
 * ```
 */
const rootElement = document.getElementById("root");
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
