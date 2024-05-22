import axios from "axios"
import { BASE_URL } from "./constants"

export async function getAll(endpoint) {
    try {
        const res= await axios.get(BASE_URL+endpoint)
        return res
    } catch (error) {
        return error
    }
}

export async function getOne(endpoint,id) {
    try {
        const res=await axios.get(BASE_URL+endpoint+`/${id}`)
        return res.data
    } catch (error) {
        return error
    }
}

export async function deleteOne(endpoint,id) {
    try {
        const res=await axios.delete(BASE_URL+endpoint+`/${id}`)
        return res.data
    } catch (error) {
        return error
    }
}

export async function post(endpoint,payload) {
    try {
        const res=await axios.post(BASE_URL+endpoint,payload)
        return res.data
    } catch (error) {
        return error
    }
}   