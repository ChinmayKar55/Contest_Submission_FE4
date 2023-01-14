import React from 'react'
function CounterComponent(props){
    
    
    return(
    <div className="buttons">
       
        {props.count === 0 ? <p id="error-msg">Error: Cannot go below 0</p> : ""}
        <button onClick={()=> props.setCount(props.count - 1)}>Decrement</button>
        <button onClick={()=> props.setCount(props.count + 1)}>Increment</button>
        {props.count > 10 ? <button id="external-btn" onClick={() => props.setCount(0)}>GO BACK TO 0</button> : ""} 
    </div>
    );
}
export default CounterComponent;