import React, {useState} from "react";
import './Header.css';
import Meny from "../Meny/Meny";
import {AiOutlineSearch} from "react-icons/ai";
import Folders from "../Folders/Folders";
import {NavLink} from "react-router-dom";
import Folder from "../Folder/Folder";
import Line from "../Line/Line";
import {FolderModel} from "../../models/FolderModel";

interface IHeader{
    setState: (elem: boolean) => void,
    folders: FolderModel[],

}

export  default function Header({setState,folders}:IHeader){
    const [position,setPosition] = useState<number>(100);
    const [width,setWidth] = useState<number>(100);

    return(
        <header>
            <div className={"container"}>
                <Meny setState={setState}/>
                <h1>Telegram</h1>
                <NavLink to={"/search"}>
                    <div className={"icon"}>
                        <AiOutlineSearch/>
                    </div>
                </NavLink>
            </div>

            <Folders>
                {
                    folders.map((folder,index) =>{
                        return <Folder
                            key={index}
                            title={folder.text}
                            active={folder.active}
                            index={index}

                            setPosition={setPosition}
                            setWidth={setWidth}
                        />
                    })
                }

            </Folders>
            <Line position={position} width={width}/>
        </header>
    );
}