import React from "react";
import ErrorStyle from "./ErrorStyle";

const Error = (props) =>{
    return (
        <ErrorStyle>{props.message}</ErrorStyle>
    )
}

export default Error;