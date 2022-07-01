import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

function ToggleForm({ onClick }) {
    const [data, setData] = useState({
        name: "",
        addTime: "",
        limitTime: "",
        admin: "",
        phone: "",
        seo: "",
        sttr: "",
        seophone: "",
        username: "",
        password: "",
        status: "",
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch('https://my-json-server.typicode.com/AlikhanFrontDev/fakeDataBase/db', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data.user))
    }

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    return (
        <Container>
            <div className='box1'>
                <h3>O'quv markaz qo'shish</h3>
                <button className='close' onClick={onClick}><AiOutlineClose /></button>
            </div>
            <div className='box2'>
                <label htmlFor="file" className='imageBox'>
                    <input type="file" id='file' style={{ display: "none" }} />
                    <AiOutlinePlus className='imageIcon' />
                </label>
                <p className='logo'>Logo</p>
            </div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="box3">

                    <div className='labels'>
                        <label htmlFor="" > Nomi</label>
                        <label htmlFor="">A‘zolik vaqti</label>
                        <label htmlFor="">Adminstrator</label>
                        <label htmlFor="">Telefon nomer</label>
                        <label htmlFor="">STTR</label>
                    </div>
                    <div className='labels'>
                        <input className='inputs' type="text" onChange={e => handleChange(e)} name="name" value={data.name} />
                        <div className='datePicker'>
                            <input type="date" className='startDate' onChange={e => handleChange(e)} name="addTime" value={data.addTime} />
                            <input type="date" className='endDate' onChange={e => handleChange(e)} name="limitTime" value={data.limitTime} />
                        </div>
                        <input className='inputs' type="text" name='admin' onChange={e => handleChange(e)} id="admin" value={data.admin} />
                        <input className='inputs' type="text" name='phone' onChange={e => handleChange(e)} id="phone" value={data.phone} />
                        <input className='inputs' type="text" name='sttr' onChange={e => handleChange(e)} id="sttr" value={data.sttr} />
                    </div>
                    <div className='labels'>
                        <label htmlFor="">Direktor</label>
                        <label htmlFor="">Direktor nomeri</label>
                        <label htmlFor="">Login</label>
                        <label htmlFor="">Parol</label>
                        <label htmlFor="">Status</label>
                    </div>
                    <div className='labels'>
                        <input className='inputs' type="text" name='seo' onChange={e => handleChange(e)} id="name" value={data.seo} />
                        <input className='inputs' type="text" name='seophone' onChange={e => handleChange(e)} id="seophone" value={data.seophone} />
                        <input className='inputs' type="text" name='username' onChange={e => handleChange(e)} id="username" value={data.username} />
                        <input className='inputs' type="text" name='password' onChange={e => handleChange(e)} id="password" value={data.password} />
                        <select name="status" form="carform" className='inputs' >
                            <option value="faol">Faol</option>
                            <option value="faol emas">Faol emas</option>
                            <option value="demo">Demo</option>
                        </select>
                    </div>
                </div>
                <div className='buttons'>
                    <button className='saveBtn' type='submit' >Saqlash</button>
                    <button className='IgnoreBtn' type='reset' >Tozalash</button>
                </div>
            </form>
        </Container>
    );
}

const Container = styled.div`
    .box1{
        margin: 20px auto;
        width: 95%;
        display: flex;
        justify-content: space-between;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }
    .box2{
        display: flex;
        align-items: center;
        
    }
    .box3{
        display: flex;
        justify-content: space-around;
    }
    .labels{
        display: flex;
        flex-direction: column;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #464646;
    }
    .buttons{
        display: flex;
        flex-direction: row-reverse;
        margin-top: 50px;
        margin-right: 20px;
    }
    .saveBtn{
        width: 92px;
        height: 35px;
        background: #0047D0;
        color: #fff;
        border: none;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
    }

    .IgnoreBtn{
        width: 120px;
        height: 35px;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        margin-right: 40px;
    }

    .imageBox{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px dashed #7B7B7B;
        border-radius: 6px;
        width: 64px;
        height: 64px;
    }
    .imageIcon{
        border: 1px solid #D9D9D9;
        border-radius: 50%;
        background-color: #D9D9D9;
        width: 24px;
        height: 24px;
        color: #fff;
    }
    .logo{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #464646;
    }

    .close{
        border: none;
        font-size: 16px;
    }

    .datePicker{
        display: flex;
        margin-left: 10px;
    }

    .startDate{
        margin: 10px 0;
        width: 135px;
        height: 36px;
        left: 478px;
        top: 326px;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        text-align: center;
    }
    .endDate{
        margin: 10px 0;
        width: 135px;
        height: 36px;
        left: 478px;
        top: 326px;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        text-align: center;
    }

    label{
        margin: 20px
    }

    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
    margin-right: 10px ;
    -webkit-appearance: none;
    }
    .inputs{
        margin: 11px;
        width: 270px;
        height: 36px;
        left: 478px;
        top: 326px;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        border-radius: 5px;
    }
    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
    }
`

export default ToggleForm;