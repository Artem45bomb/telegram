import React from "react";
import Fields from "../Field/Fields";
import {useAppSelector} from "../../hooks/redux";

export  default function SettingsInformation(){
    const {fieldsInformation} = useAppSelector(state => state.fieldReducer)
    return(
        <div className={"settings-information"}>
            {fieldsInformation.map((field) => {
                return <Fields value={field.value} poleName={field.poleName}/>
            })}
        </div>
    );
}