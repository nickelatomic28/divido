import React from 'react'
import { Field, ErrorMessage } from 'formik'
import Error from './Error'
import * as Yup  from 'yup'
import { Grid } from '@material-ui/core';
import styles from './styles.module.css'

function CheckBox(props) {

    const { label, name, options, ...rest } = props
    return (
        <div className={styles.item}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <div>
                <Field  id={name} name={name} >
                    {
                        (props) => {
                            return <input className={styles.contractCheck} type="checkbox" {...props.field}/>
                        }
                    }
                </Field>
                <ErrorMessage name={name} component={Error}/>
            </div>
        </div>
    )
}

export default CheckBox
