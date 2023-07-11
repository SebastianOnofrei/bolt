import React from 'react'
import './Navigation.scss';
import NavigationItem from '../../atoms/navigation-item/NavigationItem';
import logo from '../../../assets/Bolt-logo.svg'

const Navigation = () => {

 const navItems=['Ride','Become a driver','Fleet','Business','Food','Cities']

  return (
		<nav>
			<img src={logo} alt="Bolt logo" />
			<ul>
				{navItems.map((item, index) => {
					return <NavigationItem key={index} text={item} />;
				})}
			</ul>
			<div className="menu-toggle">=</div>
		</nav>
	);
}

export default Navigation