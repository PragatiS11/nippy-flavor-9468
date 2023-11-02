import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"



const rootReducer=combineReducers({
    adminReducer,productReducer,authReducer
})



export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))