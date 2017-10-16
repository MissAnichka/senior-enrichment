import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import SingleCampus from './SingleCampus';

export default class StatefulSingleCampus extends Component{
    constructor(){
        super();
        this.state = {
            campus: {}
        };
    }

    componentDidMount(){
        const campusId = this.props.match.params.campusId;
        axios.get(`./api/campus/${campusId}`)
            .then(res => res.data)
            .then(campus => this.setState({campus}));
    }

    componentWillReceiveProps(nextProps){
        const campusId = this.props.match.params.campusId;
        const nextcampusId = this.nextProps.match.params.campusId;
        if(campusId === nextcampusId) return false;
    }

    render(){
        const {campus} = this.state
        return (
            <SingleCampus campus={campus}/>
        )
    }
}