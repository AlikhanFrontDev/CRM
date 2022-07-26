import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { Switch } from '@mui/material';
import '../Toggle/Toglle'
import ToggleForm from './ToggleForm';

function FanlarTable(props) {
    const [value, setValue] = useState('');
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);
    const [message, setMessage] = useState();

    const submitHandler = (e, id) => {
        const token = JSON.parse(localStorage.getItem("user"));
        // e.preventDefault();
        const postData = { value }
        console.log(postData)

        axios.post(`url${id}`, postData,

            { headers: { "Authorization": `Bearer ${token.token}` } }
        )

            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                // console.log(err)
            })
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("user"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://185.244.216.51:8079/api/subject/getAll`, { headers: { "Authorization": `Bearer ${token.token}` } });
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);


    const deleteRequestHandler = async (id) => {
        const response = await axios.delete(
            `http://185.244.216.51:8079/api/subject/deleteSubject/${id}`
        );

        if (response.data.id) {
            setMessage(response.data.id);
        }
        window.location.reload(false);
    };




    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <Container>
            <table >
                <thead>
                    <tr className='head'>
                        <th>ID</th>
                        <th>Fan Nomi</th>
                        <th>Status</th>
                        <th>Comment</th>
                        <th>Tahrirlash</th>
                        <th >O'chirish</th>
                    </tr>
                </thead>
                {data.map((data) => (
                    <tbody key={data.id}>
                        <tr>
                            <td >{data.id}</td>
                            <td>{data.name}</td>
                            <td

                            >
                                <Switch
                                    // checked="true"
                                    color='success'
                                    onChange={(e) => setValue(e.target.checked)}
                                    onClick={() => submitHandler(data.id)}

                                />
                            </td>
                            <td>{data.comment}</td>
                            <td>
                                <button
                                    className="btn btn-info btn-sm"
                                    onClick={() => this.handleUpdate()}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button onClick={toggleModal}>delete</button>
                            </td>
                            {modal && (
                                <Modal>
                                    <div className="modal">
                                        <div onClick={toggleModal} className="overlay"></div>
                                        <div className="modal-content">
                                            <p>O'chirish</p>
                                            <button onClick={() => deleteRequestHandler(data.id)} >Ha</button>
                                            <button onClick={toggleModal} >Yo'q</button>
                                        </div>
                                    </div>
                                </Modal>
                            )}
                        </tr>
                    </tbody>
                ))}
            </table>

        </Container >
    );
}

const Container = styled.div`
margin-left: 120px;
width: 90vw;
 table{
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        overflow-x:scroll;
    }
    thead{
        height: 59px;
        width: 100%;
        background-color: #EEEEEE;
    }

    tbody{
        background-color: #fff;
    }

    tr{
        height: 40px;
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

export default FanlarTable;


