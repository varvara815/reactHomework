import './order.css';
import UiButton from '../ui/button';

const Order = () => {
	return (
		<>
			<div className="order-title-container">
				<h1 className="order-title">Finish your order</h1>
			</div>
			<div>
				<article className="order-item-container">
					<div
						className="menu-item-img"
						style={{ backgroundImage: 'url(../assets/order/hamburger.svg)' }}
					/>
					<div>
						<h3>Burger Dreams</h3>
					</div>
					<div>
						<span>$ 9.20 USD</span>
						<div>
							<input
								type="number"
								id="Burger-Dreams"
								min="1"
								max="99"
								defaultValue="1"
							/>
							<UiButton text="X" type="button" size="reset" />
						</div>
					</div>
				</article>
				<form>
					<div>
						<label>
							Street
							<input type="text" name="street" />
						</label>
						<label>
							House
							<input type="text" name="house" />
						</label>
					</div>
					<div>
						<UiButton text="Order" type="submit" size="submit" />
					</div>
				</form>
			</div>
		</>
	);
};
export default Order;
