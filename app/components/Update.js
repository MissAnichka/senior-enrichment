// import React, {Component} from 'react';
// import axios from 'axios';

// export default class Update extends Component{
//     constructor(){
//         super();
//         this.state = {
//             updatedStudent: {},
//             updatedCampus: {}
//         };
//     }

//     componentDidMount(){
//         console.log(this.props)
//         const {updatedStudentInfo} = this.props;
//         const {studentId} = updatedStudentInfo;
//         const {updatedCampusInfo} = this.props;
//         const {campusId} = updatedCampusInfo;

//         if(studentId){
//             axios.put(`./api/students/${studentId}`, updatedStudentInfo)
//             .then(res => res.data)
//             .then(updatedStudent => this.setState({updatedStudent}))
//         } else if(campusId){
//             axios.put(`./api/campuses/${campusId}`, updatedCampusInfo)
//             .then(res => res.data)
//             .then(updatedCampus => this.setState({updatedCampus}))
//         }
//     }

//     render(){
//         const {updatedStudent} = this.state
//         const updatedStudentExists = Object.keys(updatedStudent).length
//         const {updatedCampus} = this.state
//         const updatedCampusExists = Object.keys(updatedCampus).length
//         return (
//             <div>
//             {
//                 updatedStudentExists || updatedCampusExists ? 
//                 <div className="successfulUpdate">{alert('Update Successful!')}</div> : null
//             }
//             </div>
//         )
//     }
// }