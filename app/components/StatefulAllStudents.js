import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import AllStudents from './AllStudents';

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
        console.log("STATEFUL ALL STUDENTS, list of STUDENTS: ", students)
        return (
            <div>
                <h2>All Students</h2>
                <div className="row">
                    {
                    students.map(student => {
                        return <div key={student.id}>
                            <div className="studentname">{student.name}</div>
                            <Link to={`/students/${student.id}`}>
                                <img src={student.image}/>
                            </Link>
                            <div className="studentemail">{student.email}</div>
                        </div>
                    })
                    }
                </div>
            </div>
        )
    }
}

// was trying to have a dumb component hooked up with each stateful components but finding info on the props messed me up lol ugh 
// <AllStudents students={students}/>