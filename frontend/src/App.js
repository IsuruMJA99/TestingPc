import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Nav from './Component/Nav';
import Homepage from './Component/Homepage';
import Order from './Component/Order';
import Purchase from './Component/Purchase';
import Contact from './Component/Contact';
import Quotation from './Component/Quotation';
import Report from './Component/Report';
import Register from './Component/Register';
import Login from './Component/Login';
import Forgotpassword from './Component/Forgotpassword';

 function App() {
  return (
    <div>
      <div className="App">
        <Nav/>
      </div>
        <Routes>
          <Route exact path ='/home' element={<Homepage/>}/>
          <Route exact path ='/order' element={<Order/>}/>
          <Route exact path ='/purchase' element={<Purchase/>}/>
          <Route exact path ='/contact' element={<Contact/>}/>
          <Route exact path ='/quotation' element={<Quotation/>}/>
          <Route exact path ='/report' element={<Report/>}/>
          <Route exact path ='/forgotpassword' element={<Forgotpassword/>}/>
          <Route exact path ='/register' element={<Register/>}/>
          <Route exact path ='/login' element={<Login/>}/>
        </Routes>
      
     
    </div>
  );
}
 
export default App;