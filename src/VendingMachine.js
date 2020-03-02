import React from 'react';
import './VendingMachine.css'
import NavBar from './NavBar';

function VendingMachine() {

  return (
    <div className="VendingMachine">
      <NavBar />
      <p className="VendingMachine-greeting">Hello, I am a vending machine, what would you like to eat?</p>
    </div>
  )
}
export default VendingMachine;