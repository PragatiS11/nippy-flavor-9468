import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {userReducer} from "./Admin/userReducer"
import thunk from "redux-thunk"
import {reducer as AuthReducer} from "./Auth/reducer"
import {reducer as DonationReducer} from "./Donation/reducer"



const rootReducer=combineReducers({
   userReducer,AuthReducer,DonationReducer
})



export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))