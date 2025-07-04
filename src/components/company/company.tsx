import "./company.css";
import Background01 from "../ui/background01";

/**
 * Company component displaying company information page
 *
 * @component
 * @description A simple placeholder page for company information.
 * Currently displays basic company details with a background.
 *
 * @returns {JSX.Element} Company information page with background
 *
 * @example
 * ```tsx
 * <Company />
 * ```
 */
const Company = () => {
	return (
		<>
			<Background01 />
			<div className="company-container">
				<h2>Company Information</h2>
				<p>This is the company page. More information coming soon.</p>
			</div>
		</>
	);
};

export default Company;
