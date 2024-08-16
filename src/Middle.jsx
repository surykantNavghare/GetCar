let Middle = () =>
{
    return <>
    <div className='display'>
                <div className='card' data-aos="flip-left">
                    <img src={`${process.env.PUBLIC_URL}/Images/certified.png`} className='card-img-top img' alt='...' style={{ height: '250px',width:'250px',margin:'auto'}} />
                    <div className='card-body'>
                        <h5 className='card-title'>ISO certified</h5>
                        <p className='card-text'>As an ISO-certified company, we adhere to the highest standards of quality and excellence in everything we do. Our commitment to these rigorous standards ensures that every product and service we offer meets or exceeds industry expectations, providing you with reliability and peace of mind.</p>
                    </div>
                </div>
                <div className='card' data-aos="flip-left">
                    <img src={`${process.env.PUBLIC_URL}/Images/premium.png`}   className='card-img-top' alt='...' style={{ height: '250px', width: '250px',margin:'auto' }} />
                    <div className='card-body'>
                        <h5 className='card-title'>Premium Brands</h5>
                        <p className='card-text'>Discover a curated selection of premium brands that stand for quality, luxury, and innovation. From renowned global names to exclusive niche labels, our collection is designed to meet the highest standards and exceed your expectations.</p>
                    </div>
                </div>
                <div className='card' data-aos="flip-left">
                    <img src={`${process.env.PUBLIC_URL}/Images/expert.png`} className='card-img-top' alt='...' style={{ height: '250px', width: '250px',margin:'auto' }} />
                    <div className='card-body'>
                        <h5 className='card-title'>Checked by experts</h5>
                        <p className='card-text'>Every product in our collection is meticulously inspected by our team of experts. We ensure that each item meets our strict quality standards, so you can shop with confidence knowing you're getting the best.</p>
                    </div>
                </div>
                <div className='card' data-aos="flip-left">
                    <img src={`${process.env.PUBLIC_URL}/Images/rating.png`} className='card-img-top' alt='...' style={{ height: '250px', width: '250px',margin:'auto' }} />
                    <div className='card-body'>
                        <h5 className='card-title'>High Safety Rating</h5>
                        <p className='card-text'>Our vehicles are designed with your safety in mind, boasting top-tier safety ratings across the board. Equipped with the latest safety technologies, you can drive with confidence knowing that you and your loved ones are well-protected.</p>
                    </div>
                </div>
            </div>
    </>
}
export default Middle;