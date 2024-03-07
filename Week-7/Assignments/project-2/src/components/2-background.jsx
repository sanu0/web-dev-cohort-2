import React from "react";

export default function BackgroundChanger(){
    return(
        <div>
            <Btns color = {"red"}/>
            <Btns color = {"black"}/>
            <Btns color = {"blue"}/>
            <Btns color = {"purple"}/>
            <Btns color = {"green"}/>
            <Btns color = {"orange"}/>
            <Btns color = {"yellow"}/>
        </div>
    )
}

function Btns({color}){
    console.log(color);
    let isBlack = false;
    if(color == "black")
        isBlack = true;
    return(
        <span>
            <button onClick={()=>{
                document.body.style.backgroundColor = color;
            }} style={{backgroundColor : color, color: isBlack ? "white" : "black" }}> {color} </button>
        </span>
    )
}