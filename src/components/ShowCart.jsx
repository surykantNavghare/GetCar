import React from "react";
import { useSelector } from "react-redux";
import {useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
let ShowCart = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, car) => total + car.price, 0);
    const dispatch=useDispatch();
    let removeFromCart=(name)=>{
        dispatch({ type: 'REMOVE_FROM_CART',payload:{name}});
        alert(`${name} Successfully Removed!`);
    }
    let navigatePayment=()=>{
        navigate('/payment');
    }

    

    return (
        <div className="container" style={{ minHeight: '70vh' }} data-aos="fade-up">
            <div className="row mt-3">
                {/* Left Column: Card View */}
                <div className="col-lg-6" data-aos="slide-right">
                    {cart && cart.length > 0 ? (
                        cart.map((car, index) => (
                            <div key={index} className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={`${process.env.PUBLIC_URL}${car.path}`} className="img-fluid rounded-start" alt={`${car.brand} ${car.name}`} />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">{car.brand} {car.name}</h5>
                                            <p className="card-text"><strong>Category: </strong>{car.category}</p>
                                            <p className="card-text"><strong>Price: </strong>Rs.{car.price}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center align-items-center" onClick={()=>removeFromCart(car.name)}>
                                        <p><i class="fa fa-trash" aria-hidden="true" style={{fontSize:'20px'}}></i></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h3>Your cart is empty</h3>
                    )}
                </div>

                {/* Right Column: Table View */}
                <div className="col-lg-6" data-aos="slide-left">
                    {cart && cart.length > 0 ? (
                        <>
                            <h2 className="text-center">Billing Table</h2>
                            <table className="m-auto">
                                <thead>
                                    <tr>
                                        <th className="text-center">Name</th>
                                        <th className="text-center">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((car, index) => (
                                        <tr key={index}>
                                            <td>{car.brand} {car.name}</td>
                                            <td className="text-center">Rs.{car.price}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td><strong>Total</strong></td>
                                        <td className="text-center"><strong>Rs.{totalPrice}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-end col-9 mt-3">
                            <button className="btn btn-outline-secondary" onClick={()=>navigatePayment()}>Pay Now</button>
                            </div>
                        </>
                    ) : (
                        <p className="d-none">Your cart is empty</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShowCart;
