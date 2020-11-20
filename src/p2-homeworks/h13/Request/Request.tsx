import React, {ChangeEvent, useState} from "react";
import s from "./Request.module.css";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI, TestResponseType} from "../../../api/api";
import Message from "../Message/Message";
import Preloader from "../../../common/Preloader/Preloader";


const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [state, setState] = useState<TestResponseType>(null)
    const [isMessage, setIsMessage] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const handler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }
    const sendRequest = () => {
        setLoading(true)
        RequestAPI.sendRequest(checked).then(res => {
            setState(res.data)
            setError(false)
        }).catch(e => {
            setState(e.response.data)
            setError(true)
        }).finally(() => {
                setIsMessage(true)
                setLoading(false)
            }
        )
    }
    console.log(state)
    return (
        <div className={s.wrapper}>
            {loading
                ? <Preloader/>
                : <SuperButton className={s.btn} onClick={sendRequest}>Click</SuperButton>}

            <div className={s.checkbox}>
                <SuperCheckbox checked={checked} onChange={handler}>Чекбокс</SuperCheckbox>
            </div>
            {isMessage && <Message setIsMessage={setIsMessage} text={state} error={error}/>}
        </div>
    )
}

export default Request;