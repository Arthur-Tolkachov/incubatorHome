import React, {useEffect} from "react";
import s from "./Message.module.css";
import {TestResponseType} from "../../../api/api";

type PropsType = {
    setIsMessage: (bool: boolean) => void
    text: TestResponseType
    error: boolean
}

const Message: React.FC<PropsType> = ({setIsMessage, text, error}) => {
    const errorStyle = error ? `${s.message} ${s.error}` : `${s.message}`

    useEffect(() => {
        setTimeout(() => {
            setIsMessage(false)
        },3000)
    }, [])

    return (
        <div className={errorStyle}>
            <span className={s.text}>{text?.errorText}</span>
            <span className={s.info}>{text?.info}</span>
        </div>
    )
}

export default Message