import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import App from './App';

export default class NewCampus extends Component{
    constructor(){
        super();
        this.state = {
            newCampus: {}
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(){
        evt.preventDefault();
        const name = evt.target.name.value;
        const image = evt.target.image.value;
        axios.post('/api/campuses', {name, image})
            .then(res => res.data)
            .then(newCampus => {
                this.setState(newCampus)
                //redirect or clear form...
            })
    }

    render(){
        const {addCampus} = this.props
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label className="form-control-label">Name</label>
                        <input type="text" className="form-control" id="formGroupNewCampusName" placeholder="Campus Name"/>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">Image URL</label>
                        <input type="text"className="form-control" id="formGroupNewCampusImage" placeholder="Campus Picture URL"/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success">Add New Campus</button>
                    </div>
                </form>
            </div>
        )
    }
}