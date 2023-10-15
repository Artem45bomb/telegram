import React from "react";
import './Meny.css';
import {AiOutlineMenu} from "react-icons/ai";
interface IMeny{
    setState: (elem: boolean) => void
}

export default function Meny({setState}:IMeny){
    return(
        <div className={"i"} onClick={() => setState(true)}>
            < AiOutlineMenu/>
        </div>
    );
}