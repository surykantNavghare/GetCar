import React,{Suspense,lazy} from 'react';
import Loading from './Loading';
// import Middle from './Middle';
// import Brands from './Brands';
const Middle=lazy(()=>import('./Middle'));
const Brands=lazy(()=>import('./Brands'));

let Home = () => {
    return <>
         <div className='car' data-aos="fade-up">
            <img src={`${process.env.PUBLIC_URL}/Images/suv.png`} alt="logo" id='car' loading="lazy"/>
         </div>
         <Suspense fallback={<Loading />}>
         <div className='row slider' data-aos="fade-up">
            <div className='heading'>Let dreams comes true with GetCar.com</div>
        </div>
         </Suspense>
        
        <div className='row mt-3' data-aos="fade-up">
            <Suspense fallback={<Loading/>}>
                <Middle/>
            </Suspense>
            
        </div>
        <p className='text border-bottom' data-aos="fade-up">Our Brands</p>
        <div className='row' data-aos="fade-up">
           <Suspense fallback={<Loading/>} >
                <Brands />
           </Suspense>
        </div>
    </>
}

export default Home;