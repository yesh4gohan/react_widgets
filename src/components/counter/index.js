// 𝐏𝐫𝐨𝐛𝐥𝐞𝐦 𝐒𝐭𝐚𝐭𝐞𝐦𝐞𝐧𝐭 :

// 1️⃣  Create a counter with Start / Stop / Pause / Reset Functionality
// 2️⃣  Value should range from 0 to N .
// 3️⃣  Buttons should be properly aligned as per current state .
import "./counter.css"
import {useState,useRef, useEffect} from 'react';
const Counter = () => {
    const [count,setCount] = useState(0);
    const timerId = useRef(null);
    useEffect(()=>{
        return () => {
            clearInterval(timerId.current)
            timerId.current = null;
        }
    },[])
    const timerFunc = () => {
        timerId.current = setInterval(()=>{
            setCount((count)=>(count+1))
        },100)
    }
    const onStart = () => {
        if(timerId.current){
            clearInterval(timerId.current)
        }
        timerFunc()
    }
    const onReset = () => {
        if(timerId.current){
            clearInterval(timerId.current)
        }
        setCount(0)
    }
    const onStop = () => {
        if(timerId.current){
            clearInterval(timerId.current)
        }
    }
    const showCountDown = () => {
        return `MM:${Math.floor(count/(10*60)).toString()} SS:${Math.floor((count/10)%60).toString()} MS: ${(count%10)*100}`
    }
    return <div className="container">
        <div>{showCountDown()}</div>
        <div className="btns-container">
            <button onClick = {onStart}>start</button>
            <button onClick = {onStop}>stop</button>
            <button onClick = {onReset}>reset</button>
        </div>
    </div>
}
export default Counter;