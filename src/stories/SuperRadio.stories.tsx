import React, {useState} from 'react';
import SuperRadio from "../p2-homeworks/h7/common/c6-SuperRadio/SuperRadio";
import s from "../p2-homeworks/h12/HW12.module.css";
import {action} from "@storybook/addon-actions";

export default {
    title: 'RadioBtnExample',
    component: SuperRadio,
}

const actionOnCLick = (action("Enter the btn"))

export const RadioBtn  = () => {
    const [theme, setTheme] = useState<string>("light")
    const themes = ['dark', 'red', 'light']
    const handler = (value:string) => {
        setTheme(value)
        actionOnCLick(value)
    }

    return (
        <SuperRadio name={"theme"}
                    className={s.radio}
                    value={theme}
                    onChangeOption={handler}
                    options={themes}/>
    )
}