import React from "react";
import "./Message.css";

interface IMessage{
    className: boolean
    nameHis: string,
    nameMain: string,
    text : string,
}

export  default function Message({className,nameMain,nameHis,text}: IMessage){


    return(
        <>
            <div className={className ? "main message" : "his message"}>
                <div className={"id"}>{className? nameMain : nameHis}</div>
                <div className={"text"}>{text}</div>

            </div>
        </>
    );
}