import {initialPeopleType} from "../HW8";

export const SORT_UP = 'SORT_UP'
export const SORT_DOWN = 'SORT_DOWN'
export const CHECK18 = 'CHECK18'

type ActionType = SortUpActionType | SortDownActionType | CheckActionType
type SortUpActionType = {
    type: typeof SORT_UP
    payload: string
}
type SortDownActionType = {
    type: typeof SORT_DOWN
    payload: string
}
type CheckActionType = {
    type: typeof CHECK18
    payload: number
}


export const homeWorkReducer = (state: Array<initialPeopleType>, action: ActionType):Array<initialPeopleType> => {
    switch (action.type) {
        case SORT_UP: {
            return [...state.sort((a: initialPeopleType, b: initialPeopleType) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })]
        }
        case SORT_DOWN: {
            return [...state.sort((a: initialPeopleType, b: initialPeopleType) => {
                if (a.name > b.name) {
                    return -1
                } else if (a.name < b.name) {
                    return 1
                } else {
                    return 0
                }
            })]
        }
        case CHECK18:
            return [...state.filter((a: initialPeopleType) => a.age >= action.payload)]
        default:
            return state
    }
};

