import { ActionType } from "../action/action";


const initialState = {
    house:[
        {
            id:1,
            type:"2BHK",
            category:"Apartment"
        }
    ]
}
export const HouseReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ActionType.SET_HOUSE:
        return state
        default:
            return state
           
    }

}