import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import SingleStudent from './SingleStudent';

export default class StatefulSingleStudent extends Component{
    constructor(){
        super();
        this.state = {
            student: {}
        };
    }

    componentDidMount(){
        const studentId = this.props.match.params.studentId;
        axios.get(`./api/student/${studentId}`)
            .then(res => res.data)
            .then(student => this.setState({student}));
    }

    componentWillReceiveProps(nextProps){
        const studentId = this.props.match.params.studentId;
        const nextstudentId = this.nextProps.match.params.studentId;
        if(studentId === nextstudentId) return false;
    }

    render(){
        const {student} = this.state
        return (
            <SingleStudent student={student}/>
        )
    }
}