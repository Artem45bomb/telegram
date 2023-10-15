import React from "react";
import {AiFillEdit} from "react-icons/ai";
interface  IProfileImage{
    name: string
}
export  default  function ProfileImage({name}:IProfileImage){
    return(<div className={"profile-image"}>
        <img src={"https://proprikol.ru/wp-content/uploads/2020/04/kartinki-vselennoj-5.jpg"} alt={""}/>
        <div className={"image-update"}><AiFillEdit/></div>
        <div className={"profile-name"}>{name}</div>
    </div>);
}