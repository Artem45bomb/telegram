import React from "react";

interface ILine{
    position: number,
    width: number
}

export default function Line({width,position}:ILine){
    return (
        <div className={"line"} style={{left: `${position}px` ,width: `${width}px`}}></div>
    );
}