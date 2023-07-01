import React from 'react'
import './Benefits.scss';
import car from '../../../assets/benefits-car.svg';
import wallet from "../../../assets/benefits-wallet.svg";
import phone from "../../../assets/benefits-phone.svg";
import Benefit from '../../molecules/benefit/Benefit';


const Benefits = () => {

  let benefits = [
		{
			imageUrl: car,
			headline: "Get a ride",
			detail: "Bolt offers you a ride in minutes.",
		},
		{
			imageUrl: wallet,
			headline: "The best prices",
			detail: "We aim to offer the best ride prices in every city. See for yourself!",
		},
		{
			imageUrl: phone,
			headline: "Easy to use ",
			detail: "Get wherever you need to go as quickly as possible",
		},
	];

  return (
    <section className='benefits'>  
        {benefits.map((benefit,index)=>{
                    return(
                        <Benefit key={index} benefit={benefit}/>
                    )
                }
            )
        }
    </section>
  )
}

export default Benefits