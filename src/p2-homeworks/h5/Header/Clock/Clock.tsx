import React, {useState} from "react";
import s from './Clock.module.css';



const Clock = () => {
    let [time,setTime] = useState(new Date())
    // setInterval(() => setTime(new Date()), 1000)

    return (
        <span className={s.time}>{ `${time.toLocaleTimeString()}` }</span>
    )
}

export default Clock;