import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import App from './App';

export default class NewStudent extends Component{
    constructor(){
        super();
        this.state = {
            newStudent: {}
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(evt){
        evt.preventDefault();
        const name = evt.target.name.value;
        const email = evt.target.email.value;
        const image = evt.target.image.value;
        axios.post('/api/students', {name, email, image})
            .then(res => res.data)
            .then(newStudent => this.setState(newStudent))
            // .then(() => history.pushState('/api/students'))
    }

    render(){
        const {newStudent} = this.props
        return (
            <div>
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
                    <div>
                        <button type="submit" className="btn btn-success">Add New Student</button>
                    </div>
                </form>
            </div>
        )
    }
}