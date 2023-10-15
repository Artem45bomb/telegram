import React, {useEffect, useRef} from "react";
import './Folder.css';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {folderSlice} from "../../store/reducers/FolderSlice";



interface IFolder{
    title: string,
    active: boolean,
    setPosition:  React.Dispatch<React.SetStateAction<number>>
    setWidth: React.Dispatch<React.SetStateAction<number>>
    index:number,
}

export  default function Folder({title,active,setPosition,setWidth,index}:IFolder){
    const  className:string = "folder";
    const {folders} = useAppSelector(state => state.folderReducer);
    const dispatch =useAppDispatch();
    const {setFolders,setElemPosition} = folderSlice.actions
    let ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
            if(ref.current && folders[0].text === title){
                setPosition(ref.current.offsetLeft);
                setWidth(ref.current.clientWidth);
            }

    },[]);

    const click = () => {
        if(ref.current){
            setPosition(ref.current.offsetLeft);
            setWidth(ref.current.clientWidth);
        }
        dispatch(setFolders(folders.map((folder,count) =>{
            if(count === index){
                setElemPosition(count);
                return {
                   ...folder,
                    active: !folder.active
                };
            }
            return {
                ...folder,
                active: false,
            }
        })));
    }
    return(<div ref={ref}  className={active ? className + " active" : className} onClick={click}>
        {title}
    </div>)
}