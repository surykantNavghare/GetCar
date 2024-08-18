import React, { useState } from 'react';
import { BlurhashCanvas } from 'react-blurhash';

let Brands = () => {
    const [imageLoaded, setImageLoaded] = useState({
        bmw: false,
        audi: false,
        mercedes: false,
        rollsRoyce: false,
        landRover: false,
        volvo: false,
    });

    const handleImageLoad = (brand) => {
        setImageLoaded(prevState => ({
            ...prevState,
            [brand]: true
        }));
    };

    return (
        <div className='display2'>
            <div className='hovereff' data-aos="flip-left">
                
                <img
                    src={`${process.env.PUBLIC_URL}/Images/bmw-logo.png`}
                    alt=''
                    className='img logo'
                    style={{ width: '200px', display: imageLoaded.bmw ? 'block' : 'none' }}
                    loading="lazy"
                    onLoad={() => handleImageLoad('bmw')}
                />
                {imageLoaded.bmw && (<img
                    src={`${process.env.PUBLIC_URL}/Images/X7.png`}
                    alt='...'
                    className='carimg'
                    style={{ position: 'absolute', transform: 'translateX(-10%) scale(1.2) translateY(-90%)' }}
                    loading="lazy"
                />)}
            </div>
            <div className='hovereff' data-aos="flip-left">
               
                <img
                    src={`${process.env.PUBLIC_URL}/Images/audi.png`}
                    alt=''
                    className='logo'
                    style={{ height: '100px', width: '200px', marginTop: '25%', display: imageLoaded.audi ? 'block' : 'none' }}
                    loading="lazy"
                    onLoad={() => handleImageLoad('audi')}
                />
                {imageLoaded.audi && (
                    <img
                    src={`${process.env.PUBLIC_URL}/Images/A4.png`}
                    alt=''
                    className='carimg'
                    style={{ position: 'absolute', transform: 'translateX(-0%) scale(1.2) translateY(-70%)' }}
                    loading="lazy"
                />)}
            </div>
            <div className='hovereff' data-aos="flip-left">
               
                <img
                    src={`${process.env.PUBLIC_URL}/Images/mercedes.png`}
                    alt=''
                    className='img logo'
                    style={{ width: '200px', display: imageLoaded.mercedes ? 'block' : 'none' }}
                    loading="lazy"
                    onLoad={() => handleImageLoad('mercedes')}
                />
                {imageLoaded.mercedes && (
                    <img
                    src={`${process.env.PUBLIC_URL}/Images/gclass.png`}
                    alt='...'
                    className='carimg'
                    style={{ position: 'absolute', transform: 'translateX(-15%) scale(1.2) translateY(-90%)' }}
                    loading="lazy"
                />
                )}
            </div>
            <div className='hovereff' data-aos="flip-left">
                
                <img
                    src={`${process.env.PUBLIC_URL}/Images/rolls-royce.png`}
                    alt=''
                    className='img logo'
                    style={{ width: '150px', display: imageLoaded.rollsRoyce ? 'block' : 'none' }}
                    loading="lazy"
                    onLoad={() => handleImageLoad('rollsRoyce')}
                />
                {imageLoaded.rollsRoyce && (
                    <img
                    src={`${process.env.PUBLIC_URL}/Images/cullinan.png`}
                    alt='...'
                    className='carimg'
                    style={{ position: 'absolute', transform: 'translateX(-30%) translateY(-90%)' }}
                    loading="lazy"
                />
                )}
            </div>
            <div className='hovereff' data-aos="flip-left">
                
                <img
                    src={`${process.env.PUBLIC_URL}/Images/land-rover.png`}
                    alt=''
                    className='logo'
                    style={{ height: '150px', width: '200px', marginTop: '20%', display: imageLoaded.landRover ? 'block' : 'none' }}
                    loading="lazy"
                    onLoad={() => handleImageLoad('landRover')}
                />
                {imageLoaded.landRover && (
                    <img
                    src={`${process.env.PUBLIC_URL}/Images/defender.png`}
                    alt='...'
                    className='carimg'
                    style={{ position: 'absolute', transform: 'translateX(-20%) scale(1.3) translateY(-80%)' }}
                    loading="lazy"
                />
                )}
            </div>
            <div className='hovereff' data-aos="flip-left">
                
                <img
                    src={`${process.env.PUBLIC_URL}/Images/volvo.png`}
                    alt=''
                    className='img logo'
                    style={{ width: '200px', display: imageLoaded.volvo ? 'block' : 'none' }}
                    loading="lazy"
                    onLoad={() => handleImageLoad('volvo')}
                />
                {imageLoaded.volvo && (
                    <img
                    src={`${process.env.PUBLIC_URL}/Images/XC60.png`}
                    alt='...'
                    className='carimg'
                    style={{ position: 'absolute', transform: 'translateX(-20%) translateY(-100%)' }}
                    loading="lazy"
                />
                )}
            </div>
        </div>
    );
}

export default Brands;
