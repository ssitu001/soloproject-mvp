import React, { Component } from 'react';
import { render } from 'react-dom';

//component > redux = container
import { connect } from 'react-redux';
import { selectUnit } from '../Actions/index';
import { bindActionCreators } from 'redux';

class UnitList extends Component {
  renderUnit() {
    return this.props.units.map((unit, i) => {
      let unitNum = Object.keys(unit)[0];
      let unitDesc = unit[unitNum];

      return (
        <div 
        key={i}
        onClick={() => this.props.selectUnit(unitDesc)}
        > 
        {unitNum} 
        </div>
      );
    });
  }

  render() {
    return (
      <div className="actualUnit">
        {this.renderUnit()} 
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

//anything return from this function will end up as props on the unitList container
function mapDispatchToProps(dispatch) {
  //when selectUnit is called, the result should be passed to all of the reducers
  return bindActionCreators({ selectUnit }, dispatch);
}

//export container
module.exports = connect(mapStateToProps, mapDispatchToProps)(UnitList);