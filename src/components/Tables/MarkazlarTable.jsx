import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import styled from 'styled-components'
import { render } from '@testing-library/react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'edu_centerName', headerName: 'Nomi', width: 130 },
    { field: 'addedAt', headerName: "A'zolik sanasi", type: 'date', width: 130 },
    {
        field: 'centerPhone', headerName: "Telefon Raqami", width: 150,
        renderCell: (params) => {
            return (
                <p className={`numberStyle ${params.row.centerPhone} `}>{params.row.centerPhone}</p>
            )
        }
    },
    {
        field: 'centerStatus.name', headerName: 'Status', width: 90, sortable: false,
        renderCell: (params) => {
            return (
                <p className={`statusClass ${params.row.centerStatus.name}`}>{params.row.centerStatus.name}</p>
            )
        }
    },
    { field: 'ceo_full_name', headerName: 'Direktor', sortable: false, width: 160, },
    {
        field: "edit", headerName: "Tahrirlash", width: 200, sortable: false, disableColumnMenu: true,
        renderCell: () => {
            return (
                <div className='buttonsContainer'>
                    <div className='deleteButton'>edit</div>
                </div>
            )
        }
    },
    {
        field: "delete", headerName: "O'chirish", width: 200, sortable: false, disableColumnMenu: true,
        renderCell: () => {
            return (
                <div className='buttonsContainer'>
                    <div className='deleteButton'>Delete</div>
                </div>
            )
        }
    }
];


function MarkazlarTable() {

    const [rows, setRows] = useState([])
    useEffect(() => {
        axios.get("http://185.244.216.51:9090/api/eduCenter/getAll")
            .then(data => {
                setRows(data.data);
                console.log(data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (



        <Conatiner>
            <DataGrid className='dataGrid'
                rows={rows}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                checkboxSelection
            />
        </Conatiner >
    );
}



const Conatiner = styled.div`

.statusClass {
    padding: 5px;
    border-radius: 5px;

    &.Active {
      color: #1D920B;
      background-color: rgba(32, 227, 0, 0.1);
    }
    &.Demo {
      color: #FFE600;
      background-color: rgba(255, 230, 0, 0.2);
    }
    &.UnActive {
      color: #EB0000;;
      background-color: rgba(232, 0, 0, 0.1);
    }
  }

  .numberStyle{
    color:#0047D0;
    background-color: rgba(0, 71, 208, 0.1);
    border-radius: 56px;
    padding: 5px;
  }

  .dataGrid{
    height: 73vh;
    width: 100%;
  }

  .buttonsContainer{
    margin-left: 20px;
  }


`

export default MarkazlarTable;