import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import type { Theme, ThemeContextType } from "../../custom";
import type { ReactNode } from "react";

/**
 * Theme context for managing application theme state
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider component for managing application theme
 *
 * @component
 * @description Provides theme context to child components. Manages light/dark theme switching,
 * persists theme preference in localStorage, detects system theme preference,
 * and automatically applies theme changes to the document element.
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to wrap with theme context
 *
 * @returns {JSX.Element} Theme context provider wrapping children
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	/**
	 * Gets the user's system theme preference
	 * @returns {Theme} 'dark' or 'light' based on system preference
	 */
	const getSystemTheme = useCallback((): Theme => {
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	}, []);

	const [theme, setTheme] = useState<Theme>(() => {
		// Check saved theme in localStorage or use system theme
		const savedTheme = localStorage.getItem("theme") as Theme | null;
		return savedTheme || getSystemTheme();
	});

	/**
	 * Toggles between light and dark theme
	 * Saves the new theme preference to localStorage
	 */
	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	}, []);

	// Apply theme to document
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	// Listen for system theme changes
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = () => {
			// Update theme only if user hasn't manually selected a theme
			if (!localStorage.getItem("theme")) {
				setTheme(getSystemTheme());
			}
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [getSystemTheme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

/**
 * Custom hook for accessing theme context
 *
 * @hook
 * @description Provides access to current theme and theme toggle function.
 * Must be used within a ThemeProvider component.
 *
 * @returns {ThemeContextType} Object containing current theme and toggleTheme function
 * @throws {Error} When used outside of ThemeProvider
 *
 * @example
 * ```tsx
 * const { theme, toggleTheme } = useTheme();
 * ```
 */
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
