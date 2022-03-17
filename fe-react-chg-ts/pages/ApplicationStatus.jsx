import { FormLabel, TextField } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";

const ApplicationStatus = ({status}) => {

    return (

        <div className="">
            <h3>
            {status === 'accepted' ? 
             'Your loan application have been accepted'
            :
             "Sorry, your locan application have been rejected"}
             </h3>
        </div>
    )
}

export default ApplicationStatus

