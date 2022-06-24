import React, {useState} from 'react'; 
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext=React.createContext();

function App() {
  console.log("Rendering App");
  const [theme,setTheme] = useState('blue');
  return (
  <ThemeContext.Provider value={{backgroundColor:theme}}>
    Counter
    <Counter initialCount={0}/>
    Counter Hooks
    <CounterHooks initialCount={0}/>
    <button onClick={()=>setTheme(prevTheme=>{
      return prevTheme==='blue'?'orange':'blue';
    })}>Theme Change</button>
  </ThemeContext.Provider>
  );
}

export default App;
