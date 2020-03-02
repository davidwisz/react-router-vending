import React from 'react';
import { Link } from "react-router-dom";
import NavBar from './NavBar';

function Sardines() {
  return (
    <div className="Sardines">
      <NavBar />
      <p>HA SARDINES! YOU DON'T EAT THEM THEY EAT YOU</p>
      <Link to="/">Back to Vending Machine</Link> 
    </div>
  )
}

export default Sardines;