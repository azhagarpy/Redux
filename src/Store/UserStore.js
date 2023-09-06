import {createStore, combineReducers} from "redux"
import {UserReducer} from "../Reducer/UserReducer"


// you can add more reducers here
const combinereducers = combineReducers({"UserReducer":UserReducer})


// export the combinedreducer as a store
export const UserStore= createStore(combinereducers)
