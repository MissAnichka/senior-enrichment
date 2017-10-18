// import React, {Component} from 'react';
// import { Link, HashRouter as Router, Route, Switch } from 'react-router-dom';

// const AllCampuses = (props) => {
//     console.log(props.match);
//     const {campuses} = props
//     return (
//         <div style={ {backgroundImage: "url('https://dg19s6hp6ufoh.cloudfront.net/pictures/613093294/large/The_Best_HD_HQ_Hi-Res_Wallpapers_Collection_-_Fantasy_Art_by_tonyx__1300_pictures-319.jpg_Gladius_0359_Christian_Riese_Lassen_Eternity.jpeg?1474582032'", height: '200px'} }>
//             <h2>All Campuses</h2>
//             <div className="row">
//             {
//                 campuses.map(campus => {
//                     <div key={campus.id}>
//                         <div className="campusname">{campus.name}</div>
//                         <Link to={`/campuses/${campus.id}`}>
//                             <img src={campus.image}/>
//                         </Link>
//                     </div>
//                 })
//             }
//             </div>
//         </div>
//     )
// }

// export default AllCampuses