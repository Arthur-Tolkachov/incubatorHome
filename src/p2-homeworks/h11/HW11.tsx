import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import Title from "../h4/common/Title/Title";
import s from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange = (newValue: number | number[]) => {
        if(Array.isArray(newValue)) {
            setValue1(newValue[0])
            setValue2(newValue[1])
        }
    }

    return (
        <section>
           <Title title="homeworks 11" count="1" />
            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <div>
                    <span>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={setValue1}
                    />
                </div>

                <div>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={onChangeRange}
                    />
                    <span>{value2}</span>
                </div>
            </div>


        </section>
    );
}

export default HW11;
