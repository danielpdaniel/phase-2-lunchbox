import React from "react"

function FormInput({ label, name, value, placeholder, onChange, children}){
    return(
        <label>{label}
            <input type="text" name={name} value={value} placeholder={placeholder} onChange={onChange}/>
            {children}
        </label>
    )
}

export default FormInput