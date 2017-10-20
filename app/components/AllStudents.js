import React, {Component} from 'react';
import { Link, HashRouter as Router, Route, Switch } from 'react-router-dom';

const AllStudents = (props) => {
    const {students} = props
    return (
        <div className="container">
        <h2 style={{color: 'white', font: 'center', margin: '1em'}}>All Students</h2>
        <div className="row">
            {
            students.map(student => {
                return (
                    <div style={{margin: '0.5em'}} className="eachstudent" key={student.id}>
                        <div className="studentname">
                            <Link to={`/students/${student.id}`}>
                                <div style={{color: 'yellow', margin: '0.5em', fontSize: '1.6em'}} className="display-4">
                                    {student.name}
                                </div>
                            </Link>    
                        </div>
                        <div className="studentimage">
                            <Link to={`/students/${student.id}`}>
                                <img src={student.image}/>
                            </Link>
                        </div>
                        <div style={{color: 'yellow', margin: '0.5em', fontSize: '1.4em'}} className="studentemail">
                            {student.email}
                        </div>
                        <div style={{color: 'red', margin: '0.5em'}} className="studentcampusId">
                            {student.campusId}
                        </div>
                    </div>
                )
            })
            }
        </div>
        <Link to={'/NewStudent'}>
            <button type="button" className="btn btn-primary">ADD A STUDENT</button>
        </Link>
    </div>
    )
}

export default AllStudents