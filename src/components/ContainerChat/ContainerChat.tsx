import React from "react";
import './ContainerChat.css';
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {userSlice} from "../../store/reducers/UserSlice";
interface IContainerChat{
    name: string
    children: React.ReactNode,
}

export  default function ContainerChat({name,children}:IContainerChat){
    const dispatch = useAppDispatch();
    const {click} = userSlice.actions;

    return(
        <NavLink to={"/message"}>
            <div className={"container-chat"} onClick={() => {
               dispatch(click(name));
            }}
            >
                {children}
            </div>
        </NavLink>

    );
}