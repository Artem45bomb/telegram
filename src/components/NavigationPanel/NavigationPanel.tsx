import React from "react";
import './NavigationPanel.css';


interface INavigationPanel{
    children:React.ReactNode,
    state: boolean
}

export  default  function NavigationPanel({children,state}:INavigationPanel){

    const Name = "navigation-panel";
    return(
        <div className={state? Name + ' active' : Name} >
            {children}
        </div>
    );
}