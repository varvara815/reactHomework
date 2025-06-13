export interface CategoryFilterProps {
	mealsCategories: string[];
	activeCategory: number;
	setActiveCategoryIndex: (index: number) => void;
}

export interface HeaderProps {
	cartCount: number;
	goToPage?: (page: number) => void;
}

export interface IntroProps {
	showIntro: () => void;
}

export interface LoginProps {
	onSuccessfulSubmit?: () => void;
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

export interface MenuProps {
	addToCart: (quantity: number) => void;
}

export interface Meal {
	id: string;
	meal: string;
	category: string;
	price: number;
	instructions: string;
	img: string;
	[key: string]: any;
}

interface MealsState {
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

export interface CartState {
	count: number;
}

export interface AppState {
  isAuthenticated: boolean;
}
export interface RootState {
	app: {
		displayPage: number;
	};
	cart: {
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
