import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components'
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { TbReportMoney } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import SubNav from '../components/SubNav';
import ToggleForm from '../components/Tables/ToggleForm';
import axios from 'axios';
import PaymountTitle from '../components/PaymountTitle';
import PaymentsTable from '../components/Tables/PaymentsTable';




function DaromadPage() {
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [name, setName] = useState('');
    const [startTime, setStart] = useState('');
    const [endTime, setEnd] = useState('');
    const [payAmount, setMoney] = useState('');
    const [comment, setComment] = useState('');
    const [data, setData] = useState([]);
    const [eduCenterId, setCenterId] = useState('')

    // ------------------------------------------------------------------------
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }



    const toggleModalTolov = () => {
        setModal2(!modal2);
    };

    if (modal2) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    // ---------------------------------------------------------

    const submitHandler = (e) => {
        e.preventDefault();




        const postData = { startTime, endTime, payAmount, comment, eduCenterId }
        console.log(postData)

        axios.post('http://185.244.216.51:8079/api/payEdu/createEduPay', postData)

            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // --------------------------------------------------------------


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('http://185.244.216.51:8079/api/eduCenter/getEducentersNameAndId');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);
    // -----------------------------------------------------------------------
    return (

        <>
            <Container>
                <Sidebar
                    iconNine={<TbReportMoney className='icons' />}
                    iconEight={<AiOutlineHome className='icons' />}
                />
                <div>
                    <NavBar className="box2"
                        name={'Daromad'}
                    />
                    <SubNav
                        title={"+ O'quv markaz qo'shish"}
                        onClick1={toggleModal}
                        button={"To'lov qilish"}
                        onClick2={toggleModalTolov}
                    />
                    <PaymountTitle />
                    <PaymentsTable />
                </div>
            </Container>
            {/* modal */}

            {modal && (
                <Modal>
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <ToggleForm onClick={toggleModal} />
                        </div>
                    </div>
                </Modal>
            )}

            {modal2 && (
                <Modal>
                    <div className="modal">
                        <div onClick={toggleModalTolov} className="overlay"></div>
                        <form onSubmit={submitHandler}>
                            <div className="modal-content2">
                                <h2>O‘quv markaz qo‘shish</h2>
                                <div className="modalContainer">
                                    <ul className='container'>
                                        <span className='nameSpan'>O'quv markaz nomi</span>
                                        <span className='nameSpan'>A'zolik vaqti</span>
                                        <span className='nameSpan'>To'lov summasi</span>
                                        <span className='nameSpan'>Izoh</span>
                                    </ul>
                                    <ul className='container'>
                                        <select className='inputStyle' onChange={(e) => setCenterId(e.target.value)}>
                                            <option>Markazni tanlang</option>
                                            {data.map(data => <option
                                                value={data.eduCenterId}>{data.eduCenterName}</option>)}
                                        </select>

                                        <div className='date'>
                                            <input className='dateStyle' type="datetime-local" value={startTime} onChange={(e) => setStart(e.target.value)} />
                                            <input className='dateStyle' type="datetime-local" value={endTime} onChange={(e) => setEnd(e.target.value)} />
                                        </div>
                                        <input className='inputStyle' value={payAmount} onChange={(e) => setMoney(e.target.value)} />
                                        <textarea className=' textarea' value={comment} onChange={(e) => setComment(e.target.value)} />
                                    </ul>
                                </div>

                                <button className="close-modal" onClick={toggleModalTolov}>
                                    X
                                </button>
                                <button type='submit'>submit</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
            {/* modal */}

        </>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row ;
    height: 100vh;
    width: 100vw;
    position: fixed;
    .box2{
        width: 91vw;
    }

    .box3{
        width: 91vw;
        height: 87.9vh;
    }

    .payMount{
        height: 400px;
        background-color: #fff;
        width: 100%;
    }

`
const Modal = styled.div`
body.active-modal {
    overflow-y: hidden;
}
.modal{
    width: 556px;
    height: 465px;
}

.date{
    display: flex;
    flex-direction: row;
    margin: 20px;
    margin-bottom: 42px;

}

.dateStyle{
    width: 135px;
    height: 36px;
    border: 1px solid #DADADA;
    border-radius: 5px;
}

.textarea{
    width: 270px;
    height: 66px;
    border: 1px solid #DADADA;
    border-radius: 5px;
    margin: 20px;
}

.btn-modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
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
    border-radius: 3px;
    width: 880px;
    height: 565px;
}
.modal-content2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    width: 560px;
    height: 565px;
}

.modalContainer{
    display: flex;
}

.close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
}


.container{
    display: flex;
    flex-direction: column;
    margin-top: 69px;
    margin-left: 40px;
}

.nameSpan{
    margin-bottom: 55px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}

.inputStyle{
    margin-left: 20px;
    margin-bottom: 35px;
    width: 270px;
    height: 36px;
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 5px;
}
.inputStyle1{
    margin-left: 20px;
    margin-bottom: 35px;
    width: 270px;
    height: 36px;
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 5px;
}

h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-top: 20px;
    margin-left: 40px;
}

.close-modal{
    border: none;
    cursor: pointer;
    margin: 20px;
}

`

export default DaromadPage;