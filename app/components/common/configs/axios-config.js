import axios from 'axios'
import {AXIOS_API} from '../enums/AXIOS_API'

export default function AxiosConfig(){
    return {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }
}


export const instance = axios.create({ baseURL: {API: AXIOS_API}})
