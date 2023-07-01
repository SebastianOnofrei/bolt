import React from "react";
import "./SecondaryBenefits.scss";
import car from "../../../assets/secondary-benefits-car.svg";
import heart from "../../../assets/secondary-benefits-heart.svg";
import phone from "../../../assets/secondary-benefits-phone.svg";
import Benefit from "../../atoms/benefit/Benefit";

const SecondaryBenefits = () => {
	let benefits = [
		{
			imageUrl: car,
			headline: "Safe and convenient",
			detail: "Moving with Bolt is easy, convenient and fast.",
		},
		{
			imageUrl: heart,
			headline: "Happy drivers, happy riders",
			detail:
				"Bolt drivers earn more thanks to lower commission rates.",
		},
		{
			imageUrl: phone,
			headline: "Always there for you",
			detail: "Get fast support, whenever you need it.",
		},
	];

	return (
		<section className="secondary-benefits">
			{benefits.map((benefit, index) => {
				return <Benefit key={index} benefit={benefit} modifier='secondary' />;
			})}
		</section>
	);
};

export default SecondaryBenefits;
