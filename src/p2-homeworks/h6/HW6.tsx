import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import Title from "../h4/common/Title/Title";
import s from './HW6.module.css';

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        setValue(restoreState("editable-span-value", value))
    };

    return (
        <section>
            <Title title="homeworks 6" count="1"/>

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <div className={s.icon}>
                    <div className={s.mouseWr}>
                        <div className={s.mouse}>
                            <div className={s.mouseButtons}>
                                <div className={s.leftBtn}></div>
                                <div className={s.rightBtn}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.inputWr}>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : "Тут может быть Ваш текст, а может и не быть ¯\\_(ツ)_/¯", className: s.textField}}
                    />
                </div>
                <div className={s.buttonsWr}>
                    <SuperButton className={s.saveBtn} onClick={save}>save</SuperButton>
                    <SuperButton className={s.restoreBtn} onClick={restore}>restore</SuperButton>
                </div>
            </div>


        </section>
    );
}

export default HW6;
