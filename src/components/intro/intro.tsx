import UiButton from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import {
	IntroButtonWrapper,
	IntroContainer,
	IntroDeliveryImage,
	IntroRating,
	IntroText,
	IntroTitle,
	IntroTrustpilot,
} from './intro.styled';

const Intro = () => {
	const navigate = useNavigate();

	return (
		<IntroContainer>
			<div>
				<IntroTitle>
					Beautiful food & takeaway, <span>delivered</span> to your door.
				</IntroTitle>
				<IntroText>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500.
				</IntroText>
				<IntroButtonWrapper>
					<UiButton
						text="Place an Order"
						type="button"
						size="placeAnOrder"
						onClick={() => navigate('/menu')}
					/>
				</IntroButtonWrapper>

				<IntroTrustpilot>
					<Link to="/intro">
						<img src="/src/assets/intro/trustpilot.svg" alt="Trustpilot" />
					</Link>
				</IntroTrustpilot>
				<IntroRating>
					<span>4.8 out of 5</span> based on 2000+ reviews
				</IntroRating>
			</div>

			<IntroDeliveryImage />
		</IntroContainer>
	);
};

export default Intro;
