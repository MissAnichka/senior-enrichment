import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
// import SingleCampus from './SingleCampus';

export default class StatefulSingleCampus extends Component{
    constructor(){
        super();
        this.state = {
            campus: {}
        };
        this.getCampus = this.getCampus.bind(this);
    }

    getCampus(campusId){
        axios.get(`./api/campuses/${campusId}`)
        .then(res => res.data)
        .then(campus => this.setState({campus}));
    }

    componentDidMount(){
        const campusId = this.props.match.params.campusId;
        this.getCampus(campusId)
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
        console.log("STATEFUL SINGLE CAMPUS, PROPS: ", this.props)
        return (
            <div>
                <div className="singlecampus">
                    <div key={campus.id}>
                        <div className="campusname">{campus.name}</div>
                        <img src={campus.image}/>
                    </div>
                </div>
            </div>
        )
    }
}



// <SingleCampus campus={campus}/>