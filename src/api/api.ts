import axios from "axios"

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com"
})

type BodyType = {
    success: boolean
}

export type TestResponseType = {
    errorText: string
    info: string
    yourBody: BodyType
} | null

export const RequestAPI = {
    sendRequest(success:boolean) {
        return instance.post<TestResponseType>("/auth/test", {success})
    }
}