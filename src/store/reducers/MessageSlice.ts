import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface MessageState{
    message:({index:number,id1: string,value: string,id2:string})[],

}

const initialState : MessageState = {
    message: [{index: 1,id1: "Dmitry" ,value: "Hello",id2:"Artem"}],
}


export const messageSlice = createSlice({
    name:'message',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{text:string,id1: string,id2:string}>):void => {
            const {text,id1,id2} = action.payload;
            if(text !== '') {
                 state.message.push({
                     index: state.message[state.message.length - 1].index + 1,
                     id1: id1,
                     value: text,
                     id2: id2
                 });
            }

        }
    }

});

export default  messageSlice.reducer;
