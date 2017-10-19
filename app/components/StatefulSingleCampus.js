import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import AllStudents from './AllStudents';
import Update from './Update';
import Delete from './Delete';

export default class StatefulSingleCampus extends Component{
    constructor(){
        super();
        this.state = {
            campus: {},
            students: []
        };
        this.getCampus = this.getCampus.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }

    getCampus(campusId){
        axios.get(`./api/campuses/${campusId}`)
        .then(res => res.data)
        .then(campus => {
            let students = campus.students;
            this.setState({campus, students})
        });
    }

    handleFormSubmit(evt){
        evt.preventDefault();
        const campusId = this.state.campus.id;
        const name = evt.target.name.value;
        const image = evt.target.image.value;
        const updatedCampusInfo = {}
        if(name) updatedStudentInfo.name = name;
        if(image) updatedStudentInfo.image = image;
        axios.put(`./api/campuses/${campusId}`, updatedCampusInfo)
        .then(res => res.data)
        .then(campus => this.setState({campus}))
    }

    handleDeleteButton(){
        const campusId = this.state.campus.id;
        axios.delete(`./api/campuses/${campusId}`)
            .then(res => res.data)
            // .then(campus => {
            //     this.props.history.push('/campuses')
            // })
    }

    componentDidMount(){
        console.log(this.props.history)
        
        const campusId = this.props.match.params.campusId;
        if(campusId){
            this.getCampus(campusId)
        } else {
            this.props.history.push('/campuses')
        }
        
    }

    componentWillReceiveProps(nextProps){
        if(this.nextProps.match.params.campusId){
            const campusId = this.props.match.params.campusId;
            const nextcampusId = this.nextProps.match.params.campusId;
            if(campusId !== nextcampusId) this.getCampus(nextcampusId);
        }
    }

    render(){
        const {campus} = this.state
        const {students} = this.state
        return (
            <div>
                <div className="singlecampus">
                    <h1>CAMPUS</h1>
                    <div key={campus.id}>
                        <div className="campusname">{campus.name}</div>
                        <img src={campus.image}/>
                    </div>
                </div>
                {
                    !!students.length ? <div><AllStudents students={students}/></div> : null
                }
                <div className="UpdateAndDeleteForm">
                    <h3>Update Campus Info</h3>
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
                            <button type="submit" className="btn btn-success">Update Campus</button>
                        </div>
                    </form>
                    <div className="DeleteButton">
                        <h4>Delete {campus.name}?</h4>
                        <button onClick={this.handleDeleteButton} name="deleteButton" type="submit" className="btn btn-success">Delete Campus</button>
                    </div>
                </div>
            </div>
        )
    }
}



// <SingleCampus campus={campus}/>