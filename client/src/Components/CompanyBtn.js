import React, { Component } from 'react';
import './CompanyBtn.css';
import RemoveBtn from './RemoveBtn';

class CompanyBtnName extends Component {
    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                <button type="button" className="company-button btn btn-default"> 
                {this.props.name}
                </button>

                 < RemoveBtn />
                </div>
            </div>
           
        );
    }
}
export default CompanyBtnName; 