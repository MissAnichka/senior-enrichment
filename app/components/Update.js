import React, {Component} from 'react';
import axios from 'axios';

export default class Update extends Component{
    constructor(){
        super();
        this.state = {
            updatedStudent: {}
        };
    }

    componentDidMount(){
        const studentId = this.props.match.params.studentId;
        axios.put(`./api/students/${studentId}`)
            .then(res => res.data)
            .then(updatedStudent => this.setState({updatedStudent}));
    }

    render(){
        // const {updatedStudent} = this.state
        return (
            alert('Success! Student Updated!')
        )
    }
}