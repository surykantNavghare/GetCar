let Brands = () => {
    return <>
        <div className='display2'>
            <div className='hovereff' data-aos="flip-left">
                <img src={`${process.env.PUBLIC_URL}/Images/bmw-logo.png`} alt='' className='img logo' style={{ width: '200px' }} loading="lazy"/>
                <img src={`${process.env.PUBLIC_URL}/Images/X7.png`}  alt='...' className='carimg' style={{ position: 'absolute', transform: 'translateX(-80%) scale(1.2) translateY(-5%)' }} />
            </div>
            <div className='hovereff' data-aos="flip-left">
                <img src={`${process.env.PUBLIC_URL}/Images/audi.png`} alt='' className='logo' style={{ height: '100px', width: '200px', marginTop: '25%' }} />
                <img src={`${process.env.PUBLIC_URL}/Images/A4.png`} alt='' className='carimg' style={{ position: 'absolute', transform: 'translateX(-80%) scale(1.2)' }} />
            </div>
            <div className='hovereff' data-aos="flip-left">
                <img src={`${process.env.PUBLIC_URL}/Images/mercedes.png`} alt='' className='img logo' style={{ width: '200px' }} />
                <img src={`${process.env.PUBLIC_URL}/Images/gclass.png`} alt='...' className='carimg' style={{ position: 'absolute', transform: 'translateX(-80%) scale(1.2)' }} />
            </div>
            <div className='hovereff' data-aos="flip-left">
                <img src={`${process.env.PUBLIC_URL}/Images/rolls-royce.png`} alt='' className='img logo' style={{ width: '150px' }} />
                <img src={`${process.env.PUBLIC_URL}/Images/cullinan.png`} alt='...' className='carimg' style={{ position: 'absolute', transform: 'translateX(-80%)' }} />
            </div>
            <div className='hovereff' data-aos="flip-left">
                <img src={`${process.env.PUBLIC_URL}/Images/land-rover.png`} alt='' className='logo' style={{ height: '150px', width: '200px', marginTop: '20%' }} />
                <img src={`${process.env.PUBLIC_URL}/Images/defender.png`} alt='...' className='carimg' style={{ position: 'absolute', transform: 'translateX(-80%) scale(1.5)' }} />
            </div>
            <div className='hovereff' data-aos="flip-left">
                <img src={`${process.env.PUBLIC_URL}/Images/volvo.png`} alt='' className='img logo' style={{ width: '200px' }} />
                <img src={`${process.env.PUBLIC_URL}/Images/XC60.png`} alt='...' className='carimg' style={{ position: 'absolute', transform: 'translateX(-80%)' }} />
            </div>
        </div>
    </>
}
export default Brands;