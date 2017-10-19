import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import AllCampuses from './AllCampuses';
import StatefulSingleCampus from './StatefulSingleCampus';

export default class StatefulAllCampuses extends Component{
    constructor(){
        super();
        this.state = {
            campuses: []
        };
    }

    componentDidMount(){
        axios.get('./api/campuses')
            .then(res => res.data)
            .then(campuses => this.setState({campuses}));
    }

    render(){
        const {campuses} = this.state
        console.log("STATEFUL ALL CAMPUSES, list of campuses: ", campuses)
        return (
            <div>
                <h2>All Campuses</h2>
                    <div className="row">
                    {
                    campuses.map(campus => {
                        return (
                            <div key={campus.id}>
                                <div className="campusname">{campus.name}</div>
                                <Link to={`/campuses/${campus.id}`}>
                                    <img src={campus.image}/>
                                </Link>
                            </div>
                    )})
                    }
                </div>
                <div>
                    <Link to={'/NewCampus'}>
                        <div type="button" className="btn btn-primary">ADD A CAMPUS</div>
                    </Link>
                </div>
            </div>
        )
    }
}

// <AllCampuses campuses={campuses}/>