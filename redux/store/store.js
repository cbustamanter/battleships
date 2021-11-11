import { combineReducers, createStore } from "redux";
import { difficultyReducer } from "../reducers/difficultyReducer";
import { boardReducer } from "../reducers/boardReducer";
const reducers = combineReducers({
  board: boardReducer,
  difficulty: difficultyReducer,
});

export const store = createStore(reducers);
