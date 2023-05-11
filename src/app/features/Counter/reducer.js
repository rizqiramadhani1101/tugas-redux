import * as counter from './constans'

let initialState = {
count : 0
}

const counterReducer = (state= initialState, action) => {
    switch(action.type) {
        case counter.INC:
            return{
                ...state,
                count:state.count + action.value
            }
        case counter.DEC:
            return{
                count:state.count -action.value
            }
            default:
                return state



    }
}

export default counterReducer