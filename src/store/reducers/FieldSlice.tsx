import {AiOutlineMessage,AiOutlineBulb,AiOutlineQuestionCircle,AiOutlineComment, AiOutlinePhone, AiOutlineSetting, AiOutlineUser, AiOutlineUsergroupAdd,AiOutlineBell,AiOutlineFolder,AiOutlineControl} from "react-icons/ai";
import React from "react";
import {createSlice} from "@reduxjs/toolkit";
import {FieldInformation} from "../../models/Field";


export interface Field{
    text:string,
    src:string,
    elements: any
}

export interface Fields{
    fieldsSettings:Field[],
    fieldsInformation: FieldInformation[],
    fieldsNavigation: Field[],
    fieldSpecialSettings: Field[],
}

const initialState:Fields ={
    fieldsSettings: [
        {
            text: "Notification & Sounds",
            src: "/",
            elements: <AiOutlineBell/>
        },
        {
            text: "Settings chats",
            src: "/",
            elements: <AiOutlineMessage/>
        },
        {
            text: "Chat folder ",
            src: "/",
            elements: <AiOutlineFolder/>
        },
        {
            text: "Call Settings",
            src: "/",
            elements: <AiOutlinePhone/>
        },
        {
            text: "Advanced Settings ",
            src: "/settings",
            elements: <AiOutlineControl/>
        },
    ],
    fieldsInformation: [
        {value: '+375 29 718 5666',poleName: 'Phone-number'},
        {value: 'programing',poleName: 'О себе'}
    ],
    fieldsNavigation:[
        {
            text: "Group create",
            src: "/",
            elements: <AiOutlineUsergroupAdd/>
        },
        {
            text: "Contacts",
            src: "/",
            elements: <AiOutlineUser/>
        },
        {
            text: "Calls",
            src: "/",
            elements: <AiOutlinePhone/>
        },
        {
            text: "Favourites",
            src: "/",
            elements: <AiOutlineMessage/>
        },
        {
            text: "Settings",
            src: "/settings",
            elements: <AiOutlineSetting/>
        },
    ],
    fieldSpecialSettings: [
        {
            text: "Questions about telegrams",
            src: "/",
            elements: <AiOutlineQuestionCircle/>
        },
        {
            text: "Telegram Features",
            src: "/",
            elements: <AiOutlineBulb/>
        },
        {
            text: "Ask a question",
            src: "/",
            elements: <AiOutlineComment/>
        },
    ]
}

export const fieldSlice = createSlice({
    name:"field",
    initialState,
    reducers:{

    }
});

export default fieldSlice.reducer;
