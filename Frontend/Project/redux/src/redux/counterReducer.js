
const initialState = {
    counter: 0
}
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {               
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {                
                counter: state.counter - 1
            }
        case 'INCREASEBYVALUE':{
            return{
                counter: state.counter + action.payload                
            }
        }
        default:
            return state
    }
}

export function increseByValue(value){
    return {
        type:'INCREASEBYVALUE',
        payload : value
    }
}


export default counterReducer