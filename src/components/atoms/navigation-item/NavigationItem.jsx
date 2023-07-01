import React from 'react'
import './NavigationItem.scss';

const NavigationItem = (props) => {
  return (
		<li>
			<a href="#">
        		{props.text}
      		</a>
		</li>
	);
}

export default NavigationItem