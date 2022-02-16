import React from 'react';
import Label from './Label';
import './ProductList.css'

function ProductList(props) {
    const {itemname,url,isAvail,category,onToCart,id} = props;
    const status = isAvail?{background:'green',color:'white'} : {background:'red',color:'white'}
    const buttonStyle = isAvail? false : true
   
  return <div className='productList'>
            <h4>{itemname}</h4>
            <img src={url} style={{width:'150px',height:'170px'}} alt="error"/><br/>
            <button type="button" onClick={()=>{onToCart(id)}} class="btn btn-primary" disabled={buttonStyle}>Add to Cart</button>
            <h6 >Status: <span style={status}>{isAvail? 'Available' : 'Not Available'}</span></h6>
                
         </div>;
}

export default ProductList;
