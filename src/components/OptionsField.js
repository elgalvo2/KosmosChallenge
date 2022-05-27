import React from "react";


export default function OptionsField({label='',options=[]}){
    return(
        <div style={{display:"flex",flexDirection:'row',alignItems:'center'}}>
            <label for='textf' style={{marginRight:'14px'}}>{label}: </label>
            <div id='textf' style={{display:'flex',flexDirection:'row',justifyContent:'center'}} >
                {(options.map((op,index)=>(
                    <div>
                    <label for={index}>{op}</label>
                    <input type='radio' key={index} id={index}/>
                    </div>
                )))}
            </div>
        </div>
    )
}