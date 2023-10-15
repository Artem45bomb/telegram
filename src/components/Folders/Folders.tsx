import React from "react";
import './Folders.css';

interface IFolders{
    children: React.ReactNode,
}
export default function Folders({children}:IFolders){
    return(
        <div className={"folders"}>
            {children}
        </div>
    );
}