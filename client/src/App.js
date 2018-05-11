import React from 'react';
import './App.css';
import AddBtn from './Components/AddBtn';
import Company from './Components/Company';
import _ from 'lodash';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [
        {
          name: "Free People",
          recycled: false
        },
        {
          name: "Urban Outfitters", 
          recycled: false
        },
        {
          name: "Nike",
          recycled: false
        }
      ]
    };
  }

  addCompany = (name) => {
    this.state.companies.push({
      name,
      recycled: false
    });
    this.setState({companies: this.state.companies});
  }

  recycleCompany(name) {
    let companies = [...this.state.companies];
    companies = companies.map(c => {
      if(c.name === name) {
        c.recycled = true;
      }
      return c;
    });
    this.setState({ companies: companies });
  }

  deleteCompany(nameToDelete) {
    _.remove(this.state.companies, company => company.name === nameToDelete);
    this.setState({ companies: this.state.companies });
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-10 jumbotron">
              < AddBtn addCompany={this.addCompany.bind(this)}/>
              <Company 
              companies={this.state.companies} 
              recycleCompany={this.recycleCompany.bind(this)}
              deleteCompany={this.deleteCompany.bind(this)}
              />

            </div>
        </div>
      </div>
      
    );
  }

  addCompany= (name) => {
    this.state.companies.push({
      name
    });
    this.setState({companies: this.state.companies});

  }

  deleteCompany(nameToDelete) {
      _.remove(this.state.companies, company => company.name === nameToDelete);
      this.setState({ companies: this.state.companies });
    
  }
}
