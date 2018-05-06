import React, { Component } from 'react';
import './AddBtn.css';

class AddBtn extends Component {
    render() {
        return(
            <div className="custom-search">
                <form>
                    <input onChange={this.props.handleNameChange} type="text" placeholder="Add a company..." className="add-btn"></input>
                    <button onClick={this.props.handleFormSubmit} className="search-add" type="submit"></button>
                </form>
            </div>

        );
    }
}

export default AddBtn;