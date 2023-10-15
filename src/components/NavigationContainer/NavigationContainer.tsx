import React from "react";
import ModelElem from "../ModelElem/ModelElem";

interface INavigationContainer{
    navigationModelElems: {text:string,src:string,elements: any}[]
}

export  default function NavigationContainer({navigationModelElems}:INavigationContainer){
    return(
        <div>
            {navigationModelElems.map(elem => {
                return( <ModelElem src={elem.src} text={elem.text}>
                    {elem.elements}
                </ModelElem>);
            })}
        </div>
    );
}