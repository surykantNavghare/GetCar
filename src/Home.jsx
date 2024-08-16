import React from 'react';
import Middle from './Middle';
import Brands from './Brands';

let Home = () => {
    return <>
         <div className='car' data-aos="fade-up">
            <img src={`${process.env.PUBLIC_URL}/Images/suv.png`} alt="logo" id='car'/>
         </div>
        <div className='row slider' data-aos="fade-up">
            <div className='heading'>Let dreams comes true with GetCar.com</div>
        </div>
        <div className='row mt-3' data-aos="fade-up">
            <Middle/>
        </div>
        <p className='text border-bottom' data-aos="fade-up">Our Brands</p>
        <div className='row' data-aos="fade-up">
           <Brands/>
        </div>
    </>
}

export default Home;