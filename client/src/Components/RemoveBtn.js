import React, { Component } from 'react';
import './RemoveBtn.css';

class RemoveBtn extends Component {
    render() {
        return(
            <div>
                 <button type="button" className="remove-button btn btn-default">X</button>
            </div>

        );
    }
}

export default RemoveBtn;