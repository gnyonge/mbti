const SET_QUESTIONS = 'SET_QUESTIONS';
const SET_NOW = 'SET_NOW';
const SET_SELETED = 'SET_SELETED';

export const setQuestions = (questions) => ({ type: SET_QUESTIONS, questions });
export const setNow = (now) => ({ type: SET_NOW, now });
export const setSelected = (select) => ({ type: SET_SELETED, select})

const initialState = {
  questions: [],
  now: 0,
  selected: null,
};

export default function mbti(state = initialState, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };
    case SET_NOW:
      return {
        ...state,
        now: action.now
      };
    case SET_SELETED:
      if (action.select === null || state.selected === null) {
        return {
          ...state,
          selected: action.select
        };
      }
      return {
        ...state,
        selected: state.selected + action.select
      };
    default:
      return state;
  }
}