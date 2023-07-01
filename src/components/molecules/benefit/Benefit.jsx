import React from 'react'
import './Benefit.scss';

const Benefit = (props) => {

  let {imageUrl,headline,detail} = props.benefit;

  return (
		<div className="benefit">
			<img src={imageUrl} alt="benefit image" />
			<div className="benefit-text">
				<h3>{headline}</h3>
				<p>{detail}</p>
			</div>
		</div>
	);
}

export default Benefit