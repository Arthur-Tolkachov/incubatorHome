import React from "react";
import {TaskType} from "./HW1";
import style from './Message.module.css';

function Message(props: TaskType) {
    return (
        <div className={style.messageWrapper}>
            <img className={style.avatar} src={props.avatar} alt="Avatar"/>
            <div className={style.message}>
                <span className={style.name}>{props.name}</span>
                <p className={style.content}>{props.message}</p>
                <span className={style.time}>{props.time}</span>
            </div>
        </div>
    );
}

export default Message;
