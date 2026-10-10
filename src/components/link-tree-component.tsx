"use client";

import {useState} from "react";
import RedirectComponent from "./popUps/redirect-link";
import "../components-style/link-tree-style.css"

export default function LinkTreeComponent() {
    
    const[redirectPopUp, setRedirectPopUp] = useState(false);
    const [platform, setPlatform] = useState("");

    function openRedirectPopUp(event: React.MouseEvent<HTMLLIElement>){
        setPlatform(event.currentTarget.className);
        setRedirectPopUp(true)
    }

    return  (
        <>
        <ul className="link-elem">
            <li className="spotify" onClick={openRedirectPopUp}>spotify</li>
            <li className="youtube" onClick={openRedirectPopUp}>youtube</li>
            <li className="apple music" onClick={openRedirectPopUp}>apple music</li>
            <li className="instagram" onClick={openRedirectPopUp}>instagram</li>
        </ul>

        {redirectPopUp &&
            <RedirectComponent platform={platform} setRedirectPopUp={setRedirectPopUp}/>
        }
        
        </>
    );
}