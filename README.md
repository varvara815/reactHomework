# Food Delivery App

A modern React application for food delivery services with user authentication, menu browsing, and order management.

## Features

- **User Authentication**: Sign up and login functionality using Firebase Authentication
- **Menu Browsing**: Browse food items by categories
- **Shopping Cart**: Add items to cart, adjust quantities, and remove items
- **Order Management**: Place orders with delivery address
- **Responsive Design**: Works on desktop and mobile devices
- **Theme Switching**: Light and dark mode support

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Routing**: React Router v7
- **State Management**: Redux Toolkit
- **Styling**: CSS and Styled Components
- **Authentication**: Firebase Authentication
- **API**: MockAPI for menu items
- **Build Tool**: Vite
- **Code Quality**: Biome

## Project Structure
```
src/
|-- assets/            # Images and SVGs
|-- components/        # UI components
|   |-- categoryFilter/  # Menu category filtering
|   |-- company/         # Company information page
|   |-- footer/          # Footer component
|   |-- header/          # Header with navigation
|   |-- intro/           # Landing page
|   |-- login/           # Authentication
|   |-- menu/            # Menu display and item cards
|   |-- order/           # Order checkout
|   |-- ui/              # Reusable UI components
|-- contexts/          # React contexts
|   |-- ThemeContext.tsx # Theme management
|-- hooks/             # Custom React hooks
|-- store/             # Redux store configuration
|   |-- appSlice.ts      # Authentication state
|   |-- cartSlice.ts     # Shopping cart state
|   |-- mealsSlice.ts    # Menu items state
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd reactHW
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file with your Firebase configuration
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server
   ```bash
   pnpm dev
   ```

## Usage

- **Home Page**: View the landing page with information about the service
- **Menu**: Browse food items by category and add them to your cart
- **Login**: Create an account or sign in to an existing one
- **Cart**: View your cart and proceed to checkout (requires authentication)
- **Order**: Enter delivery details and place your order
- **Theme Toggle**: Switch between light and dark modes using the theme button in the header

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run code linting

## Deployment

Build the project for production:
```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

## Author

- **Varvara**

## License

This project is licensed under the MIT License