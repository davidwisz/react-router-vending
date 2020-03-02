import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import './Chips.css';

function Chips() {
  // const [bagCount, setBagCount] = useState(0);
  const [chips, setChips] = useState([]);

  function getRandom() {
    return Math.random() * 100;
  }
  const addChip = () => {
    // setBagCount(oldBagCount => oldBagCount + 1);
    let chip = {
      x: getRandom() + '%',
      y: getRandom() + '%',
  
    }
    setChips(chips => {
      //get position values
      return [...chips, chip];
    })
  }

  return (
    <div className="Chips">
      {chips.map(chip => {
        return <div key={`${chip.x}-${chip.y}`} className="chip" style={{ top: chip.y, left: chip.x }}></div>
      })}
      <div style={{zIndex: 2}}>
        <NavBar />
        <p>CHIIIIIIIIPS!</p>
        <h2>Bags eaten: {chips.length}</h2>
        <button onClick={addChip}>EAT A BAG</button><br />
        <Link to="/">Back to Vending Machine</Link>
      </div>
    </div>
  );
}

export default Chips;