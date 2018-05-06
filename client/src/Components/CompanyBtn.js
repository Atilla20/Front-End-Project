import React, { Component } from 'react';
import "./CompanyBtn.css";

class CompanyBtn extends Component {
    render() {
        return (
            <div>
                <button type="button" className="company-button btn btn-default"> Company</button>
            </div>
        );
    }
}

export default CompanyBtn;