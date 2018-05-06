import React, { Component } from 'react';
import './Companies.css';
import CompanyBtn from './CompanyBtn';
import RemoveBtn from './RemoveBtn';

class Companies extends Component {
    render() {
        return(

            <div className="panel panel-default">
                <div className="panel-body">
                    < CompanyBtn />
                    < RemoveBtn />

                </div>
            </div>

        );
    }
}

export default Companies;