import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

export default class NewCampus extends Component{
    constructor(){
        super();
        this.state = {
            
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(){
        evt.preventDefault();
        
    }

    render(){
        const {addCampus} = this.props
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                </form>
            </div>
        )
    }
}