import React, { Component } from 'react';
import './App.css';
import Companies from './Components/Companies';
import AddBtn from './Components/AddBtn';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-10 jumbotron">
              < AddBtn />
              <Companies />
              <Companies />
              <Companies />

            </div>
        </div>
      </div>
    );
  }
}

export default App;
