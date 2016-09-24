import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnitDisplay extends Component {

  render() {

    if(!this.props.unit) {
      return <div className="unitBg"><div className="unitDisplay">
        Select a unit!!
      </div></div>
    }

    return (
    <div className="unitBg"> 
      <div className="unitDisplay">
        {this.props.unit}
      </div>
    </div> 
    )
  }
}

function mapStateToProps(state) {
  return {
    unit: state.activeUnit
  };
}

module.exports = connect(mapStateToProps)(UnitDisplay);