import React from 'react';

function Items(props) {
    const {itemname,url,category,isAvail} = props;
    const status = isAvail?{background:'green',color:'white'} : {background:'red',color:'white'}
    
  
  return <div className='items'>
            <h4>{itemname}</h4>
            <img src={url} style={{width:'150px',height:'170px'}} alt="error"/><br/>
            {/* <h6>Category:{category}</h6> */}
            <h6 >Status: <span style={status}>{isAvail? 'Available' : 'Not Available'}</span></h6>
         </div>

}

export default Items;
