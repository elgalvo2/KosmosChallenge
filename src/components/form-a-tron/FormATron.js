import React from "react";
import Form from "../form/Form";
import FormVisor from "../form_visor/FormVisor";
import styles from './formATron.module.css'
import logo from '../../logo.svg'
export default function FormATron() {
    return (
        <div >
            <div className={styles.back}>
            <h3 >Form-a-tron</h3>
            <img src={logo} alt="logo" />
            </div>
            
            <div className={styles.formAtron}>
                <div className={styles.visor}>
                    <FormVisor />

                </div>
                <div className={styles.form}>
                    <Form />

                </div>
            </div>
        </div>
    )
}