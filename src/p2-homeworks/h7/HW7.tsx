import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import Title from "../h4/common/Title/Title";
import s from "./HW7.module.css"

const arr: Array<string> = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    return (
        <section>
            <Title title="homeworks 7" count="2"/>

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <div className={s.selectWr}>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                        className={s.select}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={"radio"}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>

        </section>
    );
}

export default HW7;
