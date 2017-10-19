import React, {Component} from 'react';
import { Link, HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
// import SingleStudent from './SingleStudent';

export default class StatefulSingleStudent extends Component{
    constructor(){
        super();
        this.state = {
            student: {}
        };
        this.getStudent = this.getStudent.bind(this);
    }

    getStudent(studentId){
        axios.get(`./api/students/${studentId}`)
        .then(res => res.data)
        .then(student => this.setState({student}));
    }

    componentDidMount(){
        const studentId = this.props.match.params.studentId;
        this.getStudent(studentId)
    }

    componentWillReceiveProps(nextProps){
        const studentId = this.props.match.params.studentId;
        const nextstudentId = this.nextProps.match.params.studentId;
        if(studentId !== nextstudentId) this.getStudent(nextstudentId);
    }

    render(){
        const {student} = this.state
        console.log("STATEFUL SINGLE STUDENT, PROPS: ", this.props)
        return (
            <div>
                <div className="singlestudent">
                    <div key={student.id}>
                        <div className="studentname">{student.name}</div>
                        <img src={student.image}/>
                    </div>
                </div>

                <button type="submit" className="btn btn-success">Update Student</button>
                <Update student={student}/>
                <Delete student={student}/>
            </div>
        )
    }
}

// <SingleStudent student={student}/>