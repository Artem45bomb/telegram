import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";




interface UserState {
    Users: IUser[],
    MainUser: IUser,
    ClickUser: string,
}

const PhoneNumberDefault:string = 'No phone number';

const initialState:UserState = {
   Users: [
       {id: 0,name: 'Dmitry',AboutMe: '',PhoneNumber:PhoneNumberDefault},
   ],
    MainUser: {id: 0,name: 'Artem',AboutMe: '',PhoneNumber:PhoneNumberDefault},
    ClickUser: 'Ret',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        click: (state, action: PayloadAction<string>) => {
           return {
               ...state,
               ClickUser: action.payload,
           }
        }
    }
});


export  default userSlice.reducer;