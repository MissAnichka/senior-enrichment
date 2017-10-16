import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import AllCampuses from './AllCampuses';

export default class StatefulAllCampuses extends Component{
    constructor(){
        super();
        this.state = {
            campuses: []
        };
    }

    componentDidMount(){
        axios.get('./api/campuses')
            .then(res => res.data)
            .then(campuses => this.setState({campuses}));
    }

    render(){
        const {campuses} = this.state
        return (
            <AllCampuses campuses={campuses}/>
        )
    }
}