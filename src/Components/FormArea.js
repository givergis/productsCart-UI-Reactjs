import React,{useState,useEffect,useRef} from 'react';
import FormContent from './FormContent';

function FormArea(props) {
let {input,setInput,item,setItem} = props;
 
     const saveData = (event)=>{
        event.preventDefault();
        console.log(input.name);
        let newItem = item;
        newItem.push(input);
        setItem(newItem);
        setInput({name:'',email:'',number:'',address:''});
     }
     const onHandleClick =()=>{
      console.log("deleted")
      setItem([]);
    }
 
    
  return <div>
        <div className='formArea' >
          <form className="mx-1 mx-md-4" >

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input type="text" name="name"  value={input.name} onChange={ event=>setInput({...input,name:event.target.value})} id="form3Example1c" className="form-control" required />
                <label className="form-label" for="form3Example1c">Your Name</label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input type="email" name="email" value={input.email}  onChange={event=>setInput({...input,email:event.target.value})} id="form3Example3c" className="form-control" required/>
                <label className="form-label" for="form3Example3c">Your Email</label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input type="text"name="number" value={input.number}  onChange={event=>setInput({...input,number:event.target.value})} id="form3Example4c" className="form-control" required/>
                <label className="form-label" for="form3Example4c">Number</label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <textarea id="form3Example4cd" name="address" value={input.address}  onChange={event=>setInput({...input,address:event.target.value})}  className="form-control" required/>
                <label className="form-label" for="form3Example4cd">Address</label>
              </div>
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button type="button" className="btn btn-primary btn-lg" onClick={saveData} disabled={item.length===1}>Add</button>
            </div>

          </form>
          </div>
          {
            item.map((data)=>{
            return  <FormContent onDelete={onHandleClick} key={data.number} item={data} name={data.name} email={data.email} number={data.number} address={data.address}/>
            })
          }       
            
          </div>;        

}

export default FormArea;
