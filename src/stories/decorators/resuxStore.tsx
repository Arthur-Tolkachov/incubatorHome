import React from 'react';
import {combineReducers, createStore} from "redux";
import {loadingReducer} from "../../p2-homeworks/h10/bll/loadingReducer";
import {themeReducer} from "../../p2-homeworks/h12/bll/themeReducer";
import {AppStoreType} from "../../p2-homeworks/h10/bll/store";
import { Provider } from 'react-redux';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
});

const initialGlobalState:AppStoreType = {
    loading: {isLoading: false},
    theme: {theme: ""}
}

export const storyBookStore = createStore(reducers, initialGlobalState)


export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider store={storyBookStore}>{storyFn()}
    </Provider>
)