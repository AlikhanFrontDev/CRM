import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

function PaymountTitle(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('http://185.244.216.51:8079/api/payEdu/getAllPayment');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);




    return (
        <Container>
            <h3>Umumiy Daromad</h3>
            <p>{data.amount}</p>
        </Container>
    );
}


const Container = styled.div`
    margin-top: 85px;
    height: 173px;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        margin-bottom: 20px;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
    }
    p{
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
    }
`

export default PaymountTitle;