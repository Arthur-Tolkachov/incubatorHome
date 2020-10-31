import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from "./Clock.module.css";
import Watch from "../../common/Watch/Watch";

export type stylesType = {
    [key: string]: {
        [key: string]: string
    }
}

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearTimeout(timerId)
    }

    const start = () => {
        stop()
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
    let mm = date.getMonth() + 1
    let yy = date.getFullYear()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    const stringTime = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`; // fix with date
    const stringDate = `${dd < 10 ? "0" + dd : dd}.${mm < 10 ? "0" + mm : mm}.${yy}`; // fix with date


    const styles: stylesType = {
        clockBody: {
            width: "150px",
            height: "150px",
            background: "transparent url('https://static01.nyt.com/images/2020/04/13/nyregion/00nyvirus-streets001/00nyvirus-streets001-mediumSquareAt3X.jpg') center center no-repeat",
            backgroundSize: "cover",
            boxShadow: "inset 0 0 0 100px rgba(255, 255, 255, .3), 0 0 0 20px rgba(0, 0, 0, .3), 0 0 0 10px rgba(0, 0, 0, .3)"
        },
        seconds: {
            height: "50px"
        },
        minutes: {
            height: "50px"
        },
        hours: {
            height: "35px"
        },
        markup: {
            backgroundColor: "#000"
        },
        digits: {
            color: "#000",
            backgroundColor: "rgba(255, 255, 255, .5)",
            borderRadius: "50%"
        }
    }
    const styles1: stylesType = {
        clockBody: {
            width: "150px",
            height: "150px",
            background: "transparent url('https://www.jetsetter.com/wp-content/uploads/sites/7/2018/07/SQ1nRHbL-1380x690.jpg') center center no-repeat",
            backgroundSize: "cover",
            boxShadow: "inset 0 0 0 100px rgba(255, 255, 255, .3), 0 0 0 20px rgba(0, 0, 0, .3), 0 0 0 10px rgba(0, 0, 0, .3)"
        },
        seconds: {
            height: "50px"
        },
        minutes: {
            height: "50px"
        },
        hours: {
            height: "35px"
        },
        markup: {
            backgroundColor: "#000"
        },
        digits: {
            color: "#000",
            backgroundColor: "rgba(255, 255, 255, .5)",
            borderRadius: "50%"
        }
    }
    const styles2: stylesType = {
        clockBody: {
            width: "150px",
            height: "150px",
            background: "transparent url('https://media.timeout.com/images/105617718/750/422/image.jpg') center center no-repeat",
            backgroundSize: "cover",
            boxShadow: "inset 0 0 0 100px rgba(255, 255, 255, .3), 0 0 0 20px rgba(0, 0, 0, .3), 0 0 0 10px rgba(0, 0, 0, .3)"
        },
        seconds: {
            height: "50px"
        },
        minutes: {
            height: "50px"
        },
        hours: {
            height: "35px"
        },
        markup: {
            backgroundColor: "#000"
        },
        digits: {
            color: "#000",
            backgroundColor: "rgba(255, 255, 255, .5)",
            borderRadius: "50%"
        }
    }


    return (
        <div className={style.wrapper}>
            <div className={style.timerWrapper}>
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

            <div className={style.otherWatches}>
                <div className={style.watchesWr}>
                    <Watch styles={styles}/>
                </div>
                <div className={style.watchesWr}>
                    <Watch styles={styles1} lines="two"/>
                </div>
                <div className={style.watchesWr}>
                    <Watch styles={styles2} lines="five"/>
                </div>
            </div>
        </div>
    );
}

export default Clock;
