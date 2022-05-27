import React, { useEffect, useState } from 'react'
import styles from './form.module.css'

import { useForm } from '../../hooks/useForm'


const options = ['text', 'select', 'options']
const initialValue = {
    component: 'text',
    label: '',
    type: 'text',
    options: []
}

export default function Form() {

    const {form,opt,setOption,handleChange,handleAddOption,handleDeleteOption,handleClean,handleSend}= useForm(initialValue)

    

    return (
        <div className={styles.form}>

            <div>
                <label for='component'>Select component: </label>
                <select className={styles.select} value={form.component} name='component' id ='component' onChange={(e) => handleChange(e)}>
                    {options.map((op, index) => (
                        <option key={index} value={op} selected={(op == form.component)}>{op}</option>
                    ))}
                </select>

            </div>
            <div>

                <label for='formlabel'>Field label: </label>
                <input id='formlabel' value={form.label} onChange={(e) => handleChange(e)} name='label' />
            </div>

            {(form.component === 'text') ?
                <div>
                    <label for='type'>Select field type: </label>
                <select className={styles.fieldType} value={form.type} onChange={(e) => handleChange(e)} name='type' id='type'>
                    <option value='text' selected={(form.type == 'text')}>Text</option>
                    <option value='password' selected={(form.type == 'password')}>Password</option>
                </select>
                </div>
                :
                <div>
                    <label for='labeloption'>Add option: </label>
                    <input id='labeloption' value={opt} onChange={(e) => setOption(e.target.value)} />
                    <button onClick={()=>handleAddOption()}>Add option</button>
                </div>
            }

            <div className={styles.optionVisor}>
                <table style={{ border: '1px solid gray', width: '95%', marginTop: '20px', marginBottom: '15px' }}>
                    <th>Option value</th>
                    <th>Actions</th>
                    <tbody>

                    {form.options.map((op, index) => (
                        <tr key={index}>
                            <td>{op}</td>
                            <td>
                                <button onClick={()=>handleDeleteOption(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>


            <div className={styles.buttons}>

                <button onClick={()=>handleClean()}>Clear</button>
                <button onClick={()=>handleSend()}>Add field </button>
            </div>

        </div>
    )
}