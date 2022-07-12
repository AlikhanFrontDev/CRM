import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios"
import { Checkbox } from '@mui/material';

const apiEndpoint = "http://185.244.216.51:8079/api/eduCenter/getAll"
class MarkazlarTable extends Component {
    state = {
        users: [],
        status: []
    };

    async componentDidMount() {
        const { data: users } = await axios.get(apiEndpoint);
        this.setState({ users });
        console.log(users)
    }




    // handleUpdate() {
    //     axios({
    //         method: 'PUT',
    //         url: 'http://185.244.216.51:8079/api/eduCenter/updateEduCenter',
    //         data: bodyFormData,
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //         .then(function (response) {
    //             //handle success
    //             console.log(response);
    //         })
    //         .catch(function (response) {
    //             //handle error
    //             console.log(response);
    //         });
    // }


    handleDelete(id, e) {
        axios.delete(`http://185.244.216.51:8079/api/eduCenter/delete/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                const users = this.state.users.filter(item => item.id !== id);
                this.setState({ users });
            })

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
                                    <td>{users.eduCenterName}</td>
                                    <td>{users.joiningAt}</td>
                                    <td>{users.status}</td>
                                    <td>{users.phoneNumber}</td>
                                    <td>{users.ceo}</td>
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
                                            onClick={(e) => this.handleDelete(users.id, e)}
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
        border-collapse: collapse;
    }
    thead{
        height: 59px;
        width: 100%;
        background-color: #EEEEEE;
    }

    tbody{
        text-align: center;
        width: 100%;
    }

    th{
        
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