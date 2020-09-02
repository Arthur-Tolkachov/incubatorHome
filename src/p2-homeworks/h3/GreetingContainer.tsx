import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {v1} from "uuid";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name:string, _id:string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError("")
    };
    const addUser = () => {
        if(name.trim()) {
            alert(`Hello  ${name}!`);
            addUserCallback(name, v1());
            setName("");
        } else {
            alert(`Не, так не пойдет, надо что то написать`);
            setError("Поле не должно быть пустым")
            setName("");
        }
    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            users={users}
        />
    );
}

export default GreetingContainer;
