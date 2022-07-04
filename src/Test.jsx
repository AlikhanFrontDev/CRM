import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';

class Test extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            edu_centerName: [],
            centerPhone: [],
            ceo_full_name: [],
            ceoPhone: [],
            centerStir: [],
            centerStatusName: [],
            joiningStart: [],
            joiningEnd: [],
            adminFullName: [],
            adminUsername: [],
            adminPassword: [],
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            edu_centerName: this.state.edu_centerName,
            centerPhone: this.state.centerPhone,
            ceo_full_name: this.state.ceo_full_name,
            ceoPhone: this.state.phone,
            username: this.state.ceoPhone,
            centerStir: this.state.centerStir,
            centerStatusName: this.state.centerStatusName,
            joiningStart: this.state.phone,
            joiningEnd: this.state.username,
            adminFullName: this.state.phone,
            adminUsername: this.state.phone,
            adminPassword: this.state.phone,
        }

        axios
            .post(`http://185.244.216.51:8079/api/eduCenter/createEduCenter`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" name="edu_centerName" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="centerPhone" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="ceo_full_name" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="ceoPhone" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="centerStir" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="centerStatusName" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="datetime-local" name="joiningStart" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="datetime-local" name="joiningEnd" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="adminFullName" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="adminUsername" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        <input type="text" name="adminPassword" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}



export default Test;