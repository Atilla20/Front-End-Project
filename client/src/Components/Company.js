import React, { Component } from 'react';
import "./Company.css";
import CompanyBtn from './CompanyBtn';
import _ from 'lodash';


class Company extends Component {

    renderCompanies() {
        return _.map(this.props.companies, (company, index) => <CompanyBtn key={ index } {...company} />);

    }

    render() { 
        return (
                <div>
                    {this.renderCompanies()}
                </div>
           
        );
    }
}

export default Company;