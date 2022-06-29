import React, { useState } from "react";
import styled from 'styled-components'

export default function ModaForumCenters() {
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
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>

            {modal && (
                <Modal>
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>Hello Modal</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                                id fugit, dignissimos maxime non natus placeat illo iusto!
                                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                                placeat tempora vitae enim incidunt porro fuga ea.
                            </p>
                            <button className="close-modal" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
            <p>m molestiae.</p>
        </>
    );
}

const Modal = styled.div`
body.active-modal {
    overflow-y: hidden;
}

.btn-modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
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
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
}

.close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
}
`