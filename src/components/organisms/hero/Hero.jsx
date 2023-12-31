import React from 'react'
import './Hero.scss';
import Navigation from '../../molecules/navigation/Navigation';
import googlePlayButton from '../../../assets/google-play.svg';
import appleStoreButton from '../../../assets/app-store.svg'
const Hero = () => {
  return (
		<>
			<Navigation />
			<main>
				<div className="content">
					<h1>The fast, affordable way to ride.</h1>
					<p>Download the Bolt app</p>
					<div className="download-buttons">
						<a href="https://apps.apple.com/ee/app/bolt-request-a-ride/id675033630">
							<img src={appleStoreButton} alt="" />
						</a>
						<a href="https://play.google.com/store/apps/details?id=ee.mtakso.client&hl=en&gl=US&pli=1">
							<img src={googlePlayButton} alt="" />
						</a>
					</div>
				</div>
				<div className="photo"></div>
			</main>
		</>
	);
}

export default Hero