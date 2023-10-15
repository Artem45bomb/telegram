import React from "react";
import './Back.css';
import {AiOutlineArrowLeft}  from 'react-icons/ai';
import {NavLink} from "react-router-dom";

export default function Back(){
    return(
        <>
            <NavLink to={"/"}>
                <div className={"back"} >
                    <AiOutlineArrowLeft/>
                </div>
            </NavLink>
        </>

    )
}