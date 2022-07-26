import React, { useState } from 'react';
import axios from 'axios';

function RoomsForm(props) {
    const [subjectName, setSubjectName] = useState('');
    const [comment, setComment] = useState('');

    const submitHandler = (e) => {
        const token = JSON.parse(localStorage.getItem("user"));
        e.preventDefault();
        const postData = { subjectName, comment }
        console.log(postData)

        axios.post('http://185.244.216.51:8079/api/subject/createSubject',
            postData,
            { headers: { "Authorization": `Bearer ${token.token}` } }
        )

            .then((res) => {
                console.log(res)
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Fan Nomi</label>
                <input className='dateStyle' type="text" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
                <label htmlFor="">Izoh</label>
                <input className='dateStyle' type="color" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button type='submit' onClick={(window.location.reload(false))} >saqlash</button>
            </form>
        </div>
    );
}

export default RoomsForm;