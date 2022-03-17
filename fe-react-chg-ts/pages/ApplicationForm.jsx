import React, { useState } from "react";
import { useEffect } from "react";
import FormikContainer from './FormikContainer'
import ApplicationStatus from './ApplicationStatus'

const ApplicationForm = ({ lenderSlug, name, fields }) => {

    return (
        <>
            <FormikContainer name={name} fields={fields} lenderSlug={lenderSlug}/>
        </>)
}

export default ApplicationForm

