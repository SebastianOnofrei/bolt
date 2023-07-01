import React from 'react'
import './ReadyToRide.scss';
import googlePlayButton from "../../../assets/google-play.svg";
import appleStoreButton from "../../../assets/app-store.svg";
const ReadyToRide = () => {
  return (
		<section className='ready-to-ride'>
			<h2>Ready to ride?</h2>
			<div className="download-buttons">
				<a href="https://apps.apple.com/ee/app/bolt-request-a-ride/id675033630">
					<img src={appleStoreButton} alt="" />
				</a>
				<a href="https://play.google.com/store/apps/details?id=ee.mtakso.client&hl=en&gl=US&pli=1">
					<img src={googlePlayButton} alt="" />
				</a>
			</div>
            <p>Or <a href="#">sign up</a> to start driving</p>
		</section>
	);
}

export default ReadyToRide