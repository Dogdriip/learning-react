import { createReducer } from "typesafe-actions";
import { Todo } from "../../types/Todo";
import { TodosState, TodosAction } from "./types";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";

// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
const reducer = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) => state.concat({ ...action.payload } as Todo),
  [TOGGLE_TODO]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
    ),
  [REMOVE_TODO]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

export default reducer;
