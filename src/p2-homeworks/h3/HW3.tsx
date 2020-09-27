import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import Title from "../h4/common/Title/Title";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState <Array<UserType>>([]);

    const addUserCallback = (name: string, _id: string) => {
        setUsers([...users, {_id, name}]);
    }

    return (
        <section>
            <Title title="homeworks 3" count="1"/>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

        </section>
    );
}

export default HW3;
