    import React from "react";
import styles from './Button.module.css'


function Button(props) {
    return (
        <button className={btnType(props.type)}>{props.text}</button>
    )
}

function btnType(type) {
    if(type == 'norm'){
        return styles.btn
    }else if (type == 'blue'){
        return styles.blue
    }
    else if (type == 'red'){
        return styles.red
    }
}
export default Button;