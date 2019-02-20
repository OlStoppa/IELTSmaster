import { ADD_ANSWER, DELETE_ANSWER, SET_INIT } from '../actions/actionTypes';

const initialState = {
    answers: {
        part1: new Array(4).fill(new Array(8).fill(0)),
        part2: new Array(4).fill(new Array(1).fill(0)),
        part3: new Array(4).fill(new Array(6).fill(0))
    }
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INIT:
        return {
            
            answers: action.answers
        };
        case ADD_ANSWER:
        return {
            
            answers: {
                ...state.answers,
                     [action.part]: state.answers[action.part].map((arr, index) => {
                        if ( index === action.testNumber) {
                            return arr.map((answer, index) => {
                                if(index === action.index) {
                                    return action.answer;
                                }
                                return answer;
                            })
                        }
                        return arr;
                     })
                        
                
            }
        };
        case DELETE_ANSWER:
        return {
            answers: {
                ...state.answers,
                     [action.part]: state.answers[action.part].map((arr, index) => {
                        if ( index === action.testNumber) {
                            return arr.map((answer, index) => {
                                if(index === action.index) {
                                    return 0;
                                }
                                return answer;
                            })
                        }
                        return arr;
                     })
                        
                
            }
            
           
        };
        default:
            return state;
    }
};



export default reducer;