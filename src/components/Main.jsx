import React from 'react';
import styled from 'styled-components'
import NavBar from './NavBar';
import Sidebar from './Sidebar';


function Main() {
    return (
        <Container>
            <div className="boxOne">
                <Sidebar className="box1"></Sidebar>
            </div>
            <div className="boxTwo">
                <NavBar className="box2"></NavBar>
                <div className="box3"></div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row ;
    height: 100vh;
    width: 100vw;
    position: fixed;
    
    .box1{
        width: 5vw;
        height: 100vh;
    }
    .box2{
        width: 91vw;
    }

    .box3{
        width: 91vw;
        height: 87.9vh;
        background-color: #F6F7F9;
    }
`

export default Main;