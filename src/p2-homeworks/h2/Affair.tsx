import React from "react";
import {AffairType} from "./HW2";
import style from "./Affair.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    return (
        <div className={style.wrapper}>
            <div className={style.name}>
                <span>{props.affair.name}</span>
            </div>
            <button className={style.button} onClick={deleteCallback}>remove</button>
        </div>
    );
}

export default Affair;
