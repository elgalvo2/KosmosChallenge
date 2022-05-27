import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeField } from "../../redux/slices/forms.feature";
import OptionsField from "../OptionsField";
import SelectField from "../SelectField";
import TextField from "../TextField";
import styles from './formVisor.module.css'

export default function FormVisor() {

    const { form_fields } = useSelector(state => state.formsFeature)
    const dispatch = useDispatch()



    return (
        <div className={styles.formContainer}>

            {form_fields.map((field, index) => {
                switch (field.component) {
                    case 'text':
                        return (
                            <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
                                <TextField label={field.label} type={field.type} />
                                <button onClick={()=>dispatch(removeField(field._id))} >Delete field</button>
                            </div>
                        )
                    case 'select':
                        return (
                            <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
                                <SelectField label={field.label} options={field.options} />
                                <button onClick={()=>dispatch(removeField(field._id))} >Delete field</button>
                            </div>
                        )
                    case 'options':
                        return (
                            <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
                                <OptionsField label={field.label} options={field.options} />
                                <button onClick={()=>dispatch(removeField(field._id))} >Delete field</button>
                            </div>
                        )
                    default:
                        return (<>No fields defined</>)
                }
            })}
        </div>
    )
}