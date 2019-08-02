import React, { Component } from 'react';

export default class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: '',
            width: '',
            color: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (event) => {
       event.preventDefault();
        this.props.createBox(this.state);
       
       
        }

    render() {
        return (
            <form>
                <div>
                <label htmlFor='height'>Height</label>
                <input
                    type='text'
                    name='height'
                    value={this.state.height}
                    id='height'
                    onChange= {this.handleChange}>
                    </input>
                    </div>
                    <div>
                <label htmlFor='width'>Width</label>
                <input
                    type='text'
                    name='width'
                    value={this.state.width}
                    id='width'
                    onChange= {this.handleChange}></input>
                    </div>
                    <div>
                <label htmlFor='color'>Color</label>
                <input
                    type='text'
                    name='color'
                    value={this.state.color}
                    id='color'
                    onChange= {this.handleChange}></input>
                    </div>
                    
                <button type='submit' onSubmit={this.handleSubmit}>Create Box!</button>
            </form>
        )
    }
}
