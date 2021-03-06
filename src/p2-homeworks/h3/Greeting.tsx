import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import {UserType} from "./HW3";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.success;
    const usersData = users.map(u => {
        return (
            <div className={s.usersWr} key={u._id}>
                <div className={s.userData}><span className={s.userDataTitle}>public ID:</span><span className={s.userDataContent}>{u._id}</span></div>
                <div className={s.userData}><span className={s.userDataTitle}>User name:</span><span className={s.userDataContent}>{u.name}</span></div>
            </div>
        )
    })
    return (
        <div className={s.wrapper}>
            <div className={s.input}>
                <SuperInputText value={name} onChange={setNameCallback} className={inputClass} error={error} placeholder="Enter your name"/>
                {/*<span className={s.errorType}>{error}</span>*/}
                <SuperButton onClick={addUser}>add</SuperButton>
                <span className={s.totalCount}>{totalUsers}</span>
            </div>
            <div className={s.data}>
                <h5>Users list</h5>
                {usersData}
            </div>
        </div>
    );
}

export default Greeting;
