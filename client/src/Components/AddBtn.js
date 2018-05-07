import React, { Component } from 'react';
import './AddBtn.css';

class AddBtn extends Component {
    render() {
        return(
            <div className="custom-search">
                <form>
                    <input type="text" placeholder="Add a company..." className="add-btn"></input>
                    <button className="search-add" type="submit"></button>
                </form>
            </div>

        );
    }
}

export default AddBtn;