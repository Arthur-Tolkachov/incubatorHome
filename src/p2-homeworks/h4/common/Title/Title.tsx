import React from 'react';
import s from './Title.module.css';
import reactIcn from '../../../../assets/react.png';

type PropsType = {
    title: string
    count: string
}

const Title = (props:PropsType) => {
    let count = s.light
    if(props.count === "1") {
        count = s.dark
    }

    return (
        <div className={s.wrapper}>
            <h3 className={`${s.title} ${count}`}>{props.title}</h3>
            <img src={reactIcn} alt="react"/>
        </div>
    )
}

export default Title;