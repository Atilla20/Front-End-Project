import React, { Component } from 'react';
import './CompanyBtn.css';

class CompanyBtnName extends Component {
    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                <button type="button" className="company-button btn btn-default"> 
                {this.props.name}
                </button>

                <button onClick={this.props.deleteCompany.bind(this, this.props.name)} type="button" className="remove-button btn btn-default">X</button>
                </div>
            </div>
           
        );
    }
  
}
export default CompanyBtnName; 