import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers'
// import Dashboard from './Components/dashboard.js';

//components
import UnitDisplay from './Containers/unit_display';
import UnitList from './Containers/unit_list';
// import CommentBox from './Components/commentForm.js';
// import ImageUpload from './Components/imageupload.js'

const createStoreWithMiddleware = applyMiddleware()(createStore);


class Dashboard extends Component {

  render() {
    return (
      <div>
        <h1 className="title">Unit Dashboard</h1>
        <div className="units">
          <UnitList />
        </div>  
        <div className="container">
          <UnitDisplay />
        </div> 
      </div>
    );
  }
}



render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Dashboard />
  </Provider>
  , document.getElementById('app'));

        // <div className="units" >
        // {this.state.currentUnit.map( (unit, i) => 
        //   <div onClick={this.unitSelector.bind(this, i)}> <UnitSelector currentUnit={unit} key={i}/> </div>
        // )}
        // </div>
        // <div className="container">
        //   <UnitDisplay display={this.state.displayed} currentUnit={this.state.currentUnit[this.state.displayed]}/>
        // </div>