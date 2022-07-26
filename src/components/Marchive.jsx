import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios"
import { Checkbox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const apiEndpoint = "http://185.244.216.51:8079/api/eduCenter/getAllArchived"
class MArchive extends Component {
    state = {
        users: [],


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
td{
    border-bottom: 1px solid #EEEEEE;
  
}
table{

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

export default MArchive;
