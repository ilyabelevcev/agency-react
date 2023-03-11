import React from "react";
import classes from "./MyInput.module.sass"

const MyInput = (props) => {
    return (
        <input className={`${props.input} ${classes.myInput}`} {...props}/>
    )
}

export default MyInput