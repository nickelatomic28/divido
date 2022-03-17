import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup  from 'yup'
import Input from './Input'
import Select from './Select'
import Checkbox from './CheckBox'

function FormikControl(props) {
    const { control, ...rest } = props
    switch(control) {
        case 'text' :
            return <Input {...rest}/>
        case 'select' :
            return <Select {...rest}/>
        case 'checkbox' :
            return <Checkbox {...rest}/>
        default : 
            return null
            
    }
}

export default FormikControl

