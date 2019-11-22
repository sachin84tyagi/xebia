import React, { Component } from 'react';

const Circle = (props) => {
    console.log(props)
    return (<div style={{
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        fontSize: "50px",
        color: "#fff",
        lineHeight: "500px",
        textAlign: "center",
        background: "#000"
    }}>{props.childern}</div>);
}

export default Circle;