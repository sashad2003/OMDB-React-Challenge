import React from 'react';
import ButtonStyle from "./ButtonStyle";

const Button = (props) => {
    return (
        <ButtonStyle
            type={props.type || 'button'}
            onClick={props.onClick}
            className={props.className}
            disabled={props.disabled}
        >
            {props.children}
        </ButtonStyle>
    )
}

export default Button;