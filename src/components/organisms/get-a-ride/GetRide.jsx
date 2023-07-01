import React from 'react' 
import './GetRide.scss';
import Benefits from '../../molecules/benefits/Benefits';
import phoneImage from '../../../assets/phone-mockup.png';

const GetRide = () => {
  return (
		<div className="wrapper">
			<Benefits />
			<section className="get-ride">
				<h2>Get a ride in minutes!</h2>
				<p>
					Pick your destinaton, request a ride, meet your driver, enjoy the
					journey
				</p>
			</section>
            <div className="phone-photo">
                <img src={phoneImage} alt="" />
            </div>
		</div>
	);
}

export default GetRide