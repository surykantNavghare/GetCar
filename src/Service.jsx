import React from "react";

let Service = () => {
    return <>
        <div className="text border-bottom mb-2">
            <h1 className="text">Our Services</h1>
        </div>
        <div className="row">
            <div className="display-service">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={`${process.env.PUBLIC_URL}/Images/service.png`} className="card-img-top" alt="..." style={{height:'200px',width:'200px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Service</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={`${process.env.PUBLIC_URL}/Images/paint.png`} className="card-img-top" alt="..." style={{height:'200px',width:'200px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Painting</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={`${process.env.PUBLIC_URL}/Images/insurance.png`} className="card-img-top" alt="..." style={{height:'200px',width:'200px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Insurance</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={`${process.env.PUBLIC_URL}/Images/repair.png`} className="card-img-top" alt="..." style={{height:'200px',width:'200px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Repair</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={`${process.env.PUBLIC_URL}/Images/business.png`} className="card-img-top" alt="..." style={{height:'200px',width:'200px',margin:'auto'}}/>
                    <div class="card-body">
                        <h5 className="card-title">Business</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={`${process.env.PUBLIC_URL}/Images/secure.png`} className="card-img-top" alt="..." style={{height:'200px',width:'200px',margin:'auto'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Secure</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                   
                </div>
            </div>
        </div>

    </>
}
export default Service;