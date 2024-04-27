import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(0)
// let counter=15
const addValue=()=>{
  if(counter<20){
    setcounter(counter+1);
  }
  // console.log("value added",Math.random());
  // counter=counter+1;
  // if(counter==20){
  //   setcounter(counter)
  // }
 
  // setcounter(prevCounter=>prevCounter+1)
 
  // setcounter(counter+1);
  // setcounter(counter)
  console.log("clicked",Math.random())
  console.log(counter)
}
function removValue(){
  if(counter>0){
    setcounter(counter-1)
  }
  // setcounter(counter-1);
}
  return (
    
    <>
    <h1>gaurav and code</h1>
    <h2>counter value :{counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <br />
    <button onClick={removValue}>Remove value</button>
    </>
  )
}

export default App
