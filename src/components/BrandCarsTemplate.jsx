import Allcars from '../JSON/Allcars.json'
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import {useDispatch } from "react-redux";
import { useEffect } from 'react';

let PageTemplate = ({ brand }) => {

  const brandData = Allcars.find(brandName=>brandName.brand===brand);
  const cars = brandData ? brandData.cars : [];
  const navigate = useNavigate();
 
  const dispatch=useDispatch();

   const redirectPage = (name) => {
    navigate(`/${brand}/${name}`);
  }

  let addToCart = (car) => {
    dispatch({ type: 'ADD_TO_CART',payload:car});
    alert(`${car.brand} ${car.name} added to cart successfully!`);
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component loads
  }, []);

  return (
    <>
      <div className="container" data-aos="fade-up">
      <div className="row d-flex justify-content-center mt-3">
          <h2>{brand}</h2>
        </div>
        <div className="row d-flex justify-content-around">
          {
            cars && cars.map((car, index) => (
              <div className="card m-3" style={{width: "18rem"}}>
                <img src={`${process.env.PUBLIC_URL}${car.path}`}  className="card-img-top" alt="..." onClick={()=>redirectPage(`${car.name}`)}/>
                <div className="card-body">
                  <h5 className="card-title">{brand} {car.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Price :</strong>Rs.{car.price}</li>
                  <li className="list-group-item"><strong>Category :</strong> {car.category}</li>
                  <li className="list-group-item"><Button onClick={()=>addToCart(car)}>
                    Add to Cart
                    </Button></li>
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}


export default PageTemplate;
