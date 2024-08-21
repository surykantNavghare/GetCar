import React from "react";

let About = () => {
    return <>
            <h1 className='text' data-aos="fade-up">ABOUT US</h1>
            <div className='row' data-aos="fade-up">
            <div className="about-containt">
                <div data-aos="flip-left">
                    <h4>History</h4>
                    <p>Founded with a vision of excellence, GetCar has grown from a small startup into a leading force in the industry. Our journey began with a commitment to innovation, quality, and customer satisfaction, values that continue to drive us today.</p>
                    <p>Over the years, we have faced challenges and celebrated milestones that have shaped our path forward. From our humble beginnings to our expansion into new markets, our story is one of dedication, perseverance, and growth. Our success is a testament to the trust and loyalty of our customers, as well as the hard work and passion of our team.</p>
                    <p>As we look to the future, we remain focused on delivering top-quality products and services, staying true to our roots while embracing new opportunities. We are proud of our history and excited for what lies ahead, as we continue to make a positive impact in our industry and beyond.</p>
                </div>
                <div data-aos="flip-left">
                    <h4>Mission</h4>
                    <p>At GetCar, our mission is to deliver exceptional value through innovative solutions and unparalleled service. We are dedicated to meeting the evolving needs of our customers while maintaining the highest standards of quality and integrity. By embracing creativity and technology, we drive advancements in our industry and strive to exceed expectations. We aim to build lasting trust with our clients through transparency, reliability, and excellence, while empowering our team to achieve their best. Our commitment to these principles guides every aspect of our work and fuels our ambition to be a leader in our field, making a positive impact and setting new benchmarks for success.</p>
                   

                </div>
                <div data-aos="flip-left">
                    <h4>Vision</h4>
                    <p>At GetCar, our vision is to be a global leader in our industry by pioneering innovative solutions that shape the future. We aspire to set the standard for excellence and integrity, continually pushing the boundaries of what’s possible. Our goal is to create lasting value for our customers, employees, and communities through forward-thinking strategies and sustainable practices. By fostering a culture of creativity and collaboration, we aim to drive progress and make a meaningful impact, ensuring that our company remains at the forefront of industry advancements while delivering exceptional results.</p>
                </div>
            </div>
            </div>
            <div className="row my-5" data-aos="fade-up">
            <div id="why">
                <h4>Why GetCar ?</h4>
                <ul style={{padding:'20px'}}>
                    <li className="m-2"><strong>Extensive Inventory:</strong> From the latest models to certified pre-owned vehicles, we offer a wide range of cars to suit every need and preference.</li>
                    <li className="m-2"><strong>Transparent Pricing:</strong> No hidden fees, no surprises. What you see is what you pay. We believe in honest pricing that gives you the best value for your money.</li>
                    <li className="m-2"><strong>Easy Financing Options:</strong> We work with top lenders to provide you with competitive financing options, making it easier than ever to drive away in your dream car.</li>
                    <li className="m-2"><strong>Expert Guidance:</strong> Our experienced sales team is here to help you every step of the way. Whether you need advice on the best model for your needs or assistance with the buying process, we’re here to support you.</li>
                    <li className="m-2"><strong>Quality Assurance:</strong> Every car in our inventory undergoes a thorough inspection to ensure it meets our high standards of quality and reliability.</li>
                </ul>
            </div>
            </div>
    </>
}
export default About;