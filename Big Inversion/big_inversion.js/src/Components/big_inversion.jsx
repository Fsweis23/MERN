import React, { Component } from 'react';

class BigInversion extends Component{
    constructor(props){
        super(props);
        this.state = {
            age_shown: this.props.age
        };
    }

    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.color}</p>
            </div>
        );
    }
}

export default BigInversion;