export const reducer = (state=[],action) => {
    switch(action.type){
        case 'ADD':{
            return [...state, action.payload];
        }
        case 'REMOVE':{
            state = state.filter((val,index) => (index !== action.payload))
            return state
        }
        default:{
            return state
        }
    }
}