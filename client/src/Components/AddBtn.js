import React, { Component } from 'react';
import './AddBtn.css';

class AddBtn extends Component {

    render() {
        return(
            <div className="custom-search">
                <form>
                    <input type="text" placeholder="Add a company..." className="add-btn" ref="createInput"/>
                    <button onClick={this.handleAdd.bind(this)} className="search-add" type="submit"></button>
                </form>
            </div>

        );
    }

    handleAdd(event) {
        event.preventDefault();
        this.props.addCompany(this.refs.createInput.value);
        this.refs.createInput.value = '';
        
    }
}

export default AddBtn;