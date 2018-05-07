import React from 'react';
import './App.css';
import AddBtn from './Components/AddBtn';
import Company from './Components/Company';


const companies = [
  {
    name: "Free People",
  },
  { 
    name: "Urban Outfitters",
  },
  {
    name:"Nike",
  }
];



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies
    };
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-10 jumbotron">
              < AddBtn/>
              <Company companies={this.state.companies} />

            </div>
        </div>
      </div>
      
    );
  }
}
