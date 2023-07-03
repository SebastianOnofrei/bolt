import React from 'react'
import './Footer.scss';
import NavigationItem from '../../atoms/navigation-item/NavigationItem';
import logo from '../../../assets/Bolt-logo.svg';
import googlePlayButton from "../../../assets/google-play.svg";
import appleStoreButton from "../../../assets/app-store.svg";
import appGalleryButton from '../../../assets/app-gallery.svg';
import DownloadButton from '../../atoms/download-button/DownloadButton';
import support from '../../../assets/Support.svg';
import FacebookLogo from '../../../assets/Facebook.svg';
import LinkedinLogo from '../../../assets/LinkedIn.svg';
import TwitterLogo from '../../../assets/Twitter.svg';
import InstagramLogo from '../../../assets/Instagram.svg';

let year = new Date().getFullYear();

const Footer = () => {

let ourServices = ['Ride','Become a driver', 'Business', 'Food', 'Fleets', 'Trotinete', 'Scooters Platform', 'Dispatch Software', 'Franchise','Influencers','Request Bolt Online'];
let othersLinks = ['Airports', 'Cities','Green Plan','Careers','Press','Blog','Contacts','Security'];


  return (
		<footer>
			<div className="footer-wrapper">
				<div className="support">
					<img src={logo} alt="logo" />
					<div className="downloads">
						<div className="download-buttons">
							<DownloadButton url={appleStoreButton} />
							<DownloadButton url={googlePlayButton} />
							<DownloadButton url={appGalleryButton} />
						</div>
					</div>
					<div className="support-link">
						<img src={support} alt="" />
						<NavigationItem text="Support" />
					</div>
				</div>
				<div className="our-services">
					<h5>Our services</h5>
					<ul className="links">
						{ourServices.map((service, index) => {
							return <NavigationItem text={service} key={index} />;
						})}
					</ul>
				</div>
				<div className="others">
					<h5>Others</h5>
					<ul className="links">
						{othersLinks.map((service, index) => {
							return <NavigationItem text={service} key={index} />;
						})}
					</ul>
				</div>
			</div>
			<div className="copyright">
				<p>© {year} Bolt Technology </p>
				<div className="social-media-links">
					<img src={FacebookLogo} alt="facebook" />
					<img src={TwitterLogo} alt="twitter" />
					<img src={InstagramLogo} alt="instagram" />
					<img src={LinkedinLogo} alt="linkedin" />
				</div>
			</div>
		</footer>
	);
}

export default Footer