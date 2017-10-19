import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import App from './App';

export default class NewStudent extends Component {
    constructor() {
        super();
        this.state = {
            newStudent: {},
            campuses: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => this.setState({ campuses }))
    }

    handleFormSubmit(evt) {
        evt.preventDefault();
        const name = evt.target.name.value;
        const email = evt.target.email.value;
        const image = evt.target.image.value;
        const campusId = evt.target.choosecampus.value;
        const newStudentInfo = {}
        if (name) newStudentInfo.name = name;
        if (email) newStudentInfo.email = email;
        if (image) newStudentInfo.image = image;
        if (campusId) newStudentInfo.campusId = campusId;
        console.log(campusId)
        axios.post('/api/students', newStudentInfo)
            .then(res => res.data)
            .then(newStudent => {
                this.setState({ newStudent })
                this.props.history.push('/students')
            })
    }

    render() {
        const { newStudent } = this.props
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label className="form-control-label">Name</label>
                        <input name="name" type="text" className="form-control" id="formGroupNewStudentName" placeholder="Student Name" />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">Email</label>
                        <input name="email" type="email" className="form-control" id="formGroupNewStudentEmail" placeholder="Student Email" />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">Image URL</label>
                        <input name="image" type="text" className="form-control" id="formGroupNewStudentImageURL" placeholder="Image URL" />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">Campus</label>
                        <select name="choosecampus" className="form-control">
                            {
                                this.state.campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success">Add New Student</button>
                    </div>
                </form>
            </div>
        )
    }
}

//would like to make this a separate student form when I get a chance..