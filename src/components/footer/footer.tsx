import "./footer.css";
import Background02 from "../ui/background02";

/**
 * Footer component for the application
 *
 * @component
 * @description Renders the site footer with company logo, navigation links,
 * social media icons, and copyright information. Includes multiple sections
 * for company links, template information, and external resources.
 *
 * @returns {JSX.Element} Footer with logo, navigation links, and social media icons
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
const Footer = () => {
	return (
		<footer>
			<div className="footer-top">
				<div className="footer-top-logo">
					<img
						className="footer-top-logo-img"
						src="/src/assets/header/logo.svg"
						alt="logo"
					/>
					<p className="footer-top-logo-text">
						Takeaway & Delivery template for small - medium businesses.
					</p>
				</div>
				<div className="footer-top-menu">
					<div className="footer-top-menu-list">
						<div className="footer-top-menu-list-item">
							<div>
								<h5>company</h5>
								<ul>
									<li>
										<a href="#1">Home</a>
									</li>
									<li>
										<a href="#2">Order</a>
									</li>
									<li>
										<a href="#3">FAQ</a>
									</li>
									<li>
										<a href="#4">Contact</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer-top-menu-list-item">
							<div>
								<h5>TEMPLATE</h5>
								<ul>
									<li>
										<a href="https://www.google.com/">Style Guide</a>
									</li>
									<li>
										<a href="https://www.google.com/">Changelog</a>
									</li>
									<li>
										<a href="https://www.google.com/">Licence</a>
									</li>
									<li>
										<a href="https://www.google.com/">Webflow University</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer-top-menu-list-item">
							<div>
								<h5>FLOWBASE</h5>
								<ul>
									<li>
										<a href="#5">More Cloneables</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="footer-container-bottom">
				<div className="footer-bottom-text">
					<p>
						Built by <a href="#6">Flowbase</a> · Powered by&nbsp;
						<a href="#7">Webflow</a>
					</p>
				</div>
				<div className="footer-bottom-icons">
					<a href="#1">
						<img alt="instagram" />
					</a>
					<a href="#1">
						<img alt="twitter" />
					</a>
					<a href="#1">
						<img alt="youtube" />
					</a>
				</div>
			</div>
			<Background02 />
		</footer>
	);
};

export default Footer;
