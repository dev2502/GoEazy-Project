import React from "react";
import logo from "./logo2.png";
import bvlogo from "./bvlogo.jpg";
import LoginPage from './Pages/LoginPage';
import CustomerLogin from './Pages/CustomerLogin';
import ShopKeeperLogin from './Pages/ShopKeeperLogin';
import CreateNewAcc from'./Pages/CreateNewAcc';
import "./App.css";
import {useState} from "react";


function App()
{
  <>
    <LoginPage />
    <CustomerLogin />
    <ShopKeeperLogin />
    <CreateNewAcc />
  </>
}
export default App;
