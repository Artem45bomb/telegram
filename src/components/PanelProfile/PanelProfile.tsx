import React from "react";
import './PanelProfile.css';

interface IPanelProfile{
    children: React.ReactNode,
}
export  default function PanelProfile({children}:IPanelProfile){
    return(
        <div className={"panel-profile"}>
            {children}
        </div>
    )
}