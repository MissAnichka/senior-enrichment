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
                return (
                    <div className="eachstudent" key={student.id}>
                        <div className="studentname">
                            <Link to={`/students/${student.id}`}>
                                {student.name}
                            </Link>    
                        </div>
                        <div className="studentimage">
                            <Link to={`/students/${student.id}`}>
                                <img src={student.image}/>
                            </Link>
                        </div>
                        <div className="studentemail">
                            {student.email}
                        </div>
                        <div className="studentcampusId">
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