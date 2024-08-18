import React, { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";

const services = [
    {
        title: "Service",
        imgSrc: `${process.env.PUBLIC_URL}/Images/service.png`,
        blurhash: "LEMtN;V@xvbv~qt7M{Io?cNGMx%L",
        description: "At GetCar, we provide exceptional service tailored to your needs. Our expert team is here to assist with product support, technical help, and any questions you may have, ensuring a smooth and satisfying experience."
    },
    {
        title: "Painting",
        imgSrc: `${process.env.PUBLIC_URL}/Images/paint.png`,
        blurhash: "LQMH7Aoe_4tR?bM{tRj[~qxuITWA",
        description: "Enhance your space with our professional painting services. We deliver high-quality finishes for interiors and exteriors, ensuring a fresh, vibrant look for any area."
    },
    {
        title: "Insurance",
        imgSrc: `${process.env.PUBLIC_URL}/Images/insurance.png`,
        blurhash: "LINKF|jr~KkXkFxoofE9^[ofRQV@",
        description: "Protect what matters most with our comprehensive insurance solutions. From home and auto to health and business coverage, we offer tailored plans to meet your needs and ensure peace of mind."
    },
    {
        title: "Repair",
        imgSrc: `${process.env.PUBLIC_URL}/Images/repair.png`,
        blurhash: "L8L#FH~9}:0$~UMwDi%M=rX90L00",
        description: "Get your equipment and appliances back in top shape with our expert repair services. We handle a wide range of repairs efficiently and effectively, ensuring minimal downtime and reliable solutions."
    },
    {
        title: "Business",
        imgSrc: `${process.env.PUBLIC_URL}/Images/business.png`,
        blurhash: "LJM5%%j[-;j[%$j[%1j[P;j[%gfQ",
        description: "Elevate your business with our tailored solutions and expert services. From strategic consulting to operational support, we provide the tools and insights you need to drive growth and achieve your goals."
    },
    {
        title: "Secure",
        imgSrc: `${process.env.PUBLIC_URL}/Images/secure.png`,
        blurhash: "LqK-z%o#~UV=Rij]t8f5-oadNHo$",
        description: "Ensure peace of mind with our top-notch security solutions. We offer comprehensive protection for your business and personal assets, providing the expertise and technology needed to keep your environment safe and secure."
    }
];

const Service = () => {
    const [loaded, setLoaded] = useState({});

    const handleImageLoad = (index) => {
        setLoaded((prev) => ({ ...prev, [index]: true }));
    };

    return (
        <>
            <div className="text border-bottom mb-2" data-aos="fade-up">
                <h1 className="text">Our Services</h1>
            </div>
            <div className="row" data-aos="fade-up">
                <div className="display-service">
                    {services.map((service, index) => (
                        <div className="card" style={{ width: "18rem" }} data-aos="flip-left" key={index}>
                            {!loaded[index] && (
                                <BlurhashCanvas
                                    hash={service.blurhash}
                                    width={288}
                                    height={200}
                                    punch={1}
                                    style={{ margin: 'auto', display: 'block' }}
                                />
                            )}
                            <img
                                src={service.imgSrc}
                                className="card-img-top"
                                alt={service.title}
                                style={{
                                    height: '200px',
                                    width: '200px',
                                    margin: 'auto',
                                    display: loaded[index] ? 'block' : 'none'
                                }}
                                loading="lazy"
                                onLoad={() => handleImageLoad(index)}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Service;
