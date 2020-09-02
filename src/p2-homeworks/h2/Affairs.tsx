import React from "react";
import Affair from "./Affair";
import style from './Affairs.module.css'
import {FilterType, AffairType} from "./HW2";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (_id:number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")};
    const setHigh = () => {props.setFilter("high")};
    const setMiddle = () => {props.setFilter("middle")};
    const setLow = () => {props.setFilter("low")};

    return (
        <div className={style.wrapper}>

            {mappedAffairs}

            <div className={style.buttonsWrapper}>
                <button className={style.allBtn} onClick={setAll}>All</button>
                <button className={style.highBtn} onClick={setHigh}>High</button>
                <button className={style.middleBtn} onClick={setMiddle}>Middle</button>
                <button className={style.lowBtn} onClick={setLow}>Low</button>
            </div>
        </div>
    );
}

export default Affairs;
