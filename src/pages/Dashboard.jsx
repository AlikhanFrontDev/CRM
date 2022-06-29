import React, { useState } from 'react';
import styled from 'styled-components'
import Icon from '../components/Icon';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import SubNav from '../components/SubNav';


function Dashboard() {
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
                    iconOne={'Dashboard'}
                    iconTwo={'Darslar'}
                    iconThree={"O'quvchilar"}
                    iconFive={"Guruhlar"}
                    iconSix={"O'qituvchilar"}
                    iconSeven={"Xisobot"}
                />
                <div>
                    <NavBar className="box2"
                        name={'Dashboard'}
                        onClick1={toggleModal}
                    />
                    <SubNav className="iconmassage"
                        button={"Xabar yuborish"}
                    />
                    <div className="box3"></div>
                </div>
            </Container>
            {/* modal */}
            {modal && (
                <Modal>
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <div className="container">
                                <div>
                                    <span>Nomi</span>
                                    <input type="text" />
                                </div>
                                <div>
                                    <span>A'zolik vaqti</span>
                                    <input type={'date'} />
                                </div>
                                <div>
                                    <span>Direktor</span>
                                    <input type="text" />
                                </div>
                                <div>
                                    <span>Login</span>
                                    <input type="text" />
                                </div>
                                <div>
                                    <span>Status</span>
                                    <input type={'text'} />
                                </div>
                            </div>
                            <div className="container">
                                <div>
                                    <span>Telefon raqam</span>
                                    <input type={'tel'} />
                                </div>
                                <div>
                                    <span>STTR</span>
                                    <input type={'number'} />
                                </div>
                                <div>
                                    <span>Direktor nomi</span>
                                    <input type="text" />
                                </div>
                                <div>
                                    <span>Parol</span>
                                    <input type={'password'} />
                                </div>
                            </div>
                            <button className="close-modal" onClick={toggleModal}>
                                CLOSE
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
    .iconmassage{
        margin-right: 10px;
        cursor: pointer;
    }
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
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
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
    justify-content: space-between;
}

`

export default Dashboard;