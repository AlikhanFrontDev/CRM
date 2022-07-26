
import React, { useState } from 'react';
import { BsPhone, BsSearch } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { CgArrowLongUpE } from "react-icons/cg";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import styled from 'styled-components';
import Icon from './Icon';
import SettingsBar from './SettingsBar';
import SerttingsMenu from './SerttingsMenu';
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";



function NavBar({ name, onClick, onClick1, settings }) {

    const [modal, setModal] = useState(false);

    const toggleModal = ({ }) => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    const navigate = useNavigate();

    const handleLoginOut = async () => {
        window.reload();
        navigate("/")
        // e.preventDefault();
        try {
            await AuthService.logout()
                .then(
                    () => {
                    },
                    (error) => {
                        console.log(error);
                    }
                )
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <Container>
                <ul className='leftSide'>
                    {name && <li><span>{name}</span></li>}
                    <li><AiOutlinePlus onClick={onClick1} className='icons' /></li>
                    <li><BsPhone onClick={onClick} className='icons' /></li>
                </ul>

                <ul className='rightSide'>
                    <li><BsSearch className='icons' /></li>
                    <li><RiNotification2Line className='icons' /></li>
                    {settings && <li onClick={toggleModal} ><FiSettings className='icons' />{settings}</li>}
                    <li onClick={handleLoginOut}><FiLogOut /></li>
                </ul>
                {modal && (
                    <Modal>
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <SerttingsMenu />
                            </div>
                        </div>
                    </Modal>
                )}
            </Container>
            {/* <SettingsBar

            /> */}
        </>
    );
}

const Container = styled.div`
    position: fixed;  
    margin-left: 125px;
    background-color: #fff;
    width: 91vw;
    height: 84px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 2px 1px 4px #999;
    ul{
        display: inline;
    }

    li{
        display: inline;
        cursor: pointer;
        margin: 10px;
    }
    a{

    }

    .leftSide{
        margin-right: 700px;
    }

    .rightSide li {
        margin-left: 25px;
    }

    ul li span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #0D1C38;
    }

    .icons{
        font-size: 20px;
    }

`

const Modal = styled.div`
body.active-modal {
    overflow-y: hidden;
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
    left: 90%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    /* border-radius: 15px; */
    width: 282px;
    height: 100vh;
}
`

export default NavBar;