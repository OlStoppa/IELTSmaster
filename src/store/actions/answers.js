import { ADD_ANSWER, DELETE_ANSWER, SET_INIT } from './actionTypes';

export const setInit = (answers, name, id) => {
  return {
    type: SET_INIT,
    answers,
    name,
    id,
  };
};

export const addAnswer = (answer, testNumber, index, part) => {
  return {
    type: ADD_ANSWER,
    answer,
    index,
    testNumber,
    part,
  };
};

export const deleteAnswer = (index, testNumber, part) => {
  return {
    type: DELETE_ANSWER,
    index,
    testNumber,
    part,
  };
};
