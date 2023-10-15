import React, { useState} from "react";
import './MessageCreate.css';
import {AiOutlineSend}  from 'react-icons/ai';
import {useAppDispatch} from "../../hooks/redux";
import {messageSlice} from "../../store/reducers/MessageSlice";

interface IMessageCreate{
    id1: string,
    id2: string
}
export  default function MessageCreate({id1,id2}:IMessageCreate){
    const [text,setText] = useState<string>('');
    const dispatch = useAppDispatch();
    const {add} = messageSlice.actions;



    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const clickBtn = () =>{
        dispatch(add({text,id1,id2}));
        setText('');
    }

    return(
        <>
          <div className={"panel"}>
              <div className={"message-add"}>
                  <input placeholder={"Введите сообщение"} type={"text"} value={text} onChange={(event) => change(event)}/>
                  <button onClick={clickBtn}>{<AiOutlineSend/>}</button>
              </div>
          </div>

        </>
    );
}
