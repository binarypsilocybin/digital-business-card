import React from "react";
import Facebook from "../images/Facebook Icon.png"
import GitHub from "../images/GitHub Icon.png"
import Instagram from "../images/Instagram Icon.png"
import Twitter from "../images/Twitter Icon.png"


export default function Footer(){
    return (
       <div className="footer">
           <img src={Facebook} alt=""/>
           <img src={GitHub} alt=""/>
           <img src={Instagram} alt=""/>
           <img src={Twitter} alt=""/>
       </div>
    ) 
}