import './header.css'


function Header() {

  return (
  <>
    <header class="header">
        <nav class='header-container'>
            <div class="header-logo">
                <a href="#">
                    <img src="/src/assets/header/logo.svg" alt="logo"></img>
                </a>
            </div>
            <div class="header-menu">
                <ul class="header-menu-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" class="header-menu-list-selected">Menu</a></li>
                    <li><a href="#">Company</a></li>
                    <li><a href="#" class="header-menu-list-login">Login</a></li>
                </ul>
                <div class="cart-container">
                    <a href='#'>
                        <div class="cart">
                            <img src="/src/assets/header/cart.svg" alt="cart"></img>
                            <span class="cart-quantity">0</span>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    </header>
  </>

  );
}

export default Header
