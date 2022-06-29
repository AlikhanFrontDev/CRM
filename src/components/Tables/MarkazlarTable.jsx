import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios"
import { Checkbox } from '@mui/material';

const apiEndpoint = "https://jsonplaceholder.typicode.com/users"
class MarkazlarTable extends Component {
    state = {
        users: []
    };

    async componentDidMount() {
        const { data: users } = await axios.get(apiEndpoint);
        this.setState({ users });
        console.log(users)
    }

    render() {
        return (
            <>
                <Container>
                    <table >
                        <thead>
                            <tr className='head'>
                                <th><Checkbox /></th>
                                <th>ID</th>
                                <th>Nomi</th>
                                <th>A'zolik sanasi</th>
                                <th>Status</th>
                                <th>Telefon nomeri</th>
                                <th>Direktor</th>
                                <th>Tahrirlash</th>
                                <th>O‘chirish</th>
                            </tr>
                        </thead>
                        {this.state.users.map(users => (
                            <tbody key={users.id}>
                                <tr>
                                    <td className='check'><Checkbox /></td>
                                    <td>{users.id}</td>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.city}</td>
                                    <td>{users.phone}</td>
                                    <td>{users.website}</td>
                                    <td>
                                        <button
                                            className="btn btn-info btn-sm"
                                            onClick={() => this.handleUpdate()}
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => this.handleDelete()}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>

                </Container>
            </>
        );
    }
}

const Container = styled.div`
 td {
  border-bottom: 1px solid #EEEEEE;;
}
    table{
        width: 100%;
    }
    thead{
        height: 59px;
        width: 100%;
        background-color: #F2F2F2;
    }

    tbody{
        text-align: center;
        width: 100%;
    }

    th{
        border: none;
    }

    .check{
        margin-right: 40px;
    }
`

export default MarkazlarTable;






{/* <td>
                            <button
                                className="btn btn-info btn-sm"
                                onClick={() => this.handleUpdate(users)}
                            >
                                Update
                            </button>
                        </td> */}
{/* <td>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => this.handleDelete(users)}
                            >
                                Delete
                            </button>
                        </td> */}