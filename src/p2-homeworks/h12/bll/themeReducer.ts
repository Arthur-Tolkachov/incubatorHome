const CHANGE_THEME = "CHANGE_THEME"

type ActionType = ChangeThemeType

export type StateType = {
    theme: string
}

const initState:StateType = {
    theme: ""
};

export const themeReducer = (state = initState, action: ActionType):StateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.value};
        }
        default: return state;
    }
};

type ChangeThemeType = {type: typeof CHANGE_THEME, value:string}
export const changeThemeC = (value:string):ChangeThemeType => ({type: CHANGE_THEME, value}); // fix any