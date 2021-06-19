import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,price,title,rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM-BASKET",
            id:id,
        })
    }
    return (
        <div ClassName="checkoutproduct">
            <img className="checkoutproduct_image" src={image} />
        
            <div className="checkoutproduct_info" >
            <p className="checkoutproduct_tittle">{title}</p>
            <p className="checkoutproduct_price">
                <strong>₹</strong>
                <strong>{price}</strong>
            </p>
            <div className="checkoutproduct_rating">
            {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                    ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
        </div>
    )
}

export default CheckoutProduct

