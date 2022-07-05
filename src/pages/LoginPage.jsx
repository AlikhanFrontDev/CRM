import React, { useState } from 'react';
import styled from 'styled-components'



function LoginPage() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://185.244.216.51:8079/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => console.log(data.user))
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Container>
                <Forum>
                    <ForumItem onSubmit={e => handleSubmit(e)}>
                        <h2>Welcome</h2>
                        <label htmlFor="">Login</label>
                        <input type="text" placeholder='Login' value={formData.username} name='username' onChange={e => handleChange(e)} />
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} />
                        <button type="submit">Sign In</button>
                    </ForumItem>
                </Forum>
            </Container>
        </>
    );
}

const Forum = styled.div`
    width: 656px;
    height: 622px;
    border: 1px solid #D6D6D6;
    border-radius: 25px ;
    background-color: #fff;

`
const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`
const ForumItem = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 80px 80px;
    margin-top: 45px;
    height: 80vh;
    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        margin: 0 auto;
    }
    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        margin: 30px 0;
    }
    input{
        border: 1px solid #D6D6D6;
        border-radius: 8px;
        height: 60px;
        width: 474px;
        margin: 0 auto;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        padding-left: 20px;
        margin-bottom: 40px;
    }
    button{
        background: #10CA00;
        color: #fff;
        border: none;
        border-radius: 8px;
        width: 496px;
        height: 60px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        margin: 30px 0;
        cursor: pointer;
    }
`

export default LoginPage;