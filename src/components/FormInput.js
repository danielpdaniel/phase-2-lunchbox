import React from "react"

function FormInput({ label, name, value, placeholder, onChange, children}){

    //Uses props passed down by AddFood component to render labeled input field + update state in AddFood
    return(
        <label>{label}
            <input type="text" name={name} value={value} placeholder={placeholder} onChange={onChange}/>
            {children}
        </label>
    )
}

export default FormInput