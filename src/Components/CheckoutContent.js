import React,{useContext,useState} from 'react';
import { AddressContext,CheckoutContext } from '../App';
import Items from './Items';

function CheckoutContent(props) {
   
    const{sdC}=props;

    const val = useContext(AddressContext);
    let cartValue = useContext(CheckoutContext);

    const intialValue = 1;
    const[cartNum,setCartNum] = useState(intialValue);
    const increment = ()=>{
        setCartNum(cartNum+1)
    }
    const decrement = ()=>{
        setCartNum(cartNum-1)
    }

    const onDelete = () =>{
       sdC([]);
        setCartNum(0);
    }

    const onCheckout = () =>{
        if(cartNum === 0){
            alert("Add atleast one item!!")  
        } else{
            alert("Successfully Ordered!!!")
        sdC([]);  
        }
      
    }

    const decrementDisable = intialValue>cartNum ? true : false;

    const hideLabel = cartValue == 0 ? true : false;
     
  return    <div className='ctContent'>
            <div className='shoppingCart'>
            <h4>Shopping Cart :<span hidden={hideLabel}>{cartNum} Item</span> </h4>
                     <hr/> 
            {
          cartValue.map((items)=>{
                return <div>
                   
                    
                    <div className='cartItemMain'>
                        <div className='cartItem'>
                        <h5>{items.itemname}</h5>
                         <img src={items.url} style={{width:'150px',height:'170px'}} alt="error"/><br/>
                        </div>
                        <div className='cartItemButton'>
                            <button onClick={decrement} disabled={decrementDisable} >-</button>
                            <label><h4>{cartNum}</h4></label>
                            <button onClick={increment} style={{marginLeft:"5px"}}>+</button>
                        </div>
                        <div className='cartItemCancel'>
                            <button onClick={onDelete} type="button" class="btn btn-danger btn-lg" >Remove</button>
                        </div>
                        
                    </div>

                </div>
          })
      }
                   
                  
                </div>
                <div className='summary'>
                        <h4><center>Summary</center></h4>
                {
                   val.map((value)=>{
                        return <div className='summaryContent'>
                            <label ><h5>Total Items: <span hidden={hideLabel}>{cartNum}</span></h5></label><br/><br/>
    
                            <h4>Shipping Address:</h4>
                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <label class="form-label" for="form3Example1c">Name:</label>
                                    <input type="text" id="form3Example1c" class="form-control" placeholder={value.name}  disabled/>
                                </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <label class="form-label" for="form3Example1c">Address</label>
                                    <textarea id="form3Example4cd" class="form-control" placeholder={value.address}  disabled></textarea>
                                </div>
                                </div>
                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="button" onClick={()=>{onCheckout()}} class="btn btn-primary btn-lg" disabled={hideLabel} >CHECKOUT</button>
                            </div>
                        
                        </div>
                        
                   
    
                    })
                }
                 </div>
               
            </div>
}

export default CheckoutContent;
