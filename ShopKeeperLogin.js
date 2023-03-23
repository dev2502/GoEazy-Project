import React from 'react';
import './shopKeeper_login.css';
import logo2 from './logo2.png';
import bv_logo from './bv_logo.jpg';
import home from './home.jpg';

function ShopKeeperLogin () {
  return (
    <>
      <div>
      <div className="header">
          <div className="logo">
            <img src={logo2} alt="Logo"/>
          </div>
          <div class="bv_logo">
            <img src={bv_logo} alt="Logo"/>
          </div>
      </div>

        <nav className="nav_1">
          <a href="#"><img src={ home }/></a>
        </nav>

        <div className="login-box">
          <h1>Login as Shop Owner</h1>
          <form>
            <label htmlFor="username">ID:</label>
            <input type="text" id="username" name="username" placeholder="Enter username"/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter password"/>
            <input type="submit" value="Login"/>
          </form>
        </div>

        <footer>
           © 2023 Team GoEazy. All rights reserved.
        </footer>
      </div>
    </>
  )
}

export default ShopKeeperLogin ;
