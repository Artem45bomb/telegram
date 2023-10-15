import React from "react";
import './Settings.css';
import Profile from "../components/Profile/Profile";
import {useAppSelector} from "../hooks/redux";
import Back from "../components/Back/Back";
import SettingsInformation from "../components/SettingsInformation/SettingsInformation";
import FieldsSettings from "../components/FieldsSettings/FieldsSettings";
export  default  function Settings(){
    const {MainUser} = useAppSelector(state => state.userReducer);
    return(
        <div  className={"settings"}>
            <div className={"settings-profile"}>
                <Back/>
                <Profile name={MainUser.name}/>
            </div>
            <SettingsInformation/>
            <FieldsSettings/>
        </div>
    );
}