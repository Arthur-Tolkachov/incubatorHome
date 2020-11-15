import React, {useEffect} from "react";
import s from "./HW12.module.css";
import Title from "../h4/common/Title/Title";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'light'];

function HW12() {
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    useEffect(() => {
        !theme && dispatch(changeThemeC(themes[2]))
    }, [theme])

    const setTheme = (value:string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <section className={`${theme && s[theme]}`}>
            <Title title="homeworks 12" count="2"/>

            <span className={`${s.default} ${s[theme + "-text"]}`}>
                Some text
            </span>

            {/*should work (должно работать)*/}
            <div className={s.switcher}>
                <SuperRadio name={"theme"}
                            className={s.radio}
                            value={theme}
                            onChangeOption={setTheme}
                            options={themes}/>
            </div>

        </section>
    );
}

export default HW12;
