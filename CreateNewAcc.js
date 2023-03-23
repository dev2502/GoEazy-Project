import React, { useState } from 'react';
import './createNewAccount.css'
import logo2 from './logo2.png';
import bv_logo from './bv_logo.jpg';

function CreateNewAcc () {
  const [name, setName] = useState('');
  const [phnNum, setPhnNum] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Submitted: ${name} ${phnNum} ${password}`);
    // TODO: Handle form submission here
  }

  return (
          <>
              <div className="header">
                <div className="logo">
                  <img src={logo2} alt="Logo"/>
                </div>
                <div class="bv_logo">
                  <img src={bv_logo} alt="Logo"/>
                </div>
              </div>

              <nav className="nav_1">
                <a href="#"><img src="home.jpg"/></a>
              </nav>

              <form onSubmit={handleSubmit}>
              <label>
                Name:
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}/>
                </label>
                <label>
                  Phone Number:
                  <br></br>
                  <input
                    type="text"
                    name="phnNum"
                    value={phnNum}
                    onChange={(event) => setPhnNum(event.target.value)}
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>
                <button type="submit">Create Account</button>
                </form>
          </>

  );
}

export default CreateNewAcc;
