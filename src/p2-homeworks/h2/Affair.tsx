import React from "react";
import {AffairType} from "./HW2";
import style from "./Affair.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    return (
        <div className={style.wrapper}>
            <div className={style.name}>
                <span>{props.affair.name}</span>
                <span className={style.priority}>({props.affair.priority})</span>
            </div>
            <SuperButton className={style.button} onClick={deleteCallback}>remove</SuperButton>
        </div>
    );
}

export default Affair;
