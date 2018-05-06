import React, { Component } from 'react';
import './App.css';
import AddBtn from './Components/AddBtn';
import API from "./utils/API";
import CompanyBtn from './Components/CompanyBtn';

class App extends Component {

  state = {
    companies: []
};

componentDidMount() {
    this.loadCompanies();
}

loadCompanies = () => {
    API.getCompanies(this.state.name)
      .then((res) => {
        this.setState({companies: res.data.response.docs });
      });
}

showCompanies = () => {
    return this.state.companies.map(search => (
        <CompanyBtn
        _id={search._id}
        name={search._name}
        loadCompanies={this.loadCommpanies}
        />
    ));
}

//handles user input
handleNameChange = (event) => {
  this.setState({name: event.target.value});
}

handleFormSubmit = (event) => {
  event.preventDefault();
  API.getCompanies(this.state.name)
    .then((res) => {
        this.setState({companies: res.data.response.docs })
    });
}


  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-10 jumbotron">
              < AddBtn
               handleNameChange={this.handleNameChange}
               showCompanies={this.showCompanies}
             />
              <CompanyBtn
                showCompanies={this.showCompanies}
              
              />

            </div>
        </div>
      </div>
    );
  }
}

export default App;
