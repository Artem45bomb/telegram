import React from "react";
import './Field.css';

interface IPole{
    value: string,
    poleName: string,
}
export  default function Fields({value,poleName}:IPole){
    return(
        <button className={"field"}>
           <span>
               {value}
           </span>
            <p>
                {poleName}
            </p>
        </button>
    );
}