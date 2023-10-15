import React from "react";
import MessageCreate from "../components/MessageCreate/MessageCreate";
import Message from "../components/Message/Message";
import PanelProfile from "../components/PanelProfile/PanelProfile";
import './MessageCreatePage.css';
import Profile from "../components/Profile/Profile";
import Back from "../components/Back/Back";
import {useAppSelector} from "../hooks/redux";


export  default function MessageCreatePage(){
    const {message} = useAppSelector(state => state.messageReducer);
    const {MainUser,ClickUser} = useAppSelector(state => state.userReducer);
    return(
        <div className={"message_create-page"}>
            <PanelProfile >
                <Back/>
                <Profile name={ClickUser}/>
            </PanelProfile>
            {message.map((elem,index) => {
                return <Message className={elem.id1 === MainUser.name}
                                key={index}
                                nameMain={elem.id1 === MainUser.name ? elem.id1 : elem.id2}
                                nameHis={elem.id1 === MainUser.name ? elem.id2 : elem.id1}
                                text={elem.value}/>
            })}
            <MessageCreate id1={MainUser.name} id2={ClickUser}/>
        </div>
    );
}