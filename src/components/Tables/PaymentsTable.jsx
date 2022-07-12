import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
function PaymentsTable({ }) {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('http://185.244.216.51:8079/api/payEdu/getAllActivePayments');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);

    return (


        <Container>

            <table >
                <thead>
                    <tr className='head'>
                        <th>ID</th>
                        <th>Nomi</th>
                        <th>A'zolik sanasi</th>
                        <th>Izoh</th>
                        <th>To'lov summasi</th>
                    </tr>
                </thead>
                {data.map(data => (
                    <tbody key={data.id}>
                        <tr>
                            <td>{data.eduCenterId}</td>
                            <td>{data.eduCenterName}</td>
                            <td>{data.fromDate}  ~  {data.toDate}</td>
                            <td>{data.comment}</td>
                            <td>{data.amount}</td>
                        </tr>
                    </tbody>
                ))}
            </table>

        </Container>
    );
}

const Container = styled.div`

 table{
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        overflow-x:scroll;
    }
    thead{
        height: 59px;
        width: 100%;
        background-color: #EEEEEE;
    }

    tbody{
        background-color: #fff;
    }

    tr{
        height: 40px;
    }

`

export default PaymentsTable;