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
    }

    getCampus(campusId){
        axios.get(`./api/campuses/${campusId}`)
        .then(res => res.data)
        .then(campus => {
            let students = campus.students;
            this.setState({campus, students})
        });
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
        const {students} = this.state
        // const students = campus.getStudents();???
        console.log("STATEFUL SINGLE CAMPUS, PROPS: ", this.props)
        return (
            <div>
                <div className="singlecampus">
                    <div key={campus.id}>
                        <div className="campusname">{campus.name}</div>
                        <img src={campus.image}/>
                    </div>
                </div>
                {
                    !!students.length ? <div><AllStudents students={students}/></div> : null
                }
                <Update student={student}/>
                <Delete student={student}/>
            </div>
        )
    }
}



// <SingleCampus campus={campus}/>