import React, { useState} from "react";
import './MainPage.css';
import NavigationPanel from "../components/NavigationPanel/NavigationPanel";
import ModelElem from "../components/ModelElem/ModelElem";
import Header from "../components/Header/Header";
import ProfileImage from "../components/ProfileImage/ProfileImage";
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import { useAppSelector} from "../hooks/redux";
import NavigationContainer from "../components/NavigationContainer/NavigationContainer";
import Sections from "../components/Sections/Sections";


export  default function MainPage(){
    const [state,setState] =useState(false);
    const {folders,activeElemPosition} = useAppSelector(state => state.folderReducer)
    const {Users,MainUser} = useAppSelector(state=> state.userReducer);

    const {fieldsNavigation} = useAppSelector(state => state.fieldReducer);

    return(
        <div style={{}} onClick={() => state ? setState(false) : ''}>
            <Header setState={setState} folders={folders}  />
            <NavigationPanel state={state} >
                <ProfileImage name={MainUser.name}/>
                <NavigationContainer navigationModelElems={fieldsNavigation}></NavigationContainer>
                <ModelElem src={"/"} text={"Opportunities Telegram"} attribute={"special"}>
                    {<AiOutlineQuestionCircle/>}
                </ModelElem>
            </NavigationPanel>
           <Sections Users={Users} activeElemPosition={activeElemPosition}/>
        </div>
    );
}