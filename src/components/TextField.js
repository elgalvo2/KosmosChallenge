import React from "react";


export default function TextField({label='', type='text'}){
    return(
        <div>
            <label for='textf'>{label}: </label>
            <input id='textf' type={type}/>
        </div>
    )
}