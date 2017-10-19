import React, {Component} from 'react';
import { Link, HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Update from './Update';
import Delete from './Delete';
// import StatefulSingleCampus from './StatefulSingleCampus';
// import SingleStudent from './SingleStudent';

export default class StatefulSingleStudent extends Component{
    constructor(){
        super();
        this.state = {
            student: {},
            campus: {}
        };
        this.getStudent = this.getStudent.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }

    getStudent(studentId){
        axios.get(`./api/students/${studentId}`)
        .then(res => res.data)
        .then(student => this.setState({student, campus: student.campus}));
    }

    //this is responsible for updating backend .
    handleFormSubmit(evt){
        evt.preventDefault();
        const studentId = this.state.student.id;
        const name = evt.target.name.value;
        const email = evt.target.email.value;
        const image = evt.target.image.value;
        const updatedStudentInfo = {}
        if(name) updatedStudentInfo.name = name;
        if(email) updatedStudentInfo.email = email;
        if(image) updatedStudentInfo.image = image;
        axios.put(`./api/students/${studentId}`, updatedStudentInfo)
        .then(res => res.data)
        .then(student => this.setState({student}))
    }

    handleDeleteButton(){
        const studentId = this.state.student.id;
        axios.delete(`./api/students/${studentId}`)
            .then(res => res.data)
            .then(student => {
                this.props.history.push('/students')
            })
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
        const {campus} = this.state
        return (
            <div>
                <div className="singlestudent">
                    <h1>STUDENT</h1>
                    <div className="eachstudent" key={student.id}>
                        <div className="studentname">{student.name}</div>
                        <div className="studentemail">{student.email}</div>
                        <div className="studentimage"><img src={student.image}/></div>
                        <div className="studentcampusId">{student.campusId}</div>
                    </div>
                </div>
                <div className="singlecampus">
                    <h2>CAMPUS</h2>
                    <div key={campus.id}>
                        <Link to={`/campuses/${campus.id}`}><div className="campusname">{campus.name}</div></Link>
                        <Link to={`/campuses/${campus.id}`}><div className="campusimage"><img src={campus.image}/></div></Link>
                    </div>
                </div>
                <div className="UpdateAndDeleteForm">
                    <h3>Update Student Info</h3>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label className="form-control-label">Name</label>
                            <input name="name" type="text" className="form-control" id="formGroupNewStudentName" placeholder="Student Name"/>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Email</label>
                            <input name="email" type="email" className="form-control" id="formGroupNewStudentEmail" placeholder="Student Email"/>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Image URL</label>
                            <input name="image" type="text" className="form-control" id="formGroupNewStudentImageURL" placeholder="Image URL"/>
                        </div>
                        <div className="UpdateButton">
                            <button type="submit" className="btn btn-success">Update Student</button>
                        </div>
                    </form>
                    <div className="DeleteButton">
                        <h4>Delete {student.name}?</h4>
                        <button onClick={this.handleDeleteButton} name="deleteButton" type="submit" className="btn btn-success">Delete Student</button>
                    </div>
                </div>
               
            </div>
        )
    }
}
