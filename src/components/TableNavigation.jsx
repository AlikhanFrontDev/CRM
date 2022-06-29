import React from 'react';
import styled from 'styled-components';

function TableNavigation(props) {
    return (
        <Container>
            <ul className='nav'>
                <li><a href="">Joriy</a></li>
                <li><a href="">Arxiv</a></li>
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
`

export default TableNavigation;