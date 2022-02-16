import React from 'react';
import './Checkout.css'
import CheckoutContent from './CheckoutContent';
import FormContent from './FormContent';
import FormArea from './FormArea';
function Checkout(pros) {
 
  const{sdiCopy} = pros;
  return <div className='checkoutMain'>
            <h2>Checkout</h2>

           <CheckoutContent  sdC={sdiCopy}/>
          
         </div>;
}

export default Checkout;
