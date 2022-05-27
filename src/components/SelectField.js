import React from "react";


export default function SelectField({label='',options=[]}){
    return(
        <div>
            <label for='textf'>{label}: </label>
            <select id='textf'>
                {(options.map((op,index)=>(
                    <option key={index}>{op}</option>
                )))}
            </select>
        </div>
    )
}