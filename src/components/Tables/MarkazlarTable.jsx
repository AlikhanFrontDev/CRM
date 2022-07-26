import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios"
import { Checkbox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


function MarkazlarTable(){
    const[users , setUsers] = useState();
    const[data , setData] = useState([]);
    const [modal, setModal] = useState(false);


const handleDelete =(id, e) => {
    const token = JSON.parse(localStorage.getItem("user"));
        axios.delete(`http://185.244.216.51:8079/api/eduCenter/delete/${id}`, { headers: { "Authorization": `Bearer ${token.token}` } })
            .then(res => {
                window.location.reload(false);
                console.log(res);
                console.log(res.data);

                const users = this.state.users.filter(item => item.id !== id);
                setUsers({ users });
            })

    }

    // state = {
    //     users: [],
    //     status: [],
    //     // 
    // };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("user"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://185.244.216.51:8079/api/eduCenter/getAll`, { headers: { "Authorization": `Bearer ${token.token}` } } );
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);


    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
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


        // Date.parse(this.users.joiningAt.toString());
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
                        {data.map(data => (
                            <tbody key={data.id}>
                                <tr>
                                    <td className='check'><Checkbox /></td>
                                    <td>{data.id}</td>
                                    <td>{data.eduCenterName}</td>
                                    <td>{data.joiningAt}</td>
                                    <td>{data.status}</td>
                                    <td>{data.phoneNumber}</td>
                                    <td>{data.ceo}</td>
                                    <td>
                                        <button
                                            className="btn btn-info btn-sm"
                                            
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                    <td>
                                <button onClick={toggleModal}>delete</button>
                            </td>
                            </td>
                            {modal && (
                                <Modal>
                                    <div className="modal">
                                        <div onClick={toggleModal} className="overlay"></div>
                                        <div className="modal-content">
                                            <p>O'chirish</p>
                                            <button
                                            className="btn btn-danger btn-sm"
                                            onClick={(e) => handleDelete(data.id, e)}
                                        >
                                            Delete
                                        </button>
                                        <button onClick={toggleModal} >Yo'q</button>
                                        </div>
                                    </div>
                                </Modal>
                            )}
                                    <td>
                                        
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </Container>
            </>
        );
    
}

const Container = styled.div`
    margin-left: 125px;
    width: 90vw;
td{
    border-bottom: 1px solid #EEEEEE;
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

 
const Modal = styled.div`
body.active-modal {
    overflow-y: hidden;
    overflow-x: hidden;
}
.modal{   
    width: 989px;
    height: 623px;
}


.modal, .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
}

.overlay {
    background: rgba(49,49,49,0.8);
}
.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 15px;
    width: 989px;
    height: 623px;
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


















                    // delebutton: [
                        //     {
                        //         field: 'delete', headerName: "O'chirish", width: 120, renderCell: () => {
                        //             return (
                        //                 <button
                
                        //                     onClick={(e) => this.handleDelete(this.state.users.id, e)}
                        //                 >
                        //                     Delete
                        //                 </button>
                        //             )
                        //         }
                        //     }
                        // ],
                        // editButton: [
                        //     {
                        //         field: 'edit', headerName: "Tahrirlash", width: 120, renderCell: () => {
                        //             return (
                        //                 <button>delete</button>
                        //             )
                        //         }
                        //     }
                        // ],
                        // columns: [
                        //     { field: 'id', headerName: 'ID', width: 70 },
                        //     { field: 'eduCenterName', headerName: 'First name', width: 130 },
                        //     { field: 'joiningAt', headerName: "A'zolok sanasi", width: 130 },
                        //     { field: 'phoneNumber', headerName: 'Telefon raqami', type: 'number', width: 120, },
                        //     {
                        //         field: 'ceo', headerName: 'Direktor', sortable: false, width: 160,
                        //         // valueGetter: (params) =>
                        //         //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
                        //     }
                
                        // ],





                    //     <div style={{ height: 400, width: '100%' }}>
                    //     <DataGrid
                    //         rows={this.state.users}
                    //         columns={this.state.columns.concat(this.state.delebutton, this.state.editButton)}
                    //         pageSize={5}
                    //         rowsPerPageOptions={[5]}
                    //         checkboxSelection
                    //         pagination
                    //     />
                    // </div>