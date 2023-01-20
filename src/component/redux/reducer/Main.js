import { combineReducers } from "redux";
import { HouseReducer } from "./HouseReducer";


const reducer  =combineReducers({
    allHouses:HouseReducer
})

export default reducer