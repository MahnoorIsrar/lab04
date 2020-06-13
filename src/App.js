import React, {useState} from 'react';//decleare ReactHook
import './App.css';
import { Message } from './Message';// calling parent class

export default function App() {
  let[count, setCount] = useState(0)//useState is a type of ReactHook
  let[isMorning, setMorning] = useState(true)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day Time ={isMorning ? 'Morning' : 'Night'}</h1>

       <Message count={count}/> 
       <br/>
       <button onClick={ //created button
         ()=> setCount(count+10) //increment by 10 from count
         }> 
         Update Counter
         </button>

         <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}


