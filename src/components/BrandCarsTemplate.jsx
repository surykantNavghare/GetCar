import Allcars from '../JSON/Allcars.json'
import { useNavigate } from 'react-router-dom';
let PageTemplate = ({ brand }) => {

  const brandData = Allcars.find(brandName=>brandName.brand===brand);
  const cars = brandData ? brandData.cars : [];
  const navigate = useNavigate();

  const redirectPage=(name)=>{
    navigate(`/${brand}/${name}`);
}


  return (
    <>
      <div className="container" data-aos="fade-up">
      <div className="row d-flex justify-content-center mt-3">
          <h2>{brand}</h2>
        </div>
        <div className="row d-flex justify-content-around">
          {
            cars && cars.map((car, index) => (
              <div className="card m-3" style={{width: "18rem"}} onClick={()=>redirectPage(`${car.name}`)}>
                <img src={`${process.env.PUBLIC_URL}${car.path}`}  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{brand} {car.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Price :</strong>Rs.{car.price}</li>
                  <li className="list-group-item"><strong>Category :</strong> {car.category}</li>
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
