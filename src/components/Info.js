import React from "react";
import reactImg from "../images/Rectangle 90.png"

export default function Info(){
    return (
           <div className="info">
            <div className="">
             <img src={reactImg} />
            <div className="info-details">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <p>laurasmmith.website</p>
            </div>
            <div className="info-buttons">
                <button className="info--email">Email</button>
                <button className="info--linkedin">Linkedin</button>
            </div>
            </div>
           </div>
    ) 
}