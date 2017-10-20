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
        return (
            <div className="container">
                <h2 style={{color: 'white', font: 'center', margin: '1em'}}>All Campuses</h2>
                    <div>
                    {
                    campuses.map(campus => {
                        return (
                            <div className="mt-0 mb-1" key={campus.id}>
                                <div style={{color: 'yellow', margin: '0.5em', fontSize: '1.6em'}} class="display-4">{campus.name}</div>
                                <div>
                                    <Link to={`/campuses/${campus.id}`}>
                                        <img className="mr-3" src={campus.image}/>
                                    </Link>
                                </div>
                            </div>
                    )})
                    }
                </div>
                <div>
                    <Link to={'/NewCampus'}>
                        <button type="button" className="btn btn-primary">ADD A CAMPUS</button>
                    </Link>
                </div>
            </div>
        )
    }
}

// <AllCampuses campuses={campuses}/>