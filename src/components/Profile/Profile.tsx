import React from "react";
import './Profile.css';
export  default function Profile({name}: {name: string}){
    return(
        <div className={"container-profile"}>
            <div
                className={"profile"}>
                <img src={"https://th.bing.com/th/id/OIP.TZ-GZGWH3UguxibG3J0NagAAAA?w=158&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"} alt={"not"}/>
            </div>
            <p className={"name"}>{name}</p>
        </div>
    )
}