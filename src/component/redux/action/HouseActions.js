import { ActionType } from "./action"
export const setHouse = (house)=>{
    return {
        type:ActionType.SET_HOUSE,
        payload:house,
    }
}

export const selectHouses = (houses) =>{
    return {
        type:ActionType.SELECT_HOUSE,
        payload:houses
    }
}