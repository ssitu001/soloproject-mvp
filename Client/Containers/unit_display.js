import React, { Component } from 'react';
import { render } from 'react-dom';

const UnitDisplay = (props) => {
    let itemToDisplay;
      for (let key in props.currentUnit) {
        itemToDisplay = props.currentUnit[key];
      }
  return (
   <div className="unitBg"> 
    <div className="unitDisplay">
      {itemToDisplay}
    </div>
   </div> 
  )
}

module.exports = UnitDisplay;