import { ADD_ANSWER, DELETE_ANSWER, SET_INIT } from '../actions/actionTypes';

const initialState = {
    answers: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INIT:
        return {
            
            answers: action.answers
        };
        case ADD_ANSWER:
        return {
            
            answers: state.answers.map((answer, index) => {
               if(index === action.index){
                   return action.answer;
               } 
               return answer;
            })
        };
        case DELETE_ANSWER:
        return {
            
            answers: state.answers.map((answer, index) => {
                if(index === action.index){
                    return undefined;
                } 
                return answer;
             })
        }
        default:
            return state;
    }
};



export default reducer;