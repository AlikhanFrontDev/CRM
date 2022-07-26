import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import SubNav from '../components/SubNav';
import ToggleForm from '../components/Tables/ToggleForm';
import styled from 'styled-components';
import AddSubjectForm from '../components/Tables/AddSubjectForm';
import FanlarTable from '../components/Tables/FanlarTable';

function Fanlar(props) {

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
        <Container>
            <Sidebar
                iconOne={'Dashboard'}
                iconTwo={'Darslar'}
                iconThree={"O'quvchilar"}
                iconFive={"Guruhlar"}
                iconSix={"O'qituvchilar"}
                iconSeven={"Xisobot"}
            />
            <div>
                <NavBar className="box2"
                    name={"Fanlar"}
                />
                <SubNav
                    title={"Fan qo'shish"}
                    onClick1={toggleModal}
                // button={"Xabar yuborish"}
                />
                <FanlarTable />
            </div>

            {modal && (
                <Modal>
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <AddSubjectForm />
                        </div>
                    </div>
                </Modal>
            )}

        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row ;
    height: 100vh;
    width: 100vw;
    position: fixed;
    


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
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 15px;
    width: 460px;
    height: 341px;
}
`

export default Fanlar;