import {elementApi} from "../../../api/api";
import axios from "axios";
import {Dispatch} from "redux";

type DataType={
    id:number,
    rowName: string
}
export const elementReducer=(state:any,action:any)=>{
switch (action.type){
    default:return {...state}
}
}

export const takeIdTC= () => async (dispatch: Dispatch)=>{
    try {

        const res=await elementApi.createEntity()
        if(res){
            console.log(res)
        }
    }catch (e){
        console.log(e)
        }
    }
