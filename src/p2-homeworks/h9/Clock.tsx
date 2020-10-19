import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from "./Clock.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    let dd = date.getDate()
    let mm = date.getMonth()
    let yy = date.getFullYear()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    const stringTime = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`; // fix with date
    const stringDate = `${dd < 10 ? "0" + dd : dd}.${mm < 10 ? "0" + mm : mm}.${yy}`; // fix with date

    return (
        <div className={style.wrapper}>
            <div className={style.timer}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}

                <div className={`${style.date} ${show && style.show}`}>
                    {stringDate}
                </div>

            </div>



            <div className={style.buttons}>
                <SuperButton className={`${style.btn} ${style.green}`} onClick={start}>start</SuperButton>
                <SuperButton className={`${style.btn} ${style.red}`} onClick={stop}>stop</SuperButton>
            </div>

        </div>
    );
}

export default Clock;
