import { ADD_ANSWER, DELETE_ANSWER, SET_INIT} from './actionTypes';

export const setInit = (answers) => {
    return {
        type: SET_INIT,
        answers
    }
};

export const addAnswer = (answer, index) => {
    return {
        type: ADD_ANSWER,
        answer: answer,
        index
    };
};

export const deleteAnswer = (index) => {
    return {
        type: DELETE_ANSWER,
        index
    };
};