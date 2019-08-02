import React, { Component } from 'react';
import './Box.css';

export default class Box extends Component {
    

   

    render() {
        return (
            <div>
            <div className='box'
                 style={{height: `${this.props.height}em`,
                         width: `${this.props.width}em`, 
                         backgroundColor: `${this.props.color}`}}>
             </div> 
             <button onClick={this.handleClick}>X</button>
             </div>
        )
    }
}
