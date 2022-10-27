import axios from "axios";
import {Dispatch} from "redux";

export const instance = axios.create({
    baseURL: '185.244.172.108:8081/',
    withCredentials: true
})

type dataType={
    id:number,
    rowName:string
}
export const elementApi ={
    createEntity(){
        return instance.post('/v1/outlay-rows/entity/create');
    }
}
