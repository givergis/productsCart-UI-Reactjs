import React, { useState } from 'react';
import './Products.css'
import Items from './Items';

function Products() {
 
  const items =[{itemname:"The Complete C",isAvail:true,url:"https://images-na.ssl-images-amazon.com/images/I/71mqdKj2O9L.jpg",category:"Books"},
  {itemname:"Table-Fan",isAvail:true,url:"https://media.croma.com/image/upload/v1605332407/Croma%20Assets/Small%20Appliances/Fans/Images/8988739010590.png",category:"Electronics"},
  {itemname:"Puma T-shirt",isAvail:true,url:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/518946/03/fv/fnd/IND/fmt/png",category:"Cloths"},
  {itemname:"Networks",isAvail:false,url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347462821l/166190.jpg",category:"Books"},
  {itemname:"Bulb",isAvail:false,url:"https://5.imimg.com/data5/SM/HL/MY-2/12w-cfl-bulb-500x500.jpg",category:"Electronics"},
  {itemname:"Polo T-shirt",isAvail:true,url:"https://www.mydesignation.com/wp-content/uploads/2020/02/petrol-blue-polo-tshirt-image-mydesignation-.jpg",category:"Cloths"},
  {itemname:"Java Pro",isAvail:true,url:"https://5.imimg.com/data5/XX/YM/MY-4078569/java-programming-book-500x500.png",category:"Books"},
  {itemname:"Nike T-shirt",isAvail:false,url:"https://image.shutterstock.com/image-photo/medellin-colombia-february-21-2019-260nw-1320511361.jpg",category:"Cloths"},
  {itemname:"Wall-Fan",isAvail:true,url:"http://jvelectric.co.in/stores/image/cache/catalog/polstar%20wall%20fan-450x450.jpg",category:"Electronics"},
  {itemname:"Addidas T-shirt",isAvail:true,url:"https://i.pinimg.com/originals/30/af/e1/30afe1219726bc9a9e08ad2a679eaea3.jpg",category:"Cloths"},
  {itemname:"Ironbox",isAvail:false,url:"https://rukminim1.flixcart.com/image/416/416/jnyxd3k0/iron/y/f/e/impex-electric-iron-box-ib-18-original-imafagpyf8fhmuxa.jpeg?q=70",category:"Electronics"},
  {itemname:"Data Structure",isAvail:true,url:"https://images-na.ssl-images-amazon.com/images/I/51mDmYHm31L._SX379_BO1,204,203,200_.jpg",category:"Books"}]

  const[array,setArray] = useState(items); // React Hooks- useState

  const listChange = (event)=>{
    const value = event.target.value;
    const newItems = items.filter((item)=>{
      if(value === 'All Categories'){
          return true
      }
      if(value === 'Books'){
        return item.category === 'Books'
      }
      if(value === 'Cloths'){
        return item.category === 'Cloths'
     }
     if(value === 'Electronics'){
      return item.category === 'Electronics'
     }   
       return false   
    });
       setArray(newItems);
  }
  return <div className='homeMain'>
          <h2>Products</h2>
            <div className='selectbox'>
              <select onChange={listChange} className="form-select" aria-label="Default select example">
                <option value="All Categories">All Categories</option>
                <option value="Books">Books</option>
                <option value="Cloths">Cloths</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>
                <div className='itemslist'>
                  {
                    array.map((value)=>{
                      console.log("array list")
                      return <Items key={value.itemname} itemname={value.itemname} url={value.url} category={value.category} isAvail={value.isAvail}/>
                    })
                  }
                  </div>
         </div>;
}
export default Products;
