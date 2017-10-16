import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import axios from 'axios';

import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';

import StatefulAllCampuses from './AllCampuses';
import StatefulAllStudents from './AllStudents';
import StatefulSingleStudent from './SingleStudent';
import StatefulSingleCampus from './SingleCampus';

import NewCampus from './NewCampus';
import NewStudent from './NewStudent';

import axios from 'axios';

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            student: {},
            campus: {}
        }
        this.addStudent = this.addStudent.bind(this);
        this.addCampus = this.addCampus.bind(this);
    }

    addStudent(info){
        axios.post('./api/students', {info})
            .then(res => res.data)
            .then(student => {this.setState({student})});
    }

    addCampus(info){
        axios.post('./api/campuses', {info})
        .then(res => res.data)
        .then(campus => {this.setState({campus})});
    }

    render(){
        return (
            <div style={ {backgroundImage: "url('https://dg19s6hp6ufoh.cloudfront.net/pictures/613093294/large/The_Best_HD_HQ_Hi-Res_Wallpapers_Collection_-_Fantasy_Art_by_tonyx__1300_pictures-319.jpg_Gladius_0359_Christian_Riese_Lassen_Eternity.jpeg?1474582032'", height: '200px'} }>
                <Router>
                    <Switch>
                        <Route exact path="/campuses" component={StatefulAllCampuses}/>
                        <Route path="/campuses/:campusId" component={StatefulSingleCampus}/>
                        <Route exact path="/students" component={StatefulAllStudents}/>
                        <Route path="/students/:studentId" component={StatefulSingleStudent}/>
                        <Route path="/NewStudent" render={() => <NewStudent addStudent={this.addStudent}/>}/>
                        <Route path="/NewCampus" render={() => <NewCampus addCampus={this.addCampus}/>}/>
                        <Route component={AllCampuses}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}