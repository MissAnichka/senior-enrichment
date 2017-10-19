import React, {Component} from 'react';
import { Link, HashRouter as Router, Route, Switch } from 'react-router-dom';

const AllStudents = (props) => {
    console.log("ALLSTUDENTS PROPS: ", props)
    const {students} = props
    return (
        <div>
        <h2>All Students</h2>
        <div className="row">
            {
            students.map(student => {
                return <div key={student.id}>
                    <div className="studentname">{student.name}</div>
                    <Link to={`/students/${student.id}`}>
                        <img src={student.image}/>
                    </Link>
                    <div className="studentemail">{student.email}</div>
                </div>
            })
            }
        </div>
        <Link to={'/NewStudent'}>
            <div type="button" className="btn btn-primary">ADD A STUDENT</div>
        </Link>
    </div>
    )
}

export default AllStudents