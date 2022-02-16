import React from 'react';
import FormArea from './FormArea';
import FormContent from './FormContent';
import './Profile.css'

function Profile(props) {

const {input1,item1,setInput1,setItem1} = props;
 
 
  return <div className='profileMain'>
           <h2>Profile</h2>

            <FormArea input={input1} item={item1} setInput={setInput1} setItem={setItem1}/>                   
            
           
            

          

        </div>;
}

export default Profile;
