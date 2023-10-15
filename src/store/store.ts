import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';
import folderReducer from "./reducers/FolderSlice";
import messageReducer from "./reducers/MessageSlice";
import fieldReducer from "./reducers/FieldSlice";

const rootReducer = combineReducers({
    userReducer,
    folderReducer,
    messageReducer,
    fieldReducer,
});

export  const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

export type  RootState = ReturnType<typeof rootReducer>;
export type  AppStore = ReturnType<typeof setupStore>;

export  type AppDispatch = AppStore['dispatch'];