import React from 'react';
import styled from 'styled-components';
import { TbBrandTelegram } from "react-icons/tb";

function SubNav({ button, onClick1, onClick2, onClick3, title }) {
    return (
        <Container className="subNav">
            <ul className='sNav'>
                <button className='addButton' onClick={onClick1} >{title}</button>
                {button && <button className='smsButton' onClick={onClick2}>
                    <TbBrandTelegram className='iconmassage' />
                    {button}
                </button>}
                {/* <li className='iconOne' >3</li>
                <li>4</li> */}
                <button className='filter' onClick={onClick3} >Filter</button>
            </ul>
        </Container>
    );
}

const Container = styled.div`
    .subNav{
        position: relative;
        height: 85px;
        border: 1px solid red;
    }
    .iconmassage{
        margin-right: 10px;
    }
    .addButton{
        position: absolute;
        width: 221px;
        height: 35px;
        left: 164px;
        top: 109px;
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


    }
    .filter{
        position: absolute;
        width: 75px;
        height: 35px;
        left: 1225px;
        top: 109px;
        border: none;
        color: #fff;
        background: #0047D0;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        cursor: pointer;
    }

    .smsButton{
        position: absolute;
        width: 154px;
        height: 35px;
        left: 409px;
        top: 109px;
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