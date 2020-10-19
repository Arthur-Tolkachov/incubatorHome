import React, {useState} from 'react';
import s from './Watch.module.css';
import {stylesType} from '../../p2-homeworks/h9/Clock';

type PropsType = {
    styles?: stylesType,
    lines?: string
}

const Watch: React.FC<PropsType> = ({styles, lines}) => {
    let [hourDeg, setHourDeg] = useState<number>(0)
    let [minDeg, setMinDeg] = useState<number>(0)
    let [secDeg, setSecDeg] = useState<number>(0)

    setTimeout(() => {
        let time = new Date()
        let hours = +time.getHours() > 12 ? +time.getHours() - 12 : +time.getHours()

        setHourDeg((hours * 60 + +time.getMinutes()) * 360 / 720)
        setMinDeg(+time.getMinutes() * 360 / 60)
        setSecDeg(+time.getSeconds() * 360 / 60)
    }, 1000)


    const classes = styles ? styles : {}
    return (
        <div>
            <div className={s.watchBody} style={classes.clockBody && classes.clockBody}>
                <div className={s.watchArrows}>
                    <div className={`${s.arrowH} ${secDeg !== 0 && s.arrowsAnimate}`}
                         style={{transform: `rotate(${hourDeg}deg)`}}>
                        <span style={classes.hours}></span>
                    </div>
                    <div className={`${s.arrowM} ${secDeg !== 0 && s.arrowsAnimate}`}
                         style={{transform: `rotate(${minDeg}deg)`}}>
                        <span style={classes.minutes}></span>
                    </div>
                    <div className={`${s.arrowS} ${secDeg !== 0 && s.arrowsAnimate}`}
                         style={{transform: `rotate(${secDeg}deg)`}}>
                        <span style={classes.seconds}></span>
                    </div>
                </div>
                <div className={s.markup}>
                    <span className={s.topH} style={classes.digits}>12</span>
                    <span className={s.rightH} style={classes.digits}>3</span>
                    <span className={s.bottomH} style={classes.digits}>6</span>
                    <span className={s.leftH} style={classes.digits}>9</span>
                </div>

                {lines === "five"
                    ? <>
                        <div className={`${s.markup} ${s.lines}`}>
                            <span className={`${s.line} ${s.topLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.rightLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.bottomLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.leftLine}`} style={classes.markup}></span>
                        </div>
                        <div className={`${s.markup} ${s.lines2}`}>
                            <span className={`${s.line} ${s.topLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.rightLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.bottomLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.leftLine}`} style={classes.markup}></span>
                        </div>
                        <div className={`${s.markup} ${s.lines3}`}>
                            <span className={`${s.line} ${s.topLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.rightLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.bottomLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.leftLine}`} style={classes.markup}></span>
                        </div>
                        <div className={`${s.markup} ${s.lines4}`}>
                            <span className={`${s.line} ${s.topLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.rightLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.bottomLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.leftLine}`} style={classes.markup}></span>
                        </div>
                        <div className={`${s.markup} ${s.lines5}`}>
                            <span className={`${s.line} ${s.topLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.rightLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.bottomLine}`} style={classes.markup}></span>
                            <span className={`${s.line} ${s.leftLine}`} style={classes.markup}></span>
                        </div>
                    </>
                    : lines === "two"
                        ? <>
                            <div className={`${s.markup} ${s.lines}`}>
                                <span className={`${s.line} ${s.topLine}`} style={classes.markup}></span>
                                <span className={`${s.line} ${s.rightLine}`} style={classes.markup}></span>
                                <span className={`${s.line} ${s.bottomLine}`} style={classes.markup}></span>
                                <span className={`${s.line} ${s.leftLine}`} style={classes.markup}></span>
                            </div>
                            <div className={`${s.markup} ${s.lines2}`}>
                                <span className={`${s.line} ${s.topLine}`} style={classes.markup}></span>
                                <span className={`${s.line} ${s.rightLine}`} style={classes.markup}></span>
                                <span className={`${s.line} ${s.bottomLine}`} style={classes.markup}></span>
                                <span className={`${s.line} ${s.leftLine}`} style={classes.markup}></span>
                            </div>
                        </>
                        : <></>
                }
            </div>
        </div>
    )
}

export default Watch;