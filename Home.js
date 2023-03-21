import React from "react";
import logo from "./logo2.png";
import bvlogo from "./bvlogo.jpg";
import "./App.css";
function Home()
{
  return(
    <>
    <div class="header" height="10%" width="10%">
            <table class="logo" >
             <tr> 
              <td> <img src={logo} alt="Logo" height="10%" width="45%"/></td>
              <td> <img src={bvlogo} alt="bvlogo" height="10%" width="50%" id="bvlogo"/>  </td>
            </tr>
            </table>
    </div>
    <div className="container1">
    <table className="t1">
      <tr> 
        <td> <button   class="b1"> ADD </button></td>
        <td> <button  class="b1"> Edit </button> </td>
        <td> <button  class="b1" > Delete </button>  </td>
        <td> <button  class="b1" >Search  </button></td>
      </tr>
    </table>
    </div>
    </>
  )
}
export default Home;