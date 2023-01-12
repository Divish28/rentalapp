import {ActionType} from '../contents/ActionType'
export const setHouse=(houses)=>{
    return{
        type:ActionType.SET_HOUSES,
        payload:houses,
    }
}

export const setselectedProducts=(houses)=>{
    return{
        type:ActionType.SELECTED_HOUSE,
        payload:houses,
    }
}