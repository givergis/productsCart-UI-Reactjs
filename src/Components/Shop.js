import React,{useState,useEffect} from 'react';
import './Shop.css'
import Items from './Items';
import ProductList from './Shop/ProductList';
import {useHistory} from 'react-router-dom';

function Shop(props) {

const {input1,value,valueMain,setValue,diCopy,sdiCopy} = props;


useEffect(() => {
    fetch('./data.json')
    .then((data)=>{
      return data.json();
    })
    .then((data)=>{
      setValue(data);
    })

},[]);
  
const history = useHistory();

const onActionCart = (id)=>{
  // console.log(id)
  const newValue = value.filter((item)=>{
    if(id === item.id){
      return item.id === id
    }
      return false
  });
   sdiCopy(newValue);
    if(input1.length === 0) {
        alert("Update your Profile & Proceed to Checkout")
        history.push("profile");
    }
    else{
        alert("Item added to cart")
        history.push("checkout");
         }  

 }
  
  return <div className='shopMain'>
      <h2>Shop</h2>

      <div className='itemslist'>
                  {
                      value.map((item)=>{
                        console.log("shop array list");
                      return <ProductList key={item.id} id={item.id}itemname={item.itemname} url={item.url} category={item.category} isAvail={item.isAvail} onToCart={onActionCart} /> 
                  
                    })
                  }
                
                  </div>
        </div>;
}

export default Shop;
