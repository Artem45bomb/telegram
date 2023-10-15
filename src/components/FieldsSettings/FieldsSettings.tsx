import React from "react";
import ModelElem from "../ModelElem/ModelElem";
import {useAppSelector} from "../../hooks/redux";
import './FieldSettings.css';
export  default  function FieldsSettings(){
    const {fieldsSettings,fieldSpecialSettings} = useAppSelector(state => state.fieldReducer);
    const countsElem = fieldSpecialSettings.length -1

    return(
        <>
            <div className={"field-settings"}>

                {
                    fieldsSettings.map(elem=>{
                        return <ModelElem src={elem.src} text={elem.text} attribute={"settings-elem"}>{elem.elements}</ModelElem>
                    })
                }


            </div>
            <div className={"field-special"}>
                    {
                        fieldSpecialSettings.filter((elem,index) => index !== countsElem).map(elem=>{
                            return <ModelElem src={elem.src} text={elem.text} attribute={"settings-elem "}>{elem.elements}</ModelElem>
                        })
                    }
                    <ModelElem src={fieldSpecialSettings[countsElem].src} text={fieldSpecialSettings[countsElem].text} attribute={"settings-elem radius"}>
                        {fieldSpecialSettings[countsElem].elements}
                    </ModelElem>
            </div>
        </>

    );
}