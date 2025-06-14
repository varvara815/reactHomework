import type { NavigationItem } from '../../custom';

export const mealsChunkSize = 6;
export const mealsAPI =
	'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals';

export const navigation: NavigationItem[] = [
			{ path: '/intro', title: 'Home' },
			{ path: '/menu', title: 'Menu' },
			{ path: '/company', title: 'Company' },
			{ path: '/login', title: 'Login' },
		];