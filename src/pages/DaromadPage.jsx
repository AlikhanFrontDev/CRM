import React, { useState } from 'react';
import styled from 'styled-components'
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { TbReportMoney } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import SubNav from '../components/SubNav';


function DaromadPage() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

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
                        button={"Xabar yuborish"}
                        title={"+ O'quv markaz qo'shish"}
                        onClick1={toggleModal}
                    />
                </div>
            </Container>
            {/* modal */}
            {modal && (
                <Modal>
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>O‘quv markaz qo‘shish</h2>
                            <div className="modalContainer">
                                <ul className='container'>
                                    <span className='nameSpan'>Nomi</span>
                                    <span className='nameSpan'>A'zolik vaqti</span>
                                    <span className='nameSpan'>Direktor</span>
                                    <span className='nameSpan'>Login</span>
                                    <span className='nameSpan'>Status</span>
                                </ul>
                                <ul className='container'>
                                    <input className='inputStyle' />
                                    <input className='inputStyle' type={'date'} />
                                    <input className='inputStyle' />
                                    <input className='inputStyle' />
                                    <select className='inputStyle'>
                                        <option value="lime">Faol</option>
                                        <option value="coconut">Faol emas</option>
                                        <option value="mango">Demo</option>
                                    </select>
                                </ul>
                                <ul className='container'>
                                    <span className='nameSpan'>Telefon raqam</span>
                                    <span className='nameSpan'>STTR</span>
                                    <span className='nameSpan'>Direktor nomeri</span>
                                    <span className='nameSpan'>Parol</span>
                                </ul>
                                <ul className='container'>
                                    <input className='inputStyle1' />
                                    <input className='inputStyle1' />
                                    <input className='inputStyle1' />
                                    <input className='inputStyle1' />
                                </ul>
                            </div>

                            <button className="close-modal" onClick={toggleModal}>
                                X
                            </button>
                        </div>
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
`
const Modal = styled.div`
body.active-modal {
    overflow-y: hidden;
}
.modal{
    
    width: 989px;
    height: 539px;
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
    width: 989px;
    height: 539px;
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
    margin-bottom: 50px;
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