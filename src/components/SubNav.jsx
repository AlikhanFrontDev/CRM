import React from 'react';
import styled from 'styled-components';
import { AiOutlineDollarCircle } from "react-icons/ai";



function SubNav({ button, button2, onClick1, onClick2, onClick3, onClick4, title }) {
    return (
        <Container className="subNav">
            <ul className='sNav'>
                <div className='mini'>
                    <button className='addButton' onClick={onClick1} >{title}</button>
                    {button && <button className='smsButton' onClick={onClick2}>
                        <AiOutlineDollarCircle className='iconmassage' />
                        {button}
                    </button>}
                    {button2 && <button className='delete' onClick={onClick4}>
                        {button2}
                    </button>}
                </div>
                {/* <li className='iconOne' >3</li>
                <li>4</li> */}
                <button className='filter' onClick={onClick3} >Filter</button>
            </ul>
        </Container>
    );
}

const Container = styled.div`

margin-top: 120px;
margin-left: 120px;

.delete{
    background: #EB0000;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #fff;
    width: 97px;
    height: 35px;
    border: none;
    cursor: pointer;
}

.mini{
        display: flex;
        justify-content: space-around;
        align-items: center; 
        width: 500px;
        /* height: 100px; */

    }
    .subNav{
        height: 85px;
        border: 1px solid red;
    }
    .sNav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* height: 100px; */
        margin-right: 30px;
    }
    .iconmassage{
        margin-right: 10px;
    }
    .addButton{
        width: 221px;
        height: 35px;
        border: none;
        color: #fff;
        background: rgba(42, 191, 87, 0.8);
        border-radius: 5px;
        cursor: pointer;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        padding: 8px 16px;
        gap: 5px;
        /* margin-right: 80px; */
    }
    .filter{

        width: 75px;
        height: 35px;

        border: none;
        color: #fff;
        background: #0047D0;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        cursor: pointer;
    }

    .smsButton{

        width: 154px;
        height: 35px;

        border: none;
        background: #FFFFFF;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        cursor: pointer;
    }

    .iconOne{
        position: absolute;
        width: 16px;
        height: 16px;
        left: 342px;
        top: 119px;
    }

`

export default SubNav;


