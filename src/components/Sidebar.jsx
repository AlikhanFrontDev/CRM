import React from 'react';
import styled from 'styled-components'
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsPeople } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { NavLink } from "react-router-dom"

function Sidebar({ iconOne, iconTwo, iconThree, iconFour, iconFive, iconSix, iconSeven, iconEight, iconNine }) {

    return (
        <>
            <Container>
                <ul>
                    <img src='https://cdn.pixabay.com/photo/2021/04/22/16/25/girl-6199434_640.jpg' alt="image" />
                    {iconOne && <NavLink to={'/dashboard'}>
                        <AiOutlineHome className='icons' />
                        <li className='iconTitle' >{iconOne}</li>
                    </NavLink>}


                    {iconTwo && <NavLink to={'/darslar'}>
                        <TbListDetails className='icons' />
                        <li>Darslar</li>
                    </NavLink>}


                    {iconThree && <NavLink to={'/students'}>
                        <TbListDetails className='icons' />
                        <li>{iconThree}</li>
                    </NavLink>}

                    {iconFour && <NavLink to={'/students'}>
                        <BsPerson className='icons' />
                        <li>{iconFour}</li>
                    </NavLink>}

                    {iconFive && <NavLink to={'/groups'}>
                        <BsPeople className='icons' />
                        <li>{iconFive}</li>
                    </NavLink>}

                    {iconSix && <NavLink to={'/teachers'}>
                        <MdOutlineSchool className='icons' />
                        <li>{iconSix}</li>
                    </NavLink>}

                    {iconSeven && <NavLink to={'/xisobot'} className="box">
                        <RiFileListLine className='icons' />
                        <li>{iconSeven}</li>
                    </NavLink>}

                    {iconEight && <NavLink to={'/markazlarPage'} className="box">
                        {iconEight}
                        <li className='iconTitle'>O'quv markazlar</li>
                    </NavLink>}

                    {iconNine && <NavLink to={'/daromadPage'} className="box">
                        {iconNine}
                        <li className='iconTitle'>Daromad</li>
                    </NavLink>}
                </ul>
            </Container>
        </>
    );
}

const Container = styled.div`
    float: left;
    position: sticky;
    width: 124px;
    background-color: #0D1C38;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    color: #fff;
    .iconTitle{
        text-align: center;
    }
    img{
     position: absolute;
        top: 30px;
        left: 32px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    ul{
        margin-top: 60px;
    }

    li{
        list-style: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        
    }

    a{
        color: #fff;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 15px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        border: 0.1px solid  #0D1C38;
        border-radius: 10px;
        height: 66px;
        width: 90px;
        background-color: #0D1C38;
        color: #fff;
    }

    .icons{
        font-size: 28px;
        margin-bottom: 5px;
    }

    .active{
        border: 0.1px solid;
        border-radius: 10px;
        height: 66px;
        width: 90px;
        background-color: #fff;
        color: #0D1C38;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }

    .box{
        margin-top: 15px;
        /* padding-bottom: 5px; */
    }

`

export default Sidebar;