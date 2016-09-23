import React, { Component } from 'react';
import { render } from 'react-dom';

//component > redux = container
import { connect } from 'react-redux';

class UnitList extends Component {

  renderUnits() {
    return this.props.units.map((unit, i) => {
      return (
        <div key={i}> {Object.keys(unit)[0]} </div>
      );
    });
  }

  render() {
    // let unitNum = Object.keys(this.props.currentUnit)[0];
    return (
      <div className="actualUnit">
        {this.renderUnits()} 
      </div>
    )
  }
}

//whatever is returned will show up as props inside of unitlist
function mapStateToProps(state) {
  return {
    units: state.units
  };
}
//export container
module.exports = connect(mapStateToProps)(UnitList);