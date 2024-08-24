import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';

const CarTemplate = ({ brandCars,brand }) => {

    const dispatch = useDispatch();


    let addToCart =(brandCars,brand)=>{
        dispatch({ type: 'ADD_TO_CART',payload:brandCars});
        alert(`${brand} ${brandCars.name} added to Cart Succesfully !`);
    }

    return (
        <div className="container-fluid">
            <div className="row" data-aos="fade-up">
                <div className="col-lg-6 ">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}${brandCars.path}`} alt=""  className="img-fluid" data-aos="slide-right"/>
                        <ul className="list-group text-center">
                            <li className="list-group-item text-center" style={{fontWeight:'bold'}}>{brand} {brandCars.name}</li>
                            <li className="list-group-item"><strong>Price :</strong>Rs.{brandCars.price}</li>
                            <li className="list-group-item"><strong>Category :</strong> {brandCars.category}</li>
                            <li className="list-group-item"><Button onClick={()=>addToCart(brandCars,brand)}>
                    Add to Cart
                    </Button></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="col-lg-6">
                    <h3 className="text-center m-4">Specifications</h3>
                    <table style={{width:'100%'}}>
                        <tr>
                            <th>Specification</th>
                            <th>Desciption</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{brand} {brandCars.name}</td>
                        </tr>
                        <tr>
                            <td>EPA_Classification</td>
                            <td>{brandCars.spec.EPA_Classification}</td>
                        </tr>
                        <tr>
                            <td>Drivetrain</td>
                            <td>{brandCars.spec.Drivetrain}</td>
                        </tr>
                        <tr>
                            <td>Engine_Type</td>
                            <td>{brandCars.spec.Engine_Type}</td>
                        </tr>
                        <tr>
                            <td>Displacement</td>
                            <td>{brandCars.spec.Displacement}</td>
                        </tr>
                        <tr>
                            <td>Horsepower</td>
                            <td>{brandCars.spec.Horsepower}</td>
                        </tr>
                        <tr>
                            <td>Torque</td>
                            <td>{brandCars.spec.Torque}</td>
                        </tr>
                        <tr>
                            <td>Transmission</td>
                            <td>{brandCars.spec.Transmission}</td>
                        </tr>
                        <tr>
                            <td>Fuel_Economy_in_mpg</td>
                            <td>{brandCars.spec.Fuel_Economy_in_mpg}</td>
                        </tr>
                    </table>
                    
                </div>
                
            </div>
        </div>

    );
};

export default CarTemplate;
