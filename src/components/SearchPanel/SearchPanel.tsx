import React from "react";
import './SearchPanel.css';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {NavLink} from "react-router-dom";
import Line from "../Line/Line";


export default function SearchPanel(){
    const position: number = 100;
    const width:number = 100;

    return(

        <div className={"search-panel"}>
            <nav>
                <NavLink to={"/"}>
                    <div className={"i"} >
                        <AiOutlineArrowLeft/>
                    </div>
                </NavLink>
                <input type={"text"} placeholder={"Search"}/>
            </nav>
            <Line position={position!} width={width!}/>
        </div>

    );
}