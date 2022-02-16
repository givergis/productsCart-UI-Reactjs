import Navbar from "./Components/Navbar";
import {BrowserRouter as Router,Route,Switch,useHistory} from 'react-router-dom';
import Footer from './Components/Footer'
import Profile from "./Components/Profile";
import Shop from "./Components/Shop";
import Checkout from "./Components/Checkout";
import Products from "./Components/Products";
import FormArea from "./Components/FormArea";
import React,{ useState ,useEffect } from "react";



export const AddressContext = React.createContext();
export const CheckoutContext = React.createContext();
function App() {
 
  const[dataItemCopy,setDataItemCopy] = useState([]);

  const [inputMain,setInputMain] = useState({name:'',email:'',number:'',address:''});
  const [itemMain,setItemMain] = useState([]);

  const[valueMain,setValueMain] = useState([]);

 
  return (
    <Router>
      <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path="/">
         <Products/>
         </Route>
         <Route path="/products">
           <Products />
         </Route>
         <Route path="/profile">
           <Profile input1={inputMain} item1={itemMain} setInput1={setInputMain} setItem1={setItemMain}/>
           </Route>
           <Route path="/shop">
             <Shop  input1={itemMain} value={valueMain} setValue={setValueMain} diCopy={dataItemCopy} sdiCopy={setDataItemCopy}/>
           </Route>
           <Route path="/checkout">
             <CheckoutContext.Provider value={dataItemCopy}>
             <AddressContext.Provider value={itemMain}>
             <Checkout sdiCopy={setDataItemCopy}/>
             </AddressContext.Provider>
             </CheckoutContext.Provider>
             </Route>
           <Route path="/test">
             <FormArea/>
           </Route>
        </Switch>
      <Footer/>
     </div>

    </Router>
    
  );
}

export default App;
