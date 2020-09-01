import React from "react";
import Message from "./Message";

export type TaskType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: TaskType = {
    avatar: "https://www.vikids.ru/images/default_avatar.png?avatar_cached_at=1562752082",
    name: "Ivan",
    message: "hello hello hello hello hello",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
