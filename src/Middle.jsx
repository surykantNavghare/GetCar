import React, { useState } from 'react';
import { BlurhashCanvas } from 'react-blurhash';

let Middle = () => {
    const [imageLoaded, setImageLoaded] = useState({
        certified: false,
        premium: false,
        expert: false,
        rating: false,
    });

    const handleImageLoad = (image) => {
        setImageLoaded(prevState => ({
            ...prevState,
            [image]: true
        }));
    };

    return (
        <div className='display'>
            <div className='card' data-aos="flip-left">
                {!imageLoaded.certified && (
                    <BlurhashCanvas
                        hash="LRN,SXo}tmRP-+V@RjtRu6s:oIWC"
                        width={250}
                        height={250}
                        punch={1}
                    />
                )}
                <img
                    src={`${process.env.PUBLIC_URL}/Images/certified.png`}
                    className='card-img-top img'
                    alt='ISO Certified'
                    style={{ height: '250px', width: '250px', margin: 'auto', display: imageLoaded.certified ? 'block' : 'none' }}
                    loading="lazy"
                    onLoad={() => handleImageLoad('certified')}
                />
                <div className='card-body'>
                    <h5 className='card-title'>ISO Certified</h5>
                    <p className='card-text'>
                        As an ISO-certified company, we adhere to the highest standards of quality and excellence in everything we do. Our commitment to these rigorous standards ensures that every product and service we offer meets or exceeds industry expectations, providing you with reliability and peace of mind.
                    </p>
                </div>
            </div>

            <div className='card' data-aos="flip-left">
                {!imageLoaded.premium && (
                    <BlurhashCanvas
                        hash="LgM7DSod?wahs;M{fkxu.TWCRPox"
                        width={250}
                        height={250}
                        punch={1}
                    />
                )}
                <img
                    src={`${process.env.PUBLIC_URL}/Images/premium.png`}
                    className='card-img-top'
                    alt='Premium Brands'
                    style={{ height: '250px', width: '250px', margin: 'auto', display: imageLoaded.premium ? 'block' : 'none' }}
                    loading="lazy"
                    onLoad={() => handleImageLoad('premium')}
                />
                <div className='card-body'>
                    <h5 className='card-title'>Premium Brands</h5>
                    <p className='card-text'>
                        Discover a curated selection of premium brands that stand for quality, luxury, and innovation. From renowned global names to exclusive niche labels, our collection is designed to meet the highest standards and exceed your expectations.
                    </p>
                </div>
            </div>

            <div className='card' data-aos="flip-left">
                {!imageLoaded.expert && (
                    <BlurhashCanvas
                        hash="LGN^h@Oq~W#n%#S#nirr~Wr@D$Se"
                        width={250}
                        height={250}
                        punch={1}
                    />
                )}
                <img
                    src={`${process.env.PUBLIC_URL}/Images/expert.png`}
                    className='card-img-top'
                    alt='Checked by Experts'
                    style={{ height: '250px', width: '250px', margin: 'auto', display: imageLoaded.expert ? 'block' : 'none' }}
                    loading="lazy"
                    onLoad={() => handleImageLoad('expert')}
                />
                <div className='card-body'>
                    <h5 className='card-title'>Checked by Experts</h5>
                    <p className='card-text'>
                        Every product in our collection is meticulously inspected by our team of experts. We ensure that each item meets our strict quality standards, so you can shop with confidence knowing you're getting the best.
                    </p>
                </div>
            </div>

            <div className='card' data-aos="flip-left">
                {!imageLoaded.rating && (
                    <BlurhashCanvas
                        hash="LBNAk-4.-=E14.%M%MWB~qxu9Fxa"
                        width={250}
                        height={250}
                        punch={1}
                    />
                )}
                <img
                    src={`${process.env.PUBLIC_URL}/Images/rating.png`}
                    className='card-img-top'
                    alt='High Safety Rating'
                    style={{ height: '250px', width: '250px', margin: 'auto', display: imageLoaded.rating ? 'block' : 'none' }}
                    loading="lazy"
                    onLoad={() => handleImageLoad('rating')}
                />
                <div className='card-body'>
                    <h5 className='card-title'>High Safety Rating</h5>
                    <p className='card-text'>
                        Our vehicles are designed with your safety in mind, boasting top-tier safety ratings across the board. Equipped with the latest safety technologies, you can drive with confidence knowing that you and your loved ones are well-protected.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Middle;
