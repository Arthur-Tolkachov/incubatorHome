import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";
import Title from "./common/Title/Title";

function HW4() {
    const [text, setText] = useState<string>("");
    const error = text ? "" : "заполните поле";
    const showAlert = () => {
        if (error) {
            alert("введите текст...");
        } else {
            alert(text); // если нет ошибки показать текст
            setText("")
        }
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <section>
            <Title title="homeworks 4" count="2"/>

            <div className={s.column}>
                {/*should work (должно работать)*/}
                <div className={s.wrapper}>
                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        placeholder="Введите текст"
                        className={`${s.textInput} ${s.blue}`} // проверьте, рабоет ли смешивание классов
                    />

                    {/*should work (должно работать)*/}
                    <SuperButton
                        red // пропсу с булевым значением не обязательно указывать true
                        onClick={showAlert}
                        className={s.deleteButton}
                    >
                        delete{/*// название кнопки попадёт в children*/}
                    </SuperButton>
                </div>

                {/*should work (должно работать)*/}
                <div className={s.checkBoxWr}>
                    <SuperCheckbox
                        checked={checked}
                        onChangeChecked={setChecked}
                        className={s.checkbox}
                    >
                        запомнить меня {/*// этот текст попадёт в children*/}
                    </SuperCheckbox>

                    {/*// onChange тоже должен работать*/}
                    <SuperCheckbox checked={checked}
                                   onChange={testOnChange}
                                   className={s.checkbox}
                    />
                </div>
            </div>
        </section>
    );
}

export default HW4;
