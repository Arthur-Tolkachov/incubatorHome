import {action} from "@storybook/addon-actions";
import React from "react";
import HW12 from "../p2-homeworks/h12/HW12";
import {ReduxStoreProviderDecorator} from "./decorators/resuxStore";
import "../index.css";

export default {
    title: 'HW12 example',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator]
}

const actionOnCLick = (action("Enter the btn"))

export const HW12Component  = () => {

    return (
        <HW12 />
    )
}

