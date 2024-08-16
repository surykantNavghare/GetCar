import React from "react";

let Footer = () =>
{
    return <>
    <footer className="bg-body-tertiary text-center text-lg-start border-top mt-4">
            <div className="p-4 bg-3">
                <div className="row font-1">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">GetCar</h5>
                        <p>
                        At GetCar, we are committed to providing top-notch services and products. Our dedication to excellence ensures that every experience with us is a positive one. Whether you're here to browse, shop, or learn, we're here to support you every step of the way.
                        </p>
                       
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact</h5>
                        <p className="d-flex justify-content-center">
                        <i className="fab fa-twitter p-3" style={{fontSize:'30px'}}></i>
                        <i className="fab fa-whatsapp p-3" style={{fontSize:'30px'}}></i>
                        <i className="fas fa-envelope p-3" style={{fontSize:'30px'}}></i>
                        <i className="fab fa-linkedin-in p-3" style={{fontSize:'30px'}}></i>
                        <i class="fa-solid fa-phone p-3" style={{fontSize:'30px'}}></i>
                        </p>
                    </div>
                </div>
            </div>
            <div className='text-center p-3 bg-1 font-3'>
            © 2024 GetCar. All Rights Reserved.
            Terms of Service | Privacy Policy
                <p className='font-3' href="#">GetCar.com</p>
            </div>
        </footer>
    </>
}
export default Footer;