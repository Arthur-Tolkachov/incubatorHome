import React from "react";
import Message from "./Message";
import Title from "../h4/common/Title/Title";

export type TaskType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: TaskType = {
    avatar: "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/original/oapgW_Fp_400x400.jpg",
    name: "Facebook",
    message: "React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries.",
    time: "22:00",
};

function HW1() {
    return (
        <section>
            <Title title="homeworks 1" count="1"/>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

        </section>
    );
}

export default HW1;
