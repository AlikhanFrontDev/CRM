import React from 'react';
import styled from 'styled-components'
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import SubNav from '../components/SubNav';

function Darslar() {
    return (
        <Container>
            <Sidebar
                iconOne={'Dashboard'}
                iconTwo={'Darslar'}
                iconThree={"O'quvchilar"}
                iconFive={"Guruhlar"}
                iconSix={"O'qituvchilar"}
                iconSeven={"Xisobot"}
            />
            <div className='box2'>
                <NavBar name={"Darslar"} />
                <SubNav
                    button={"Xabar yuborish"}
                />
                <div className='box3' ></div>
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
    .box2{
        width: 91vw;
    }
    .box3{
        width: 91vw;
        height: 87.9vh;
    }
`
export default Darslar;