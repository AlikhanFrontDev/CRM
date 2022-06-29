import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { TbReportMoney } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import SubNav from '../components/SubNav';
import MarkazlarTable from '../components/Tables/MarkazlarTable';
import ToggleForm from '../components/Tables/ToggleForm';





function MarkazlarPage() {


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
                        name={"Barcha o'quv markazlar"}

                    />
                    <SubNav
                        button={"Xabar yuborish"}
                        title={"+ O'quv markaz qo'shish"}
                        onClick1={toggleModal}
                    />
                    <div className="listContainer">

                        <MarkazlarTable />
                    </div>
                </div>
            </Container>
            {/* modal */}
            {modal && (
                <Modal>
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <ToggleForm />
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
    .listContainer{
        height: 100vh;
        background-color: #fff;
        width: 100%;
        margin-top: 85px;
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
    font-size: large;
}


`

const Form = styled.form`
    
`


export default MarkazlarPage;