import React, { useEffect, useLayoutEffect } from "react";
import { observer, inject } from "mobx-react";
import AboutUser from './about-user'

const UserDetails = inject("dashboardStore")(
  observer(props => {

    useEffect(()=> {
      throw new Error("hik")

    },[])

    useEffect(() => {
        dispalyUser(props)
    })


    let dispalyUser = ({ dashboardStore, match }) => {
      let returnDiv;
      console.log(match, dashboardStore.userData);
      if (match.params.id) {
        let user = dashboardStore.userData.find(x => x.id == match.params.id);

           user ?
            returnDiv = 
                <div className="container">
                    {
                        <AboutUser  user = {user} props = {props} />
                    }
                </div>
            
            :
             returnDiv = (<div>
                No data found
               </div>
             )
            
            return returnDiv

      } else {
        return <div>Error occoured</div>;
      }
    };

    return (
      // {
      //     props.dashboardStore.userData.find(x => x.id == id)
      // }

      <div>
        <div>{dispalyUser(props)}</div>
      </div>
    );
  })
);

export default UserDetails;
