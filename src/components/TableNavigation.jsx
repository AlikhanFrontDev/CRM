import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom"

function TableNavigation(props) {
    return (
        <Container>
            <ul className='nav'>
                <li><NavLink to={"/markazlarPage"}>Joriy</NavLink></li>
                <li><NavLink to={"/markazlarArchive"}>Arxiv</NavLink></li>
            </ul>
            <hr />
        </Container>
    );
}

const Container = styled.div`
    .nav{
        display: flex;
    }
    li{
        list-style: none;
        margin: 30px;
    }

    hr{
    }

    a{
        font-family: 'Inter';
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #A5A5A5;
    }
    .active{
        border-bottom: solid 3px blue;
    }
`

export default TableNavigation;