import React from 'react'
import { Field, ErrorMessage } from 'formik'
import * as Yup  from 'yup'
import styles from './styles.module.css'

function Error(props) {
    return (
        <div className={styles.errorMessage}>
           {props.children}
        </div>
    )
}

export default Error
