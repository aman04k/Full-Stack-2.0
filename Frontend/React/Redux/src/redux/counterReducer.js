// import { act } from "react"

const initialState ={
    counter: 0
}

export const counterReducer = (state=initialState, action) =>{

    switch(action.type){
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
         case 'DECREMENT':
            return {
                counter: state.counter - 1

            }   
           default:
            return state

    }
}

export function increaseByValue(value){
    return {
        type: 'INCREMENTBYVALUE',
        payload: value
    }
}

export default counterReducer