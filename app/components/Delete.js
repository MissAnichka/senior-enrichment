// import React, {Component} from 'react';
// import axios from 'axios';

// export default class Update extends Component{
//     constructor(){
//         super();
//         this.state = {
//             deletedStudent: {},
//             deletedCampus: {}
//         };
//     }

//     componentDidMount(){
//         const {studentId} = this.props;

//         const {campusId} = this.props;

//         if(studentId){
//             axios.delete(`./api/students/${studentId}`)
//             .then(res => res.data)
//             .then(deletedStudent => this.setState({deletedStudent}))
//         } else if(campusId){
//             axios.delete(`./api/campuses/${campusId}`)
//             .then(res => res.data)
//             .then(deletedCampus => this.setState({deletedCampus}))
//         }
//     }

//     render(){
//         const {deletedStudent} = this.state
//         const didDeleteStudent = Object.keys(updatedStudent).length
//         const {deletedCampus} = this.state
//         const didDeleteCampus = Object.keys(updatedCampus).length
//         return (
//             <div>
//             {
//                 didDeleteStudent || didDeleteCampus ? 
//                 <div className="successfulDelete">{alert('Delete Successful!')}</div> : null
//             }
//             </div>
//         )
//     }
// }