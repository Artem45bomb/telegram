import React from "react";
import ContainerChat from "../ContainerChat/ContainerChat";
import Profile from "../Profile/Profile";
import {IUser} from "../../models/IUser";

interface ISections{
    Users: IUser[],
    activeElemPosition: number,
}
export  default  function Sections({Users,activeElemPosition}:ISections){
  return(

      <div className={"sections"} style={{left:`${activeElemPosition * -100}vw`}}>
          <section>
              {
                  Users.map(user => {
                      return(
                          <ContainerChat key={user.id} name={user.name}>
                              <Profile name={user.name}/>
                          </ContainerChat>
                      );
                  })
              }
          </section>
          <section>
              {

              }
          </section>
      </div>


  );
}