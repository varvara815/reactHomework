import UiButton from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
	IntroButtonWrapper,
	IntroContainer,
	IntroDeliveryImage,
	IntroRating,
	IntroText,
	IntroTitle,
	IntroTrustpilot,
	IntroWrapper,
} from "./intro.styled";

import Background03 from "../ui/background03";

/**
 * Intro component for the landing page
 *
 * @component
 * @description Renders the main landing page with hero section, including
 * promotional text, call-to-action button, Trustpilot rating, and delivery image.
 * Features a prominent "Place an Order" button that navigates to the menu page.
 *
 * @returns {JSX.Element} Landing page with hero content and navigation to menu
 *
 * @example
 * ```tsx
 * <Intro />
 * ```
 */
const Intro = () => {
	const navigate = useNavigate();

	return (
		<>
			<IntroWrapper>
				<Background03 />
				<IntroContainer>
					<div>
						<IntroTitle>
							Beautiful food & takeaway, <span>delivered</span> to your door.
						</IntroTitle>
						<IntroText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500.
						</IntroText>
						<IntroButtonWrapper>
							<UiButton
								text="Place an Order"
								type="button"
								size="placeAnOrder"
								onClick={() => navigate("/menu")}
							/>
						</IntroButtonWrapper>

						<IntroTrustpilot>
							<Link to="/intro">
								<img alt="Trustpilot" />
							</Link>
						</IntroTrustpilot>

						<IntroRating>
							<span>4.8 out of 5</span> based on 2000+ reviews
						</IntroRating>
					</div>

					<IntroDeliveryImage />
				</IntroContainer>
			</IntroWrapper>
		</>
	);
};

export default Intro;
