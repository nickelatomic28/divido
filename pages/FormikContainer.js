import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import styles from './styles.module.css'
import { Grid } from '@material-ui/core';
import ApplicationStatus from './ApplicationStatus'

function FormikContainer({state, name, lenderSlug, fields}) {

    const [laonStatus, setLoanStatus] = useState(null);
    const [validationSchema, setValidationSchema]= useState({})
    useEffect(()=>{
        setValidationSchema(getValidationSchema(fields))
    }, [])


    const getInitialState = fields => {
        const initialValues = {}
        const validationObj = {}
            fields.forEach(field => {
                if(typeof fields[0] === 'object') {
                    initialValues[field.name] = ""
                } else {
                    initialValues[field] = ""
                }
            })
            return initialValues
    }

    const getValidationSchema = fields => {
        const validationObj = {}
            fields.forEach(field => {
                if(typeof fields[0] === 'object') {
                    if(field.required){
                        validationObj[field.name] = Yup.string().required('! This field is required')
                    }
                }
            })
            return Yup.object(validationObj)
    }

    const onSubmit = (values, actions) => {
        // console.log('form data ', values)
        fetch(`/api/lenders/${lenderSlug}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
            })
            .then((res) => res.json())
            .then((data) => {
                setLoanStatus(data.decision)
            })
    }

    return (
        <div className={styles.form}>
            <div className={styles.lenderName}>{name}</div>
            {laonStatus === null ?
            <Formik
                initialValues={getInitialState(fields)}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => {
                    return (<Form>
                        <div>
                        {fields.map(field => {
                            if(typeof field === 'object'){
                                return <FormikControl key={field.name} control={field.type} type={field.type} label={field.name} name={field.name} options={field.options}/>
                            } else {
                                return <FormikControl key={field} control="text" type="text" label={field} name={field} />
                            }
                        })}
                        <button disabled={!formik.isValid} className={!formik.isValid ? styles.disablesbtn : styles.submitbtn}  type="submit">Submit</button>
                        </div>
                    </Form>)}
                } 
            </Formik> :
            <ApplicationStatus status={laonStatus}/>}
        </div>
    )
}

export default FormikContainer
