import React from 'react'
import { Field, ErrorMessage } from 'formik'
import Error from './Error'
import * as Yup  from 'yup'
import { Grid } from '@material-ui/core';
import styles from './styles.module.css'

function Input(props) {
    const { label, name, ...rest } = props
    return (
        <div className={styles.item}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <div>
                <Field className={styles.text_fields} id={name} name={name} {...rest}/>
                <ErrorMessage name={name} component={Error}/>
            </div>
        </div>
    )
}

export default Input
