import { combineReducers } from "redux";
import { currencyReducer } from "./reducer";

const reducers = combineReducers({
    allCurrencies : currencyReducer, 
});
export default reducers