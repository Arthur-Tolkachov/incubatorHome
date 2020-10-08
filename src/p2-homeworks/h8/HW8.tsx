import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import Title from "../h4/common/Title/Title";
import s from './HW8.module.css';

export type initialPeopleType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<initialPeopleType> = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState <Array<initialPeopleType>>(initialPeople);

    const finalPeople: Array<JSX.Element> = people.map(p => (
        <div className={s.item} key={p._id}>
            <div className={s.name}>{p.name}</div>
            <div className={s.age}>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT_UP", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT_DOWN", payload: "down"}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: "CHECK18", payload: 18}))

    return (
        <section>
            <Title title=" homeworks 8" count="1"/>


            {/*should work (должно работать)*/}

            <div className={s.wrapper}>
                <div className={s.people}>
                    {finalPeople}
                </div>

                <div className={s.buttons}>
                    <SuperButton className={s.btn} onClick={sortUp}>sort up</SuperButton>
                    <SuperButton className={s.btn} onClick={sortDown}>sort down</SuperButton>
                    <SuperButton className={s.btn} onClick={check18}>check 18</SuperButton>
                </div>


            </div>


        </section>
    );
}

export default HW8;
