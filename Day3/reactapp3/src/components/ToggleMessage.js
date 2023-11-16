import React,{useState} from "react";
function ToggleMessage(){
    const [showMessage,setShowMessage]=useState(false);
    const toggleMessage=()=>{
        setShowMessage(!showMessage);
    };
    return(
        <div>
            <h1>Toogle message</h1>
            <hr></hr>
            <button onClick={toggleMessage}>
                {showMessage ? "Hide Message":"Show Message"}
            </button>
            {showMessage && <p>Hi! How are you!!!</p>}
        </div>
    );
}
    export default ToggleMessage;