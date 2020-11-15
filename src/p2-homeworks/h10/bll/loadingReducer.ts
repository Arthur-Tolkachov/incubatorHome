const LOADING = "LOADING"

type ActionType = LoadingType

export type StateType = {
    isLoading: boolean
}

const initState:StateType = {
    isLoading: false
};

export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {...state, isLoading: action.payload};
        }
        default:
            return state;
    }
};

type LoadingType = {
    type: typeof LOADING
    payload: boolean
}
export const loadingAC = (payload: boolean): LoadingType => ({type: LOADING, payload}); // fix any