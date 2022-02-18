import React,{useState,useEffect,useRef} from 'react';
import FormContent from './FormContent';
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';

function FormArea(props) {
let {input,setInput,item,setItem} = props;
 
    //  const saveData = (event)=>{
    //     event.preventDefault();
    //     let newItem = item;
    //     newItem.push(input);
    //     setItem(newItem);
    //     setInput({name:'',email:'',number:'',address:''});
    //  }
    const { register,handleSubmit, formState: { errors } } = useForm();
     const onSubmit = (event)=>{
      let newItem = item;
      newItem.push(input);
      setItem(newItem);
      setInput({name:'',email:'',number:'',address:''});
       }

       const history = useHistory(); 
    const onHandleClick =()=>{
      console.log("deleted")
      setItem([]);
      window.location.reload();
    }

    
  return <div>
        <div className='formArea' >
          <form className="mx-1 mx-md-4">

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input type="text" {...register("name",{ required: true,minLength: 5 })} name="name"  value={input.name} onChange={ event=>setInput({...input,name:event.target.value})} id="form3Example1c" className="form-control" required />
                <label className="form-label" for="form3Example1c">Your Name  <span className='error'>{errors.name && <i>: Please check the Name</i>}</span></label>
              </div>
             
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input type="email"  {...register("email",{ required: true,pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} name="email" value={input.email}  onChange={event=>setInput({...input,email:event.target.value})} id="form3Example3c" className="form-control" required/>
                <label className="form-label" for="form3Example3c">Your Email  <span className='error'>{errors.email && <i>: Please check the email</i>}</span></label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input type="text"  {...register("number",{ required: true,pattern:/^\d{10}$/,minLength:10,maxLength:10 })} name="number" value={input.number}  onChange={event=>setInput({...input,number:event.target.value})} id="form3Example4c" className="form-control" required/>
                <label className="form-label" for="form3Example4c">Number  <span className='error'> {errors.number && <i>: Please check the number</i>}</span></label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <textarea id="form3Example4cd"  {...register("address",{ required: true })}  name="address" value={input.address}  onChange={event=>setInput({...input,address:event.target.value})}  className="form-control" required/>
                <label className="form-label" for="form3Example4cd">Address   <span className='error'>{errors.address && <i>: Please check the address</i>}</span></label>
              </div>
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button type="button" onClick={handleSubmit(onSubmit)} className="btn btn-primary btn-lg"  disabled={item.length===1}>Add</button>
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
