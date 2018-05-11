import React, { Component } from 'react';
import './CompanyBtn.css';

class CompanyBtnName extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return(
            <div> 
                {
                    !this.props.recycled ? (
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <button type="button" className="company-button btn btn-default"> 
                                {this.props.name}
                                </button>
                                <button 
                                    className="remove-button btn btn-default"
                                    onClick={this.props.recycleCompany.bind(this, this.props.name)} 
                                    type="button">X
                                </button>
                            </div>
                        </div>
           
                    ) :
                    (
                        <div className="recycled">
                            <button type="button" className="company-button btn btn-default">
                                {this.props.name}
                            </button>
                            <button
                                className="recycled-remove-button btn btn-default"
                                onClick= {this.props.deleteCompany.bind(this, this.props.name)}
                                type="button"> X
                            </button>
                        </div>
                    )
                }
                </div>
           );
        }
  
}
export default CompanyBtnName; 