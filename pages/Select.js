import React from 'react'
import { Field, ErrorMessage } from 'formik'
import Error from './Error'
import * as Yup  from 'yup'
import { Grid } from '@material-ui/core';
import styles from './styles.module.css'

function Select(props) {
    const { label, name, options, ...rest } = props
    return (
        <div className={styles.item}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <div>
                <Field className={styles.text_fields} as="select" id={name} name={name} {...rest} >
                    <option key="slect gender" value="">Please select gender</option>
                    {
                        
                        options.map(option => {
                            return (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            )
                        })
                    }
                </Field>
                <ErrorMessage name={name} component={Error}/>
            </div>
        </div>
    )
}

export default Select
