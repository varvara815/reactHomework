export interface CategoryFilterProps {
	mealsCategories: string[];
	activeCategory: number;
	setActiveCategoryIndex: (index: number) => void;
}

export interface UiButtonProps {
	text: string;
	type: string;
	size: string;
	onClick?: () => void;
}

export interface ItemCardProps {
	title: string;
	price: number;
	description: string;
	imageUrl: string;
	id: string;
	addToCart: (quantity: number) => void;
}


export interface Meal {
	id: string;
	meal: string;
	category: string;
	price: number;
	instructions: string;
	img: string;
	[key: string]: unknown;
}

export interface NavigationItem {
  path: string;
  title: string;
}
export interface MealsState {
	allMeals: Meal[];
	loading: boolean;
	error: string | null;
	activeCategoryIndex: number;
	amountOfMeals: number;
	mealsChunkSize: number;
}
export interface FetchOptions {
	headers: {
		'Content-Type': string;
	};
	method?: string;
}

export interface FetchResponse<T> {
	data: T | null;
	error: string | null;
}

export interface AppState {
  isAuthenticated: boolean;
}

export interface CartState {
  items: Record<string, number>;
  count: number;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

export interface RootState {
  app: {
    displayPage: number;
    isAuthenticated: boolean;
  };
  cart: {
    items: Record<string, number>;
    count: number;
  };
  meals: {
    allMeals: Meal[];
    loading: boolean;
    error: string | null;
    activeCategoryIndex: number;
    amountOfMeals: number;
    mealsChunkSize: number;
  };
}
