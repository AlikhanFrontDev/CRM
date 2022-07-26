import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import styled from "styled-components";
import jwt_decode from "jwt-decode";



// const code = jwt_decode(role);
// const atribut = JSON.parse(code.attributes);
function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const supernavigate = useNavigate();
    const adminnavigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();


        try {
            await AuthService.login(username, password)
                const role = JSON.parse(localStorage.getItem("user"));
                const atts = jwt_decode(role);
                const userroles = JSON.parse(atts.attributes)
                if (userroles.userRoleSet = "SUPER_ADMIN") {
                    supernavigate('/markazlarPage')
                }
                else {
                    adminnavigate('/dashboard')

                }


                ;
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <Container>
                <Forum>
                    <ForumItem onSubmit={handleLogin}>
                        <h2>Welcome</h2>
                        <label htmlFor="">Login</label>
                        <input type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="">Password</label>
                        <input type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
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



    // const navigate = useNavigate();
    // const [formData, setFormData] = useState({
    //     username: '',
    //     password: ''
    // })

    // function handleSubmit(e) {
    //     e.preventDefault()

    //     fetch('http://185.244.216.51:8079/api/auth/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(formData)
    //     })

    //         .then(
    //             res => res.json())
    //         .then(res => localStorage.setItem('token', res.token))
    //         navigate('/markazlarPage')
    //     // localStorage.setItem(res.token)
    // }

    // function handleChange(e) {
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }


