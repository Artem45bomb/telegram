import React from "react";
import './ModelELem.css';
import {NavLink} from "react-router-dom";

interface INavigationModelELem{
    src: string,
    text: string,
    attribute?: string,
    children: React.ReactNode
}

export  default  function ModelElem({text,src,children,attribute}:INavigationModelELem){
    const className = "navigation-elem ";
    return(
        <NavLink to={src}>
            <div className={attribute ? className + attribute  : className}>
                <div >{text}</div>
                {children}
            </div>
        </NavLink>
    );
}