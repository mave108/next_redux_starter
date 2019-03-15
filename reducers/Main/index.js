import { actionTypes } from '../../actions/types';

const initialState = {
    lastUpdate: 0,
    light: false,
    count: 0
  }

const Main = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TICK:
        return { ...state, lastUpdate: action.ts,light: !!action.light }
        case actionTypes.INCREMENT:
        return { ...state, count: state.count + 1 }
        case actionTypes.DECREMENT:
        return { ...state, count: state.count - 1 }
        case actionTypes.RESET:
        return { ...state, count: initialState.count }
        default:
          return state;
      }
}
export default Main;