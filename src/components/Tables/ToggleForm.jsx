import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
// import authHeader from "../../services/user.service";

class ToggleForm extends Component {




    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            edu_centerName: [],
            centerPhone: [],
            ceo_full_name: [],
            ceoPhone: [],
            centerStir: [],
            centerStatusName: [],
            joiningStart: [],
            joiningEnd: [],
            adminFullName: [],
            adminUsername: [],
            adminPassword: [],
            selectedFile: '',
            logoId: ''
        };
    }




    // //GET
    // // async componentDidMount() {
    // //     const { data: status } = await axios.get("http://185.244.216.51:8079/api/eduCenter/getStatus");
    // //     this.setState({ status });
    // //     console.log(status)
    // // }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }



    handleInputChange(e) {
        this.setState({
            selectedFile: e.target.files[0],
            // logoId: res

        })
        // this.setState({
        //     logoId: data.id
        // })
    }


    // componentDidMount() {
    //     // Simple POST request with a JSON body using fetch
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ title: 'React POST Request Example' })
    //     };
    //     fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
    //         .then(response => response.json())
    //         .then(data => this.setState({ postId: data.id }));
    // }

    // submit() {
    //     const data = new FormData()
    //     data.append('file', this.state.selectedFile,)
    //     console.warn(data);

    //     let url = "http://185.244.216.51:8079/api/eduCenter/saveFile";

    //     axios.post(url, data, {
    //     })
    //         // .then(res => res.json())
    //         .then(res => this.setState({ logoId: res }))
    //         .then(res => { console.log(res) })

    // }
    // tokenPayload() {
    //     let config = {
    //       headers: {
    //         Authorization: 'Bearer ' + user.accessToken
    //       }
    //     }


    handleSubmit = e => {
        e.preventDefault();


        const token = JSON.parse(localStorage.getItem("user"));
        const eduCenter = {
            edu_centerName: this.state.edu_centerName,
            adminFullName: this.state.adminFullName,
            centerPhone: this.state.centerPhone,
            centerStir: this.state.centerStir,
            ceo_full_name: this.state.ceo_full_name,
            ceoPhone: this.state.ceoPhone,
            adminUsername: this.state.adminUsername,
            adminPassword: this.state.adminPassword,
        }

        axios.post(
            `http://185.244.216.51:8079/api/eduCenter/createEduCenter`,
            eduCenter,
            { headers: { "Authorization": `Bearer ${token.token}` } }
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }



    render() {

        return (
            <Container>
                <div className='box1'>
                    <h3>O'quv markaz qo'shish</h3>
                    <button className='close'><AiOutlineClose /></button>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className='box2'>
                        {/* <label htmlFor="file" className='imageBox'>
                            <input type="file" id='file' style={{ display: "none" }} name="upload_file" onChange={this.handleInputChange} />
                            <AiOutlinePlus className='imageIcon' />
                        </label>
                        <p className='logo'>Logo</p> */}
                    </div>
                    <div className="box3">

                        <div className='labels'>
                            <label htmlFor="" >Nomi</label>
                            <label htmlFor="">Direktor</label>
                            <label htmlFor="">Direktor tel raqami</label>
                            <label htmlFor="">STTR</label>
                        </div>
                        <div className='labels'>
                            <input className='inputs' type="text" name="edu_centerName" onChange={this.handleChange} />
                            {/* <div className='datePicker'>
                                <input type="datetime-local" className='startDate' name="joiningStart" onChange={this.handleChange} />
                            </div> */}
                            <input className='inputs' type="text" name='adminFullName' id="adadminFullNamemin" onChange={this.handleChange} />
                            <input className='inputs' type="text" name='centerPhone' id="centerPhone" onChange={this.handleChange} />
                            <input className='inputs' type="text" name='centerStir' id="centerStir" onChange={this.handleChange} />
                        </div>
                        <div className='labels'>
                            <label htmlFor="">Adminstrator </label>
                            <label htmlFor="">Telefon raqami</label>
                            <label htmlFor="">Login</label>
                            <label htmlFor="">Parol</label>

                        </div>
                        <div className='labels'>
                            <input className='inputs' type="text" name='ceo_full_name' id="ceo_full_name" onChange={this.handleChange} />
                            <input className='inputs' type="text" name='ceoPhone' id="ceoPhone" onChange={this.handleChange} />
                            <input className='inputs' type="text" name='adminUsername' id="adminUsername" onChange={this.handleChange} />
                            <input className='inputs' type="text" name='adminPassword' id="adminPassword" onChange={this.handleChange} />


                            {/* <select name="centerStatusName" form="carform" className='inputs' onChange={this.handleChange} >
                                {this.state.status.map(status => (
                                    <option name="status" value={status.id} onChange={this.handleChange} >{status.name}</option>
                                ))}
                                <option id='Active' value="Active">Active</option>
                                <option id='UnActive' value="UnActive">UnActive</option>
                                <option id='Demo' value="Demo">Demo</option>
                            </select> */}


                        </div>
                    </div>
                    <div className='buttons'>
                        <button className='saveBtn' type='submit'
                        //  onClick={() => this.submit()} 
                        >Saqlash</button>
                        <button className='IgnoreBtn' type='reset' >Tozalash</button>
                    </div>
                </form>
            </Container>
        );
    }

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
        margin-bottom: 100px;
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