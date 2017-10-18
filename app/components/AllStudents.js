// import React, {Component} from 'react';
// import { Link, HashRouter as Router, Route, Switch } from 'react-router-dom';

// const AllStudents = (props) => {
//     const {students} = props
//     return (
//         <div style={ {backgroundImage: "url('https://dg19s6hp6ufoh.cloudfront.net/pictures/613093294/large/The_Best_HD_HQ_Hi-Res_Wallpapers_Collection_-_Fantasy_Art_by_tonyx__1300_pictures-319.jpg_Gladius_0359_Christian_Riese_Lassen_Eternity.jpeg?1474582032'", height: '200px'} }>
//             <h2>All Students</h2>
//             <div className="row">
//             {
//                 students.map(student => {
//                     <div key={student.id}>
//                         <div className="studentname">{student.name}</div>
//                         <Link to={`/students/${student.id}`}>
//                             <img src={student.image}/>
//                         </Link>
//                         <div className="studentemail">{student.email}</div>
//                     </div>
//                 })
//             }
//             </div>
//         </div>
//     )
// }

// export default AllStudents