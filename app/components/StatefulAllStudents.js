import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AllStudents from './AllStudents';

export default class StatefulAllStudents extends Component{
    constructor(){
        super();
        this.state = {
            students: []
        };
    }

    componentDidMount(){
        axios.get('./api/students')
            .then(res => res.data)
            .then(students => this.setState({students}));
    }

    render(){
        const {students} = this.state
        // console.log("STATEFUL ALL STUDENTS, list of STUDENTS: ", students)
        return (
            <AllStudents students={students}/>
        )
    }
}

