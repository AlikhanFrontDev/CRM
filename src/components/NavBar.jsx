
import React, { Component } from 'react';
import { BsPhone, BsSearch } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { CgArrowLongUpE } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import styled from 'styled-components';
import Icon from './Icon';
function NavBar({ name, onClick, onClick1 }) {


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
                    <li><FiSettings className='icons' /></li>
                </ul>
            </Container>
        </>
    );
}

const Container = styled.div`
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

export default NavBar;