import React from 'react';

function FormContent(props) {
    const{name,email,number,address,item,onUpdate,onDelete} = props;

   
     
    
  return <div className='formContent'>
                
            <div class="d-flex flex-row align-items-center mb-4">
            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
            <div class="form-outline flex-fill mb-0">
                <label class="form-label" for="form3Example1c">Name:</label>
                <input type="text" id="form3Example1c" class="form-control" placeholder={name}  disabled/>
            </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-4">
            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
            <div class="form-outline flex-fill mb-0">
                <label class="form-label" for="form3Example1c">Email:</label>
                <input type="text" id="form3Example1c" class="form-control" placeholder={email}  disabled/>
            </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-4">
            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
            <div class="form-outline flex-fill mb-0">
                <label class="form-label" for="form3Example1c">Number:</label>
                <input type="text" id="form3Example1c" class="form-control" placeholder={number}  disabled/>
            </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-4">
            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
            <div class="form-outline flex-fill mb-0">
                <label class="form-label" for="form3Example1c">Address</label>
                <textarea id="form3Example4cd" class="form-control" placeholder={address}  disabled/>
            </div>
            </div>
            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="button" onClick={()=>{onUpdate()}} class="btn btn-primary btn-lg"  disabled={item.length===0}>Edit</button>
            <button type="button" onClick={()=>{onDelete()}} class="btn btn-primary btn-lg" style={{marginLeft:"10px"}}  disabled={item.length===0}>Delete</button>
            </div>
    

         </div>;
}

export default FormContent;
