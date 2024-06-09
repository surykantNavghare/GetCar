import React from 'react';
import Middle from './Middle';
import Brands from './Brands';

let Home = () => {
    return <>
         <div className='car'>
            <img src={`${process.env.PUBLIC_URL}/Images/suv.png`} alt="logo" id='car'/>
         </div>
        <div className='row slider'>
            <div className='heading'>Let dreams comes true with GetCar.com</div>
        </div>
        <div className='row mt-3'>
            <Middle/>
        </div>
        <p className='text border-bottom'>Our Brands</p>
        <div className='row'>
           <Brands/>
        </div>
    </>
}

export default Home;