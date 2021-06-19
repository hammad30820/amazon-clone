import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
               <>
                   <p>subtotal ({basket.length} items): <strong>{value}</strong> </p>
                   <small className="subtotal_gift">
                       <input type="checkbox"></input>This order contains a gift</small>
               </>
            )}
            decimalScale={2}              
            value={getBasketTotal(basket)} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'₹'}  
            />
            <button onClick={e => history.push("/payment")}>Procced to checkout</button>
           
              
        </div>
    )
}

export default Subtotal
