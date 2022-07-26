import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

function SerttingsMenu(props) {
    return (
        <div>
            <ul>
                <NavLink to={'/fanlar'}>Fanlar</NavLink>
                <NavLink to={'/rooms'}>Xona qo'shish</NavLink>
                <NavLink to={'/darslar'}>Taqvim sozlamalari</NavLink>
            </ul>
        </div>
    );
}

export default SerttingsMenu;