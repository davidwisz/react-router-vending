import React from 'react';
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import './Soda.css';

function Soda() {
  return (
    <div className="Soda">
      <NavBar />
      <p>HA SODA! OMFG SUGAR!!!</p>
      <Link to="/">Back to Vending Machine</Link> 
    </div>
  )
}

export default Soda;