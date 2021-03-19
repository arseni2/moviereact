import {MovieApi} from "../api/api";
import {getGenres, getMovie, GetStateType, setMovie, toggleIsFetching, toggleIsFetchingType} from "./HomeReducer";
import {Dispatch} from "redux";
import {ISUserThunk, LoginThunk, ProfileThunk} from "./AuthReducer";

type initialStateType = {
    isInitilized: boolean
}

let initialState: initialStateType = {
    isInitilized: false
}


export const INITIALZED = "INITIALZED"

type ActionInitType = {
    type: typeof INITIALZED
    //isInitial: boolean
}

type getMovieType = typeof getMovie

type ActionType = ActionInitType | toggleIsFetchingType



const AppReducer = (state = initialState, action: ActionType):initialStateType => {/*InitialStateType*/
    switch(action.type) {
        case INITIALZED: {
            return {...state, isInitilized: true}
        }

        default:
            return state


    }}

let initAction = ()=>({type: INITIALZED})
export const initThunk = function (){
    return async function (dispatch:Dispatch<any>, getState:GetStateType){
       let promise = dispatch(getMovie)
       let promise2 = dispatch(getGenres)
       let promise1 = dispatch(ProfileThunk)
       let promise4 = dispatch(ISUserThunk)
        Promise.race([promise, promise1, promise2, promise4]).then(()=>{
            setTimeout(()=>{ dispatch(initAction())},600)

        })
    }
}




export default AppReducer
