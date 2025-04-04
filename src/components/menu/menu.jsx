import './menu.css';

function Menu() {
    return (
        <>
            <div className="menu-devider"></div>
            <div className="menu-title-container">

                    <h2 className="menu-title">Browse our menu</h2>
                    <p className="menu-title-text">Use our menu to place an order online, or <span className="menu-title-highlight" title='+1234567890'>phone</span> our store to place a pickup order. Fast and fresh food.</p>
                <div className="menu-buttons-container">
                    <div className="menu-buttons">
                        <button className="menu-button menu-button-dessert menu-button-selected" >Dessert</button>
                        <button className="menu-button menu-button-dinner">Dinner</button>
                        <button className="menu-button menu-button-breakfast">Breakfast</button>
                    </div>
                </div>
            </div>
            <div className="menu-wrapper">
                <div className="menu-items">
                {Array(6).fill(null).map((_, index) => (
                    <article className="menu-item-container">
                        <div className='menu-item-img'>
                            <img src='/src/assets/menu/ham.jpg' alt='#' />
                        </div>
                        <div>
                            <div>
                                <div className="menu-item-title-price">
                                    <h3>Burger Dreams {index}</h3>
                                    <span>$ 9.20 USD</span>
                                </div>
                                <p className="menu-item-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="menu-item-add-to-cart">
                                <div>
                                    <label for='quantity'></label>
                                    <input type='number' id='quantity' min='1' max='500' defaultValue='1' />
                                </div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </article>


                    
                ))}
                </div>
            </div>
            <div className="menu-see-more">
                <button className="menu-button">See more</button>
            </div>
        </>
    );
}


export default Menu;