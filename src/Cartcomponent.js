//import { render } from "@testing-library/react";
import { useState } from "react";
import './Cartdata.css'

const StarRating = () => {
    const [rating, setRating] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

function Cartcomponent(props) {
    console.log(props)
   return<div key={props.Cart.id} className="col mb-5">
                <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{top: '0.5 rem', right: '0.5rem'}}>{props.Cart.product}</div>
            <img className="card-img-top" src={props.Cart.image} alt="..." />
             <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.Cart.productname}</h5>
                    <StarRating/>    
                    <span className="text-muted text-decoration-line-through">{props.Cart.offerprice}</span> 
                    {props.Cart.price}
                </div>
            </div>
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
           {/* <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={()=>{handleAddToCart(props)}}>Add to cart</a></div> */}
           {/* <button disabled= {props.cartitems.some(obj => obj.id === props.cart.id)} onClick={ () => props.handleAddToCart(props.cart.id)} class="btn btn-primary">Add to Card</button> */}
            </div>
        </div>
    </div>

}
export default Cartcomponent


