// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
// import './login.css';
// import logo2 from './logo2.png';
// import bv_logo from './bv_logo.jpg';

// function LoginPage () {
//   return (
//     <>
//       <Router>
//         <div className="header">
//             <div className="logo">
//               <img src={logo2} alt="Logo"/>
//             </div>
//             <div className="bv_logo">
//               <img src={bv_logo} alt="Logo"/>
//             </div>
//           </div>

//           <div className="container">
//             <h2>SIGN IN</h2>
      
//               <div className="button-container">  
//                   {/* <a href="customer_login.js" target="_blank" class="button-customer">Customer Login</a>
//                   <Link to= "CustomerLogin.js" className="button-customer"> Customer Login </Link>
//                   <br /><a href="#" class="button-shopkeeper" target= "_blank" >Shopkeeper Login</a> */}
//                   <Link to="/CustomerLogin" className="button-customer"> Customer Login </Link>
//                   <Link to="/" className="button-customer"> Shopkeeper Login </Link>
//               </div>
      
              

//               <div className="hr_tag">
//                 <hr className="hr-left"/>
//                 <span>or</span>
//                 <hr className="hr-right"/>
//               </div>

//               <Link to="/" className="create_new_text"> Create new Account </Link>

//               {/* <Switch>
//                 <Route path='/CustomerLogin' exact>
//                   <CustomerLogin />
//                 </Route>
//               </Switch> */}

//           </div>
//       </Router>
//     </>
//   );
// }

// export default LoginPage ;


import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import './login.css';
import logo2 from './logo2.png';
import bv_logo from './bv_logo.jpg';
import CustomerLogin from './CustomerLogin'; // Import the CustomerLogin component


function LoginPage () {
  return (
    <>
      {/* <Router> */}
        <div className="header">
            <div className="logo">
              <img src={logo2} alt="Logo"/>
            </div>
            <div className="bv_logo">
              <img src={bv_logo} alt="Logo"/>
            </div>
          </div>

          <div className="container">
            <h2>SIGN IN</h2>
      
              <div className="button-container">  
                  {/* <Link to="/CustomerLogin" target="_blank" className="button-customer"> Customer Login </Link> {/* Update this line */}
                  {/* <Link to="/" className="button-customer"> Shopkeeper Login </Link> */}
                  <a href="customer_login.js" target="_blank" class="button-customer">Customer Login</a>
                  <br /><a href="#" class="button-shopkeeper" target= "_blank" >Shopkeeper Login</a>
              </div>
      
              

              <div className="hr_tag">
                <hr className="hr-left"/>
                <span>or</span>
                <hr className="hr-right"/>
              </div>

              {/* <Link to="/" className="create_new_text"> Create new Account </Link> */}
              <a href="#" className="create_new_text" target= "_blank" > Create new Account </a>

              {/* <Switch>
                <Route path='/CustomerLogin' exact>
                  <CustomerLogin />
                </Route>
              </Switch> Add this section */}
          </div>
      {/* </Router> */}
    </>
  );
}

export default LoginPage;
