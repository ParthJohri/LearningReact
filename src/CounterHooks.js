import React, {useState, useContext} from 'react';
import { ThemeContext } from './App';
/*
Using props
export default function CounterHooks(props){
    return (
        <div>
            <button>-</button>
            <span>{props.initialCount}</span>
            <button>+</button>
        </div>
    )
}
*/

// Using Object DeConstruction
// {} - anything inside curly brackets means javascript code

/* Method - 1

export default function CounterHooks({initialCount}){
    
    const[state,setState]=useState({count:initialCount});
    
    return (
        <div>
            <button onClick={()=>setState(previousState=>{
                return{count:previousState.count-1}
                })}>-</button>
            <span>{state.count}</span>
            <button onClick={()=>setState(previousState=>{
                return{count:previousState.count+1}
                })}>+</button>
        </div>
    )
}
*/

// Method - 2
// Here we have not created any object
export default function CounterHooks({initialCount}){
    
    const [count,setCount]=useState(initialCount);
    const style=useContext(ThemeContext);
    return (
            <div>
                <button style={style} onClick={()=>setCount(previousCount => previousCount - 1)}>-</button>
                <span>{count}</span>
                <button style={style} onClick={()=>setCount(previousCount => previousCount + 1)}>+</button>
            </div>
            )
}