import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import type { Theme, ThemeContextType } from '../../custom';
import type { ReactNode } from 'react';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	// Check user's system theme
	const getSystemTheme = useCallback((): Theme => {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	}, []);

	const [theme, setTheme] = useState<Theme>(() => {
		// Check saved theme in localStorage or use system theme
		const savedTheme = localStorage.getItem('theme') as Theme | null;
		return savedTheme || getSystemTheme();
	});

	// Function to toggle theme
	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	}, []);

	// Apply theme to document
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	// Listen for system theme changes
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const handleChange = () => {
			// Update theme only if user hasn't manually selected a theme
			if (!localStorage.getItem('theme')) {
				setTheme(getSystemTheme());
			}
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, [getSystemTheme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// Hook for using theme in components
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
