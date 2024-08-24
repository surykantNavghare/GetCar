import React from "react";

let Service = () => {
    return <>
        <div className="text border-bottom mb-2" data-aos="fade-up">
            <h1 className="text">Our Services</h1>
        </div>
        <div className="row" data-aos="fade-up">
            <div className="display-service">
                <div className="card" style={{ width: "18rem" }} data-aos="flip-left">
                    <img src={`${process.env.PUBLIC_URL}/Images/service.png`} className="card-img-top p-1" alt="..." style={{height:'150px',width:'150px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Service</h5>
                        <p className="card-text">At GetCar, we provide exceptional service tailored to your needs. Our expert team is here to assist with product support, technical help, and any questions you may have, ensuring a smooth and satisfying experience.</p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }} data-aos="flip-left">
                    <img src={`${process.env.PUBLIC_URL}/Images/paint.png`} className="card-img-top p-1" alt="..." style={{height:'150px',width:'150px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Painting</h5>
                        <p className="card-text">Enhance your space with our professional painting services. We deliver high-quality finishes for interiors and exteriors, ensuring a fresh, vibrant look for any area.</p>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }} data-aos="flip-left">
                    <img src={`${process.env.PUBLIC_URL}/Images/insurance.png`} className="card-img-top p-1" alt="..." style={{height:'150px',width:'150px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Insurance</h5>
                        <p className="card-text">Protect what matters most with our comprehensive insurance solutions. From home and auto to health and business coverage, we offer tailored plans to meet your needs and ensure peace of mind.</p>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }} data-aos="flip-left">
                    <img src={`${process.env.PUBLIC_URL}/Images/repair.png`} className="card-img-top p-1" alt="..." style={{height:'150px',width:'150px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Repair</h5>
                        <p className="card-text">Get your equipment and appliances back in top shape with our expert repair services. We handle a wide range of repairs efficiently and effectively, ensuring minimal downtime and reliable solutions.</p>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }} data-aos="flip-left">
                    <img src={`${process.env.PUBLIC_URL}/Images/business.png`} className="card-img-top p-1" alt="..." style={{height:'150px',width:'150px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Business</h5>
                        <p className="card-text">Elevate your business with our tailored solutions and expert services. From strategic consulting to operational support, we provide the tools and insights you need to drive growth and achieve your goals.</p>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }} data-aos="flip-left">
                    <img src={`${process.env.PUBLIC_URL}/Images/secure.png`} className="card-img-top p-1" alt="..." style={{height:'150px',width:'150px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Secure</h5>
                        <p className="card-text">Ensure peace of mind with our top-notch security solutions. We offer comprehensive protection for your business and personal assets, providing the expertise and technology needed to keep your environment safe and secure.</p>

                    </div>
                   
                </div>
            </div>
        </div>

    </>
}
export default Service;