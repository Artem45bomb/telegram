import {FolderModel} from "../../models/FolderModel";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FolderState{
    folders: FolderModel[],
    activeElemPosition:number,
}


const initialState:FolderState = {
    folders: [
        {text:'chats',active: true},
        {text:'main chat',active: false}
    ],
    activeElemPosition: 0,
}

export const folderSlice = createSlice({
    name: "folder",
    initialState,
    reducers: {
        setFolders: (state,action: PayloadAction<FolderModel[]>) =>{
            state.folders = action.payload;
        },
        setElemPosition: (state,action: PayloadAction<number>) =>{
            state.activeElemPosition = action.payload;
        }
    }
});


export default folderSlice.reducer;